(function () {
  var yrs = new Date().getFullYear() - 2012;
  document.getElementById('exp-years').textContent = yrs;

  document.addEventListener('click', function (e) {
    var sw   = document.getElementById('lang-switcher');
    var menu = document.getElementById('lang-menu');
    if (sw && menu && !sw.contains(e.target)) menu.classList.add('hidden');
  });

  setLang('en');
})();
