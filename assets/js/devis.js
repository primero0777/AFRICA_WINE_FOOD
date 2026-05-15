/* =======================================================
   AFRICA WINE FOOD — devis.js
   Génération dynamique du devis depuis awf-cart
   Dépendances : productsData (main.js), jsPDF CDN, EmailJS CDN
   ======================================================= */

'use strict';

/* ── Devise choisie par le client dans le modal ──────── */
let _devisCurrency = 'XOF'; // 'XOF' ou 'USD', défini au moment de la confirmation

/* ── Échappement HTML (protection XSS) ──────────────── */
function esc(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ── Numéro de devis ─────────────────────────────────── */
function generateDevisNumber() {
  const now   = new Date();
  const year  = now.getFullYear();
  const day   = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const rand  = Math.floor(1000 + Math.random() * 9000);
  return `AWF-${year}-${day}${month}-${rand}`;
}

/* ── Lecture du panier ───────────────────────────────── */
function getCart() {
  try { return JSON.parse(localStorage.getItem('awf-cart') || '[]'); }
  catch(e) { return []; }
}

/* ── Lecture des données client depuis sessionStorage ── */
function getClientData() {
  try {
    const raw = sessionStorage.getItem('awf-devis-client');
    if (raw) {
      sessionStorage.removeItem('awf-devis-client');
      return JSON.parse(raw);
    }
  } catch(e) {}
  return { prenom: '', nom: '', email: '', phone: '', ville: '', pays: '', delivery: '', occasion: '', notes: '' };
}

/* ── Lecture du ?id= pour consultation historique ────── */
function getHistoryId() {
  return new URLSearchParams(window.location.search).get('id') || null;
}

/* ── Formatage prix selon la devise choisie par le client */
function fmtXof(n) {
  const num = Number(n);
  if (_devisCurrency === 'USD' && window.AWF_CURRENCY) {
    return window.AWF_CURRENCY.fmtUSD(num / window.AWF_CURRENCY.rate);
  }
  if (window.AWF_CURRENCY) return window.AWF_CURRENCY.fmtXOF(num);
  return num.toLocaleString('fr-FR') + ' F CFA';
}

/* ── Label devise pour l'en-tête du devis ────────────── */
function getCurrencyLabel() {
  if (_devisCurrency !== 'USD' || !window.AWF_CURRENCY) return null;
  const rate = Math.round(window.AWF_CURRENCY.rate);
  return `Devis établi en USD — taux de conversion : 1 USD = ${rate} F CFA`;
}

/* ── Date lisible ────────────────────────────────────── */
function fmtDate(date) {
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ── Sauvegarde historique ───────────────────────────── */
function saveToHistory(entry) {
  let history = [];
  try { history = JSON.parse(localStorage.getItem('awf-devis-history') || '[]'); } catch(e) {}
  history.unshift(entry);
  localStorage.setItem('awf-devis-history', JSON.stringify(history));
}

/* ── Chargement depuis historique (mode ?id=) ────────── */
function loadFromHistory(id) {
  try {
    const history = JSON.parse(localStorage.getItem('awf-devis-history') || '[]');
    return history.find(e => e.number === id) || null;
  } catch(e) { return null; }
}

/* ── Construction du message WhatsApp ────────────────── */
function buildWhatsAppMessage(data) {
  const { number, client, items, total, delivery } = data;
  let lines = '\u{1F377} Nouvelle commande Africa Wine Food\n\n';
  lines += '\u{1F464} ' + (client.prenom || '') + ' ' + (client.nom || '') + '\n';
  if (client.phone)   lines += '\u{1F4DE} ' + client.phone + '\n';
  if (client.ville || client.pays) lines += '\u{1F4CD} ' + [client.ville, client.pays].filter(Boolean).join(', ') + '\n';
  if (client.occasion) lines += '\u{1F3AF} Occasion : ' + client.occasion + '\n';
  lines += '\n\u{1F6D2} Commande :\n';
  items.forEach(item => {
    lines += '• ' + item.name + ' x' + item.qty + ' — ' + fmtXof(item.subtotal) + '\n';
  });
  lines += '\n\u{1F4B0} Total : ' + fmtXof(total) + '\n';
  lines += '\u{1F69A} Livraison : ' + (delivery || 'À définir') + '\n';
  lines += '\u{1F4CB} Devis N° : ' + number + '\n';
  if (_devisCurrency === 'USD' && window.AWF_CURRENCY) {
    lines += '\u{1F4B1} Taux\u00a0: 1 USD = ' + Math.round(window.AWF_CURRENCY.rate) + ' F CFA\n';
  }
  return lines;
}

/* ── Envoi WhatsApp ──────────────────────────────────── */
function sendWhatsApp(data) {
  const WA_NUMBER = '22890112233';
  const text = buildWhatsAppMessage(data);
  window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
}

/* ── Envoi EmailJS ───────────────────────────────────── */
function sendEmail(data) {
  if (typeof emailjs === 'undefined') return;
  const { number, dateStr, client, items, total, delivery } = data;
  const itemsTxt = items.map(i =>
    `${i.name} × ${i.qty}  →  ${fmtXof(i.unitPrice)} / bouteille  =  ${fmtXof(i.subtotal)}`
  ).join('\n');
  const waText = buildWhatsAppMessage(data);

  emailjs.send('AWF_SERVICE_ID', 'AWF_DEVIS_TEMPLATE', {
    devis_number:     number,
    devis_date:       dateStr,
    client_name:      `${client.prenom} ${client.nom}`,
    client_email:     client.email  || '—',
    client_phone:     client.phone  || '—',
    client_ville:     client.ville  || '—',
    client_pays:      client.pays   || '—',
    occasion:         client.occasion || '—',
    delivery:         delivery || 'À définir',
    notes:            client.notes  || '—',
    items_list:       itemsTxt,
    total:            fmtXof(total),
    message_complet:  waText,
    reply_to:         client.email  || 'contact@africawinefood.com',
  }).catch(() => {});
}

/* ── Génération PDF (retourne une Promise) ───────────── */
function generatePDF(devisNumber) {
  const pageEl = document.querySelector('.page');
  if (!pageEl) return Promise.resolve(null);

  if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
    return Promise.resolve(null);
  }

  return html2canvas(pageEl, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
    const { jsPDF } = window.jspdf;
    const pdf  = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const imgW = 210;
    const imgH = (canvas.height * imgW) / canvas.width;
    pdf.addImage(canvas.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, imgW, imgH);
    pdf.save(`Devis-${devisNumber}.pdf`);
    return pdf;
  });
}

