(function() {
  var openMenuButton = document.getElementById('open-menu');
  var closeMenuButton = document.getElementById('close-menu');
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');

  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);

  function openMenu() {
    hide(content);
    show(menu);
    hide(openMenuButton);
    show(closeMenuButton);
  }

  function closeMenu() {
    hide(menu);
    show(content);
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
