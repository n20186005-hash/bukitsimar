(() => {
  const key = 'bukitsimar_cookie_preferences', deniedKey = 'bukitsimar_analytics_denied', gaId = 'G-HXM22WWPKP';
  const en = document.documentElement.lang === 'en';
  const messages = en ? {
    on: 'Google Analytics allowed in this browser.', off: 'Google Analytics rejected in this browser.',
    tab: 'Google Analytics is off in this tab.',
    session: 'Google Analytics is off for this tab, including navigation and refresh. The permanent choice could not be saved and the old choice may remain in other tabs. Clear site data in browser settings to remove stored permission.',
    page: 'Google Analytics is off on this page. Storage is unavailable; clear site data in browser settings before navigating or refreshing.'
  } : {
    on: 'Google Analytics diizinkan pada peramban ini.', off: 'Google Analytics ditolak pada peramban ini.',
    tab: 'Google Analytics nonaktif pada tab ini.',
    session: 'Google Analytics dinonaktifkan untuk tab ini, termasuk perpindahan halaman dan pemuatan ulang. Pilihan permanen gagal disimpan dan pilihan lama mungkin masih ada di tab lain. Hapus data situs melalui pengaturan peramban untuk menarik izin tersimpan.',
    page: 'Google Analytics dinonaktifkan pada halaman ini. Penyimpanan tidak tersedia; hapus data situs melalui pengaturan peramban sebelum berpindah atau memuat ulang.'
  };
  function read() {
    try {
      const raw = JSON.parse(localStorage.getItem(key) || 'null');
      const denied = window.__bukitsimarDenied || sessionStorage.getItem(deniedKey) === '1';
      return { analytics: !denied && raw?.analytics === true, decided: denied || typeof raw?.analytics === 'boolean' };
    } catch { return { analytics: false, decided: false }; }
  }
  function denySession() {
    window.__bukitsimarDenied = true; window['ga-disable-' + gaId] = true;
    try { sessionStorage.setItem(deniedKey, '1'); return true; } catch { return false; }
  }
  function apply() {
    const allowed = read().analytics; window['ga-disable-' + gaId] = !allowed;
    if (!allowed) {
      if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
      for (const part of document.cookie.split(';')) {
        const name = part.split('=')[0].trim();
        if (/^_ga(?:_|$)/.test(name)) for (const domain of ['', '; domain=' + location.hostname, '; domain=.bukitsimar.com']) document.cookie = name + '=; Max-Age=0; path=/' + domain;
      }
      return false;
    }
    if (window.__bukitsimarLoaded) {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
      return true;
    }
    window.__bukitsimarLoaded = true; window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date()); window.gtag('config', gaId);
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId; document.head.appendChild(script);
    return true;
  }
  function save(value) {
    value = value === true; let sessionDenied = false, saved = false;
    if (!value) sessionDenied = denySession();
    try {
      if (value) {
        // Do not publish a shared grant until required storage can be read
        // and this tab's existing veto is confirmed cleared.
        sessionStorage.removeItem(deniedKey);
        if (sessionStorage.getItem(deniedKey) === '1') throw new Error('Tab refusal remains');
        localStorage.getItem(key);
      }
      localStorage.setItem(key, JSON.stringify({ analytics: value }));
      if (value) window.__bukitsimarDenied = false;
      saved = true;
    } catch { sessionDenied = denySession() || sessionDenied; }
    const analytics = apply();
    const result = { saved, analytics, message: saved ? (analytics ? messages.on : value ? messages.page : messages.off) : (sessionDenied ? messages.session : messages.page) };
    document.querySelectorAll('[data-consent-status]').forEach(node => { node.textContent = result.message; });
    const checkbox = document.getElementById('analytics'); if (checkbox) checkbox.checked = result.analytics;
    const banner = document.getElementById('cookie-banner'); if (saved) banner?.classList.add('hidden');
    return result;
  }
  window.BukitsimarConsent = { read, save };
  apply();
  const checkbox = document.getElementById('analytics'); if (checkbox) checkbox.checked = read().analytics;
  checkbox?.addEventListener('change', () => document.querySelectorAll('[data-consent-status]').forEach(node => { node.textContent = ''; }));
  if (!read().decided) document.getElementById('cookie-banner')?.classList.remove('hidden');
  document.querySelectorAll('[data-cookie-accept]').forEach(node => node.addEventListener('click', () => save(true)));
  document.querySelectorAll('[data-cookie-reject]').forEach(node => node.addEventListener('click', () => save(false)));
  document.getElementById('cookie-settings')?.addEventListener('submit', event => { event.preventDefault(); save(checkbox?.checked === true); });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    let grant = false; try { grant = JSON.parse(event.newValue || 'null')?.analytics === true; } catch {}
    if (!grant) denySession();
    const analytics = apply();
    if (checkbox) checkbox.checked = analytics;
    document.querySelectorAll('[data-consent-status]').forEach(node => { node.textContent = analytics ? messages.on : messages.tab; });
  });
})();