/* ── Export PDF seul (bouton Télécharger) ────────────── */
function exportPDF(devisNumber) {
  const btnBar = document.getElementById('devis-actions');
  if (btnBar) btnBar.style.display = 'none';

  if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
    alert('Chargement en cours, veuillez réessayer dans un instant.');
    if (btnBar) btnBar.style.display = '';
    return;
  }

  generatePDF(devisNumber).then(() => {
    if (btnBar) btnBar.style.display = '';
  }).catch(() => {
    if (btnBar) btnBar.style.display = '';
  });
}

/* ── Modal de confirmation client ────────────────────── */
function showConfirmModal(devisData) {
  return new Promise((resolve, reject) => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(26,26,26,.65);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';

    const inp = 'width:100%;padding:10px 14px;border:1.5px solid #e8e0d5;border-radius:3px;font-family:inherit;font-size:.9rem;box-sizing:border-box;outline:none;';
    const lbl = 'display:block;font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#7A7069;margin-bottom:6px;';
    const grp = 'margin-bottom:14px;';

    overlay.innerHTML = `
      <div style="background:#fff;border-radius:6px;padding:32px;max-width:500px;width:100%;box-shadow:0 16px 64px rgba(0,0,0,.3);font-family:'Raleway',system-ui,sans-serif;max-height:90vh;overflow-y:auto;">
        <div style="border-left:4px solid #C9A84C;padding-left:14px;margin-bottom:22px;">
          <h2 style="font-family:'Playfair Display',Georgia,serif;font-size:1.25rem;color:#4D0F1C;margin:0 0 4px;">Confirmer la commande</h2>
          <p style="font-size:.82rem;color:#7A7069;margin:0;">Renseignez vos coordonnées pour finaliser votre devis.</p>
        </div>

        <form id="cf-form" novalidate>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
            <div>
              <label style="${lbl}">Prénom *</label>
              <input id="cf-prenom" type="text" placeholder="Jean" autocomplete="given-name" style="${inp}" />
            </div>
            <div>
              <label style="${lbl}">Nom *</label>
              <input id="cf-nom" type="text" placeholder="Agbodjan" autocomplete="family-name" style="${inp}" />
            </div>
          </div>

          <div style="${grp}">
            <label style="${lbl}">Email <span style="font-weight:400;text-transform:none;letter-spacing:0;color:#b0a89e;">(facultatif)</span></label>
            <input id="cf-email" type="email" placeholder="exemple@email.com" autocomplete="email" style="${inp}" />
          </div>

          <div style="${grp}">
            <label style="${lbl}">Téléphone *</label>
            <div style="display:flex;gap:8px;">
              <select id="cf-indicatif" style="padding:10px 8px;border:1.5px solid #e8e0d5;border-radius:3px;font-family:inherit;font-size:.83rem;flex-shrink:0;width:135px;outline:none;">
                <option value="+228">🇹🇬 +228</option>
                <option value="+225">🇨🇮 +225</option>
                <option value="+221">🇸🇳 +221</option>
                <option value="+233">🇬🇭 +233</option>
                <option value="+229">🇧🇯 +229</option>
                <option value="+226">🇧🇫 +226</option>
                <option value="+223">🇲🇱 +223</option>
                <option value="+227">🇳🇪 +227</option>
                <option value="+237">🇨🇲 +237</option>
                <option value="+242">🇨🇬 +242</option>
                <option value="+241">🇬🇦 +241</option>
                <option value="+212">🇲🇦 +212</option>
                <option value="+216">🇹🇳 +216</option>
                <option value="+213">🇩🇿 +213</option>
                <option value="+20">🇪🇬 +20</option>
                <option value="+234">🇳🇬 +234</option>
                <option value="+27">🇿🇦 +27</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+32">🇧🇪 +32</option>
                <option value="+41">🇨🇭 +41</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
              <input id="cf-phone" type="tel" placeholder="90 11 22 33" autocomplete="tel"
                style="flex:1;padding:10px 14px;border:1.5px solid #e8e0d5;border-radius:3px;font-family:inherit;font-size:.9rem;outline:none;" />
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
            <div>
              <label style="${lbl}">Pays *</label>
              <select id="cf-pays" style="${inp}">
                <option value="">— Choisir un pays —</option>
                <optgroup label="Afrique de l'Ouest">
                  <option value="Togo">Togo</option>
                  <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                  <option value="Sénégal">Sénégal</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Bénin">Bénin</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Mali">Mali</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Guinée">Guinée</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Libéria">Libéria</option>
                  <option value="Gambie">Gambie</option>
                  <option value="Guinée-Bissau">Guinée-Bissau</option>
                  <option value="Cap-Vert">Cap-Vert</option>
                  <option value="Mauritanie">Mauritanie</option>
                </optgroup>
                <optgroup label="Afrique Centrale">
                  <option value="Cameroun">Cameroun</option>
                  <option value="Congo">Congo</option>
                  <option value="RD Congo">RD Congo</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Tchad">Tchad</option>
                  <option value="Centrafrique">Centrafrique</option>
                  <option value="Guinée Équatoriale">Guinée Équatoriale</option>
                </optgroup>
                <optgroup label="Afrique du Nord">
                  <option value="Maroc">Maroc</option>
                  <option value="Algérie">Algérie</option>
                  <option value="Tunisie">Tunisie</option>
                  <option value="Égypte">Égypte</option>
                  <option value="Libye">Libye</option>
                </optgroup>
                <optgroup label="Afrique de l'Est &amp; Australe">
                  <option value="Éthiopie">Éthiopie</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Afrique du Sud">Afrique du Sud</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Angola">Angola</option>
                </optgroup>
                <optgroup label="Europe">
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Suisse">Suisse</option>
                  <option value="Allemagne">Allemagne</option>
                  <option value="Espagne">Espagne</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Italie">Italie</option>
                  <option value="Royaume-Uni">Royaume-Uni</option>
                </optgroup>
                <optgroup label="Amérique">
                  <option value="États-Unis">États-Unis</option>
                  <option value="Canada">Canada</option>
                </optgroup>
              </select>
            </div>
            <div>
              <label style="${lbl}">Ville *</label>
              <input id="cf-ville" type="text" placeholder="Lomé" autocomplete="address-level2" style="${inp}" />
            </div>
          </div>

          <div style="${grp}">
            <label style="${lbl}">Mode de livraison *</label>
            <select id="cf-livraison" style="${inp}">
              <option value="Livraison standard (5–7 jours ouvrés)">Livraison standard — 5 à 7 jours ouvrés</option>
              <option value="Livraison express (2–3 jours ouvrés)">Livraison express — 2 à 3 jours ouvrés</option>
              <option value="Retrait en agence — Lomé">Retrait en agence — Lomé, Quartier Administratif</option>
            </select>
          </div>

          <div id="cf-error" style="display:none;color:#c0392b;font-size:.8rem;margin-bottom:12px;padding:10px 14px;background:#fdf2f2;border-radius:3px;border-left:3px solid #c0392b;"></div>

          <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:8px;">
            <button type="button" id="cf-cancel"
              style="padding:10px 20px;background:transparent;border:1.5px solid #e8e0d5;border-radius:3px;font-family:inherit;font-size:.82rem;font-weight:600;cursor:pointer;color:#7A7069;">
              Annuler
            </button>
            <button type="submit"
              style="padding:10px 28px;background:#4D0F1C;color:#FAF7F2;border:none;border-radius:3px;font-family:inherit;font-size:.82rem;font-weight:700;cursor:pointer;letter-spacing:.06em;">
              ✓ Confirmer
            </button>
          </div>
        </form>
      </div>`;

    document.body.appendChild(overlay);
    setTimeout(() => document.getElementById('cf-prenom')?.focus(), 60);


    document.getElementById('cf-cancel').addEventListener('click', () => { overlay.remove(); reject('cancelled'); });
    overlay.addEventListener('click', e => { if (e.target === overlay) { overlay.remove(); reject('cancelled'); } });

    document.getElementById('cf-form').addEventListener('submit', e => {
      e.preventDefault();
      const prenom    = document.getElementById('cf-prenom').value.trim();
      const nom       = document.getElementById('cf-nom').value.trim();
      const email     = document.getElementById('cf-email').value.trim();
      const indicatif = document.getElementById('cf-indicatif').value;
      const phone     = document.getElementById('cf-phone').value.trim();
      const pays      = document.getElementById('cf-pays').value.trim();
      const ville     = document.getElementById('cf-ville').value.trim();
      const livraison = document.getElementById('cf-livraison').value;
      const errEl     = document.getElementById('cf-error');

      if (!prenom || !nom || !phone || !pays || !ville) {
        errEl.textContent = 'Veuillez remplir tous les champs obligatoires.';
        errEl.style.display = 'block';
        return;
      }
      errEl.style.display = 'none';
      overlay.remove();
      resolve({ prenom, nom, email, phone: indicatif + ' ' + phone, pays, ville, delivery: livraison });
    });
  });
}

