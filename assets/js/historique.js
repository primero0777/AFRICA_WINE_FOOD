/* =======================================================
   AFRICA WINE FOOD - historique.js  (Admin only)
   ======================================================= */

'use strict';

/* SHA-256 de AWF@Lome - mot de passe jamais stocké en clair */
const ADMIN_HASH  = '1c2900019142a8119cd85d0ab828416d1539fdcb23cfc7f08fd44d9e4cc01fbb';
const SESSION_KEY = 'awf-admin-auth';
const LOCKOUT_KEY = 'awf-admin-lockout';
const MAX_ATTEMPTS = 5;
let _sortKey = 'date-desc';

/* ── Utils ──────────────────────────────────────── */

function esc(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function fmtXof(n) {
  return Number(n).toLocaleString('fr-FR') + ' FCFA';
}

const HISTORY_MAX_AGE = 90 * 24 * 3600 * 1000; /* 90 jours */
const HISTORY_MAX_ENTRIES = 50;

function getHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem('awf-devis-history') || '[]');
    const cutoff = Date.now() - HISTORY_MAX_AGE;
    return raw.filter(e => !e.ts || e.ts > cutoff);
  } catch(e) { return []; }
}

function saveHistory(h) {
  const pruned = h.slice(-HISTORY_MAX_ENTRIES);
  localStorage.setItem('awf-devis-history', JSON.stringify(pruned));
}

/* ── Auth ──────────────────────────────────────── */

async function sha256hex(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}

function isLockedOut() {
  try {
    const d = JSON.parse(localStorage.getItem(LOCKOUT_KEY) || 'null');
    if (!d) return false;
    if (Date.now() > d.until) { localStorage.removeItem(LOCKOUT_KEY); return false; }
    return d;
  } catch(_) { return false; }
}

function recordFailedAttempt() {
  try {
    const d = JSON.parse(localStorage.getItem(LOCKOUT_KEY) || '{"count":0,"until":0}');
    d.count = (d.count || 0) + 1;
    if (d.count >= MAX_ATTEMPTS) d.until = Date.now() + 15 * 60 * 1000; /* 15 min */
    localStorage.setItem(LOCKOUT_KEY, JSON.stringify(d));
    return d;
  } catch(_) { return null; }
}

function isAuthenticated() {
  return localStorage.getItem(SESSION_KEY) === '1';
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  location.reload();
}

function showOverlay() {
  document.getElementById('admin-overlay').style.display = 'flex';
  document.getElementById('main-content').style.display  = 'none';
  document.getElementById('navbar').style.display        = 'none';
  setTimeout(() => document.getElementById('admin-pwd')?.focus(), 100);
}

function hideOverlay() {
  document.getElementById('admin-overlay').style.display = 'none';
  document.getElementById('main-content').style.removeProperty('display');
  document.getElementById('navbar').style.removeProperty('display');
}

function handleLogin(e) {
  e.preventDefault();
  const pwdEl = document.getElementById('admin-pwd');
  const errEl = document.getElementById('admin-error');
  const card  = document.querySelector('.admin-login-card');
  const submitBtn = document.getElementById('admin-submit');

  const lockout = isLockedOut();
  if (lockout) {
    const mins = Math.ceil((lockout.until - Date.now()) / 60000);
    errEl.textContent = `Trop de tentatives. Réessayez dans ${mins} min.`;
    errEl.hidden = false;
    return;
  }

  const pwd = pwdEl.value;
  pwdEl.value = '';
  if (submitBtn) submitBtn.disabled = true;

  sha256hex(pwd).then(hash => {
    if (hash === ADMIN_HASH) {
      localStorage.removeItem(LOCKOUT_KEY);
      localStorage.setItem(SESSION_KEY, '1');
      hideOverlay();
      initAdmin();
    } else {
      const d = recordFailedAttempt();
      const remaining = MAX_ATTEMPTS - (d ? d.count : 1);
      errEl.textContent = remaining > 0
        ? `Mot de passe incorrect. ${remaining} tentative(s) restante(s).`
        : 'Compte verrouillé 15 minutes.';
      errEl.hidden = false;
      pwdEl.focus();
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 500);
    }
    if (submitBtn) submitBtn.disabled = false;
  });
}

/* ── History ────────────────────────────────────── */

function sortHistory(history) {
  const arr = [...history];
  switch (_sortKey) {
    case 'date-asc':
      return arr.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
    case 'name':
      return arr.sort((a, b) => {
        const na = [a.client?.prenom, a.client?.nom].filter(Boolean).join(' ').toLowerCase();
        const nb = [b.client?.prenom, b.client?.nom].filter(Boolean).join(' ').toLowerCase();
        return na.localeCompare(nb, 'fr');
      });
    case 'total-desc':
      return arr.sort((a, b) => (b.total || 0) - (a.total || 0));
    default:
      return arr.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }
}

