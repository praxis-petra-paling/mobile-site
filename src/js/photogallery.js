(function() {
  function createPraxisGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var praxisItems = [
      {
        src: 'images/praxis/small/Erstes.jpg',
        w: 750,
        h: 1000
      },
      {
        src: 'images/praxis/small/Zweites.jpg',
        w: 1000,
        h: 1000
      },
      {
        src: 'images/praxis/small/Drittes.jpg',
        w: 1000,
        h: 750
      },
      {
        src: 'images/praxis/small/Viertes.jpg',
        w: 750,
        h: 1000
      },
      {
        src: 'images/praxis/small/Fünftes.jpg',
        w: 750,
        h: 1000
      },
      {
        src: 'images/praxis/small/Sechstes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/praxis/small/Siebtes.jpg',
        w: 1000,
        h: 750
      },
      {
        src: 'images/praxis/small/Achtes.jpg',
        w: 750,
        h: 1000
      }
    ];

    var options = {
      showAnimationDuration: 0
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, praxisItems, options);
    gallery.init();
  }

  function createTdotGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var tdotItems = [
      {
        src: 'images/tdot/small/Erstes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Zweites.jpg',
        w: 666,
        h: 1000
      },
      {
        src: 'images/tdot/small/Drittes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Viertes.jpg',
        w: 666,
        h: 1000
      },
      {
        src: 'images/tdot/small/Fünftes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Sechstes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Siebtes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Achtes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Neuntes.jpg',
        w: 666,
        h: 1000
      },
      {
        src: 'images/tdot/small/Zehntes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Elftes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Zwölftes.jpg',
        w: 666,
        h: 1000
      },
      {
        src: 'images/tdot/small/Dreizehntes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Vierzehntes.jpg',
        w: 1000,
        h: 666
      },
      {
        src: 'images/tdot/small/Fünfzehntes.jpg',
        w: 1000,
        h: 563
      },
      {
        src: 'images/tdot/small/Sechszehntes.jpg',
        w: 2790,
        h: 750
      },
      {
        src: 'images/tdot/small/Siebzehntes.jpg',
        w: 1000,
        h: 666
      }
    ];

    var options = {
      showAnimationDuration: 0
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, tdotItems, options);
    gallery.init();
  }

  document.getElementById('praxis').addEventListener('click', createPraxisGallery);
  document.getElementById('tdot').addEventListener('click', createTdotGallery);
})();