/* ── Mise à jour section client dans le DOM ──────────── */
function updateClientSection(client) {
  const elName    = document.getElementById('devis-client-name');
  const elDetails = document.getElementById('devis-client-details');
  if (elName) elName.textContent = `${client.prenom || ''} ${client.nom || ''}`.trim() || '[Nom du Client]';
  if (elDetails) {
    const lines = [
      client.ville && client.pays ? esc(client.ville) + ', ' + esc(client.pays) : esc(client.ville || client.pays),
      esc(client.email),
      esc(client.phone),
      client.delivery ? 'Livraison : ' + esc(client.delivery) : '',
    ].filter(Boolean);
    elDetails.innerHTML = lines.join('<br/>') || '[Coordonnées client]';
  }
}

/* ── Confirmation commande : Modal → PDF + WhatsApp + Email ── */
async function confirmOrder(devisData) {
  const btn = document.getElementById('btn-devis-wa');

  /* 1. Collecter les infos client via le modal */
  let clientInfo;
  try {
    clientInfo = await showConfirmModal(devisData);
  } catch(e) { return; }

  /* Fusionner avec les données existantes */
  const updatedData = Object.assign({}, devisData, {
    client:   Object.assign({}, devisData.client, clientInfo),
    delivery: clientInfo.delivery || devisData.delivery,
  });

  /* 2. Mettre à jour la section client sur le document */
  updateClientSection(updatedData.client);
  populateDevis(updatedData);
  saveToHistory(updatedData);

  const btnBar = document.getElementById('devis-actions');
  const pageEl = document.querySelector('.page');

  if (btn) { btn.disabled = true; btn.textContent = 'Préparation…'; }
  if (btnBar) btnBar.style.display = 'none';

  /* 3. Générer et télécharger le PDF (avec les infos client visibles) */
  if (typeof html2canvas !== 'undefined' && typeof window.jspdf !== 'undefined') {
    try {
      const canvas = await html2canvas(pageEl, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
      const { jsPDF } = window.jspdf;
      const pdf  = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const imgW = 210;
      const imgH = (canvas.height * imgW) / canvas.width;
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, imgW, imgH);
      pdf.save(`Devis-${updatedData.number}.pdf`);
    } catch(e) {}
  }

  if (btnBar) btnBar.style.display = '';

  /* 4. Ouvrir WhatsApp avec le texte préformaté */
  sendWhatsApp(updatedData);

  /* 5. Envoyer l'email en arrière-plan */
  sendEmail(updatedData);

  if (btn) { btn.disabled = false; btn.textContent = '✓ Confirmer la commande'; }
}