function buildWhatsAppMessage(entry) {
  const { number, client, items, total, delivery } = entry;
  let lines = '\u{1F377} Nouvelle commande Africa Wine Food\n\n';
  lines += '\u{1F464} ' + (client.prenom || '') + ' ' + (client.nom || '') + '\n';
  if (client.phone)                lines += '\u{1F4DE} ' + client.phone + '\n';
  if (client.ville || client.pays) lines += '\u{1F4CD} ' + [client.ville, client.pays].filter(Boolean).join(', ') + '\n';
  if (client.occasion)             lines += '\u{1F3AF} Occasion : ' + client.occasion + '\n';
  lines += '\n\u{1F6D2} Commande :\n';
  (items || []).forEach(i => { lines += '- ' + i.name + ' x' + i.qty + ' - ' + fmtXof(i.subtotal) + '\n'; });
  lines += '\n\u{1F4B0} Total : ' + fmtXof(total) + '\n';
  lines += '\u{1F69A} Livraison : ' + (delivery || 'A définir') + '\n';
  lines += '\u{1F4CB} Devis N : ' + number + '\n';
  return lines;
}

function updateStats(history) {
  const statsEl   = document.getElementById('hist-stats');
  const toolbarEl = document.getElementById('hist-toolbar');
  const hasItems  = history.length > 0;
  if (statsEl)   statsEl.hidden   = !hasItems;
  if (toolbarEl) toolbarEl.hidden = !hasItems;
  if (!hasItems) return;

  const totalArticles = history.reduce((s, e) => s + (e.items || []).reduce((a, i) => a + i.qty, 0), 0);
  const totalVal      = history.reduce((s, e) => s + (e.total || 0), 0);
  const countEl    = document.getElementById('stat-count');
  const articlesEl = document.getElementById('stat-articles');
  const totalEl    = document.getElementById('stat-total');
  if (countEl)    countEl.textContent    = history.length;
  if (articlesEl) articlesEl.textContent = totalArticles;
  if (totalEl)    totalEl.textContent    = totalVal.toLocaleString('fr-FR');
}

function renderHistory() {
  const history = getHistory();
  const listEl  = document.getElementById('historique-list');
  const emptyEl = document.getElementById('historique-empty');
  if (!listEl || !emptyEl) return;

  updateStats(history);

  if (!history.length) {
    emptyEl.hidden = false;
    listEl.hidden  = true;
    return;
  }

  emptyEl.hidden   = true;
  listEl.hidden    = false;
  listEl.innerHTML = '';

  const sorted = sortHistory(history);
  sorted.forEach(entry => {
    const originalIndex = history.indexOf(entry);
    const clientName = [entry.client?.prenom, entry.client?.nom].filter(Boolean).join(' ') || '-';
    const dateStr    = entry.date
      ? new Date(entry.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
      : entry.dateStr || '-';
    const itemCount = (entry.items || []).reduce((s, i) => s + i.qty, 0);
    const prodCount = (entry.items || []).length;
    const delivery  = entry.delivery || entry.client?.delivery || '-';

    const li = document.createElement('li');
    li.className = 'historique-item';
    li.innerHTML = `
      <div class="historique-item-header">
        <div class="historique-item-meta">
          <span class="historique-badge">Confirmé</span>
          <span class="historique-number">${esc(entry.number)}</span>
        </div>
        <span class="historique-date">${esc(dateStr)}</span>
      </div>
      <div class="historique-item-body">
        <div class="historique-info">
          <p class="historique-client">${esc(clientName)}</p>
          <p class="historique-detail">${prodCount} produit${prodCount > 1 ? 's' : ''} · ${itemCount} article${itemCount > 1 ? 's' : ''}</p>
          <p class="historique-detail">${esc(delivery)}</p>
          <p class="historique-total">${fmtXof(entry.total)}</p>
        </div>
        <div class="historique-actions">
          <a href="devis.html?id=${encodeURIComponent(entry.number)}" class="hist-btn hist-btn--voir">
            Voir le devis
          </a>
          <button class="hist-btn hist-btn--wa" aria-label="Renvoyer sur WhatsApp">WhatsApp</button>
          <button class="hist-btn hist-btn--delete" aria-label="Supprimer ce devis">Supprimer</button>
        </div>
      </div>
    `;

    li.querySelector('.hist-btn--wa').addEventListener('click', () => {
      const text = buildWhatsAppMessage(entry);
      window.open('https://wa.me/22899072912?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
    });

    li.querySelector('.hist-btn--delete').addEventListener('click', () => {
      if (!confirm('Supprimer le devis ' + entry.number + ' ?')) return;
      const updated = getHistory();
      updated.splice(originalIndex, 1);
      saveHistory(updated);
      renderHistory();
    });

    listEl.appendChild(li);
  });
}

function initAdmin() {
  renderHistory();

  document.querySelectorAll('.hist-sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hist-sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _sortKey = btn.dataset.sort;
      renderHistory();
    });
  });

  const btnClearAll = document.getElementById('hist-btn-clear-all');
  if (btnClearAll) {
    btnClearAll.addEventListener('click', () => {
      const history = getHistory();
      if (!history.length) return;
      if (!confirm('Supprimer tous les ' + history.length + ' devis ? Cette action est irréversible.')) return;
      saveHistory([]);
      renderHistory();
    });
  }
}

/* ── Boot ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  /* Auth form handlers - always registered */
  document.getElementById('admin-login-form')?.addEventListener('submit', handleLogin);

  document.getElementById('admin-pwd-toggle')?.addEventListener('click', () => {
    const input  = document.getElementById('admin-pwd');
    const icon   = document.getElementById('eye-icon');
    const isText = input.type === 'text';
    input.type   = isText ? 'password' : 'text';
    icon.innerHTML = isText
      ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      : '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
  });

  document.getElementById('admin-logout')?.addEventListener('click', logout);

  if (!isAuthenticated()) {
    showOverlay();
    return;
  }

  initAdmin();
});
