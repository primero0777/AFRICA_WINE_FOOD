/* AFRICA WINE FOOD - currency.js */
/* convertisseur XOF <-> EUR, parité fixe du franc CFA */
/* Note: 1 EUR = 655.957 XOF (parité fixe CFA) */
'use strict';

window.AWF_CURRENCY = (function () {

  const _RATE = 655.957;  /* parité fixe : 1 EUR = 655,957 F CFA */

  const _PREF  = 'awf_currency_pref';
  let _current = localStorage.getItem(_PREF) || 'XOF';
  let _rate    = _RATE;

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

  function _syncRateBadge() {
    const el = document.getElementById('currency-rate-display');
    if (!el) return;
    el.textContent = '1 EUR = 655,957 F CFA';
    el.title = 'Parité fixe du franc CFA';
  }

  /* Init */
  function _init() {
    _syncRateBadge();
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
