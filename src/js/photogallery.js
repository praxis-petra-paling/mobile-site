(function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
  var items = [
    {
      src: 'images/Erstes.jpg',
      w: 1000,
      h: 1000
    },
    {
      src: 'images/Zweites.jpg',
      w: 1000,
      h: 1000
    }
  ];

// define options (if needed)
  var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
  };

// Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
})();