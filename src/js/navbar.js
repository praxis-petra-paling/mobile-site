(function() {
  var openMenuButton = document.getElementById('open-menu');
  var closeMenuButton = document.getElementById('close-menu');

  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);

  function openMenu() {
    hide(openMenuButton);
    show(closeMenuButton);
  }

  function closeMenu() {
    hide(closeMenuButton);
    show(openMenuButton);
  }

  function hide(elem) {
    elem.style.display = 'none';
  }

  function show(elem) {
    elem.style.display = 'block';
  }
}());
