var translations = { en: lang_en, es: lang_es };

function setLang(lang) {
  var yrs = new Date().getFullYear() - 2012;
  var t = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key].replace('{years}', yrs);
  });

  document.getElementById('lang-label').textContent = lang.toUpperCase();
  var menu = document.getElementById('lang-menu');
  if (menu) menu.classList.add('hidden');
}