/* ── Remplissage du DOM de devis.html ────────────────── */
function populateDevis(devisData) {
  const { number, dateStr, client, items, total, delivery } = devisData;

  /* Header — textContent uniquement, pas de risque XSS */
  const elNum  = document.getElementById('devis-number');
  const elDate = document.getElementById('devis-date');
  if (elNum)  elNum.textContent  = `N° ${number}`;
  if (elDate) {
    elDate.textContent = `Émis le ${dateStr}`;
    const currLabel = getCurrencyLabel();
    if (currLabel) {
      const note = document.createElement('span');
      note.style.cssText = 'display:block;font-size:.72rem;color:#C9A84C;margin-top:4px;font-style:italic;';
      note.textContent = currLabel;
      elDate.appendChild(note);
    }
  }

  /* Client */
  const elClientName    = document.getElementById('devis-client-name');
  const elClientDetails = document.getElementById('devis-client-details');
  if (elClientName) elClientName.textContent = `${client.prenom} ${client.nom}`.trim() || '[Nom du Client]';
  if (elClientDetails) {
    const lines = [
      client.ville && client.pays ? `${esc(client.ville)}, ${esc(client.pays)}` : esc(client.ville || client.pays),
      esc(client.email),
      esc(client.phone),
      client.occasion ? `Occasion : ${esc(client.occasion)}` : '',
      client.notes    ? `Note : ${esc(client.notes)}` : '',
    ].filter(Boolean);
    elClientDetails.innerHTML = lines.join('<br/>') || '[Coordonnées client]';
  }

  /* Tableau produits */
  const tbody     = document.getElementById('devis-tbody');
  const totauxBox = document.getElementById('devis-totaux-box');
  if (tbody) {
    tbody.innerHTML = '';
    items.forEach((item, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="td-num">${String(i + 1).padStart(2, '0')}</td>
        <td class="td-desc">
          <strong>${esc(item.name)}</strong>
          <span>${esc(item.appellation)} — 75 cl</span>
        </td>
        <td style="text-align:right">${esc(item.qty)}</td>
        <td style="text-align:right">${fmtXof(item.unitPrice)}</td>
        <td style="text-align:right;color:#7A7069">0 %</td>
        <td style="text-align:right;font-weight:600">${fmtXof(item.subtotal)}</td>`;
      tbody.appendChild(tr);
    });

    /* Ligne livraison */
    const trLiv = document.createElement('tr');
    trLiv.innerHTML = `
      <td class="td-num">${String(items.length + 1).padStart(2, '0')}</td>
      <td class="td-desc">
        <strong>Livraison express sécurisée</strong>
        <span>Emballage luxe sur mesure, transport température contrôlée. Mode : ${esc(delivery || 'À définir')}.</span>
      </td>
      <td style="text-align:right">—</td>
      <td style="text-align:right">—</td>
      <td style="text-align:right;color:#7A7069">—</td>
      <td style="text-align:right;font-weight:600">Sur devis</td>`;
    tbody.appendChild(trLiv);
  }

  /* Totaux */
  if (totauxBox) {
    const itemCount = items.reduce((s, i) => s + i.qty, 0);
    let html = '';
    html += `<div class="totaux-line">
      <span class="lbl">${items.length} produit${items.length > 1 ? 's' : ''} (${itemCount} article${itemCount > 1 ? 's' : ''})</span>
      <span class="val">${fmtXof(total)}</span>
    </div>`;
    html += `<div class="totaux-line"><span class="lbl">Livraison</span><span class="val">Sur devis</span></div>`;
    html += `<div class="totaux-line"><span class="lbl">TVA</span><span class="val">Non applicable</span></div>`;
    html += `<div class="totaux-final">
      <span class="lbl">Total TTC</span>
      <span class="val">${fmtXof(total)}</span>
    </div>`;
    totauxBox.innerHTML = html;
  }

  /* Footer */
  const elFooterRef   = document.getElementById('devis-footer-ref');
  const elFooterValid = document.getElementById('devis-footer-valid');
  if (elFooterRef)   elFooterRef.textContent = `Africa Wine Food — Devis N° ${number} — Lomé, Togo`;
  if (elFooterValid) {
    const validDate = new Date();
    validDate.setDate(validDate.getDate() + 15);
    elFooterValid.textContent = `Valable jusqu'au ${fmtDate(validDate)}`;
  }
}

/* ── Point d'entrée principal ────────────────────────── */
function initDevis() {
  /* Lire la devise choisie avant la génération (sessionStorage, effacé après lecture) */
  const savedCurrency = sessionStorage.getItem('awf-devis-currency');
  if (savedCurrency) {
    sessionStorage.removeItem('awf-devis-currency');
    _devisCurrency = savedCurrency === 'USD' ? 'USD' : 'XOF';
  }

  const historyId = getHistoryId();
  const now       = new Date();
  let devisData;

  if (historyId) {
    /* Mode consultation historique via ?id= */
    const saved = loadFromHistory(historyId);
    if (!saved) {
      const pageEl = document.querySelector('.page');
      if (pageEl) pageEl.innerHTML = '<p style="padding:2rem;text-align:center;color:#7A7069">Devis introuvable.</p>';
      return;
    }
    devisData = saved;
  } else {
    /* Mode génération depuis le panier */
    const cart = getCart();
    if (!cart.length) {
      window.location.href = 'commande.html';
      return;
    }

    const client  = getClientData();
    const number  = generateDevisNumber();
    const dateStr = fmtDate(now);

    const items = cart.map(item => {
      const data = (typeof productsData !== 'undefined')
        ? productsData.find(p => p.id === item.id)
        : null;
      const name        = data ? data.fr.name : item.id;
      const appellation = data ? data.fr.appellation : '';
      const unitPrice   = data ? (data.priceXof || 0) : 0;
      const subtotal    = unitPrice * item.qty;
      return { name, appellation, unitPrice, qty: item.qty, subtotal };
    });

    const total = items.reduce((s, i) => s + i.subtotal, 0);

    devisData = {
      number,
      dateStr,
      date:     now.toISOString(),
      client,
      items,
      total,
      delivery: client.delivery,
    };

  }

  /* Remplir le DOM */
  populateDevis(devisData);

  /* Boutons de la barre d'actions */
  const btnPdf  = document.getElementById('btn-devis-pdf');
  const btnWa   = document.getElementById('btn-devis-wa');
  const btnBack = document.getElementById('btn-devis-back');

  if (btnPdf)  btnPdf.addEventListener('click',  () => exportPDF(devisData.number));
  if (btnWa)   btnWa.addEventListener('click',   () => confirmOrder(devisData));
  if (btnBack) btnBack.addEventListener('click', () => { window.location.href = 'commande.html'; });
}

document.addEventListener('DOMContentLoaded', initDevis);
