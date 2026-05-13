/* =============================================
   AFRICA WINE FOOD — currency.js
   Convertisseur XOF <-> USD  |  taux live, cache 1h
   ============================================= */
'use strict';

window.AWF_CURRENCY = (function () {

  const _FALLBACK = 655;
  const _API      = 'https://api.exchangerate-api.com/v4/latest/USD';
  const _KEY      = 'awf_xof_rate_v1';
  const _TTL      = 3600000; /* 1 heure */

  let _current = 'XOF';
  let _rate    = _FALLBACK;

  /* ---- Formatters ---- */
  function fmtXOF(n) {
    return Math.round(n).toLocaleString('fr-FR') + ' F CFA';
  }
  function fmtUSD(n) {
    return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function fmtPrice(xofAmount) {
    return _current === 'XOF' ? fmtXOF(xofAmount) : fmtUSD(xofAmount / _rate);
  }

  /* ---- Cache + API ---- */
  async function _fetchRate() {
    try {
      const raw = localStorage.getItem(_KEY);
      if (raw) {
        const { r, ts } = JSON.parse(raw);
        if (Date.now() - ts < _TTL) return { r, fallback: false };
      }
    } catch (_) {}
    try {
      const res  = await fetch(_API);
      const data = await res.json();
      const r    = data.rates && data.rates.XOF;
      if (!r || isNaN(r)) throw new Error('invalid XOF rate');
      localStorage.setItem(_KEY, JSON.stringify({ r, ts: Date.now() }));
      return { r, fallback: false };
    } catch (_) {
      return { r: _FALLBACK, fallback: true };
    }
  }

  /* ---- DOM: met a jour tous les [data-price-xof] ---- */
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
    const isUSD = _current === 'USD';
    btn.querySelector('.cur-xof').classList.toggle('cur-active', !isUSD);
    btn.querySelector('.cur-usd').classList.toggle('cur-active',  isUSD);
    btn.setAttribute('aria-pressed', String(isUSD));
    btn.setAttribute('aria-label', isUSD ? 'Afficher les prix en F CFA' : 'Afficher les prix en USD');
  }

  function _syncRateBadge(fallback) {
    const el = document.getElementById('currency-rate-display');
    if (!el) return;
    const r = Math.round(_rate);
    el.textContent = fallback
      ? `1 USD ≈ ${r} F CFA ⚠️`
      : `1 USD = ${r} F CFA (live)`;
    el.title = fallback
      ? 'Taux de secours — API temporairement indisponible'
      : 'Taux de change en temps réel';
    el.classList.toggle('rate-fallback', fallback);
  }

  /* ---- Init ---- */
  async function _init() {
    const { r, fallback } = await _fetchRate();
    _rate = r;
    _syncRateBadge(fallback);
    _renderAll();
    _syncToggle();

    const btn = document.getElementById('currency-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        _current = _current === 'XOF' ? 'USD' : 'XOF';
        _renderAll();
        _syncToggle();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', _init);

  /* ---- API publique ---- */
  return {
    get current() { return _current; },
    get rate()    { return _rate;    },
    fmtXOF,
    fmtUSD,
    fmtPrice,
  };

}());
