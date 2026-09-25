/* AFRICA WINE FOOD - currency.js */
/* Convertisseur XOF <-> EUR  |  taux live, cache 1h */
/* Note: 1 EUR = 655.957 XOF (parité fixe CFA) */
'use strict';

window.AWF_CURRENCY = (function () {

  const _FALLBACK = 656;  /* parité fixe CFA : 1 EUR ≈ 655.957 XOF */
  const _API      = 'https://api.exchangerate-api.com/v4/latest/EUR';
  const _KEY      = 'awf_xof_eur_rate_v1';
  const _TTL      = 3600000; /* 1 heure */

  const _PREF  = 'awf_currency_pref';
  let _current = localStorage.getItem(_PREF) || 'XOF';
  let _rate    = _FALLBACK;

  /* Formatters */
  function fmtXOF(n) {
    return Math.round(n).toLocaleString('fr-FR') + ' F CFA';
  }
  function fmtEUR(n) {
    return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  }
  function fmtPrice(xofAmount) {
    return _current === 'XOF' ? fmtXOF(xofAmount) : fmtEUR(xofAmount / _rate);
  }

  /* Cache + API */
  async function _fetchRate() {
    try {
      const raw = localStorage.getItem(_KEY);
      if (raw) {
        const { r, ts } = JSON.parse(raw);
        if (Date.now() - ts < _TTL) return { r, fallback: false };
      }
    } catch (_) {}
    try {
      const ctrl = new AbortController();
      const tid  = setTimeout(() => ctrl.abort(), 5000);
      const res  = await fetch(_API, { signal: ctrl.signal });
      clearTimeout(tid);
      const data = await res.json();
      const r    = data.rates && data.rates.XOF;
      if (!r || isNaN(r)) throw new Error('invalid XOF rate');
      localStorage.setItem(_KEY, JSON.stringify({ r, ts: Date.now() }));
      return { r, fallback: false };
    } catch (_) {
      return { r: _FALLBACK, fallback: true };
    }
  }

  /* DOM: met a jour tous les [data-price-xof] */
  function _renderAll() {
    document.querySelectorAll('[data-price-xof]').forEach(el => {
      const xof = parseInt(el.dataset.priceXof, 10);
      if (!isNaN(xof)) el.textContent = fmtPrice(xof);
    });
    /* Notifie main.js pour rafraichir panier & modal */
    window.dispatchEvent(new CustomEvent('awf:currency', { detail: { current: _current, rate: _rate } }));
  }

  function _syncToggle() {
    const btn = document.getElementById('currency-toggle');
    if (!btn) return;
    const isEUR = _current === 'EUR';
    btn.querySelector('.cur-xof').classList.toggle('cur-active', !isEUR);
    btn.querySelector('.cur-eur').classList.toggle('cur-active',  isEUR);
    btn.setAttribute('aria-pressed', String(isEUR));
    btn.setAttribute('aria-label', isEUR ? 'Afficher les prix en F CFA' : 'Afficher les prix en Euro');
  }

  function _syncRateBadge(fallback) {
    const el = document.getElementById('currency-rate-display');
    if (!el) return;
    const r = Math.round(_rate);
    el.textContent = fallback
      ? `1 EUR ≈ ${r} F CFA ⚠️`
      : `1 EUR = ${r} F CFA (live)`;
    el.title = fallback
      ? 'Taux de secours, API temporairement indisponible'
      : 'Taux de change en temps réel';
    el.classList.toggle('rate-fallback', fallback);
  }

  /* Init */
  async function _init() {
    const { r, fallback } = await _fetchRate();
    _rate = r;
    _syncRateBadge(fallback);
    _renderAll();
    _syncToggle();

    const btn = document.getElementById('currency-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        _current = _current === 'XOF' ? 'EUR' : 'XOF';
        localStorage.setItem(_PREF, _current);
        _renderAll();
        _syncToggle();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', _init);

  /* API publique */
  return {
    get current() { return _current; },
    get rate()    { return _rate;    },
    fmtXOF,
    fmtEUR,
    fmtPrice,
  };

}());
