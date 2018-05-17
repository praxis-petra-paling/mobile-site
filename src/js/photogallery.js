(function() {
  function createPraxisGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var praxisItems = [
      {
        src: 'images/praxis/small/Erstes.jpg',
        w: 750,
        h: 1000,
        title: 'Motiv der Praxistür'
      },
      {
        src: 'images/praxis/small/Zweites.jpg',
        w: 1000,
        h: 1000,
        title: 'Fenster im Wartezimmer'
      },
      {
        src: 'images/praxis/small/Drittes.jpg',
        w: 1000,
        h: 750,
        title: 'Wartezimmer'
      },
      {
        src: 'images/praxis/small/Viertes.jpg',
        w: 1000,
        h: 750,
        title: 'Spielecke'
      },
      {
        src: 'images/praxis/small/Fünftes.jpg',
        w: 750,
        h: 1000,
        title: 'Anmeldung'
      },
      {
        src: 'images/praxis/small/Sechstes.jpg',
        w: 1000,
        h: 750,
        title: 'Frau Fersch an der Anmeldung'
      },
      {
        src: 'images/praxis/small/Siebtes.jpg',
        w: 750,
        h: 1000,
        title: 'Sprechzimmer'
      },
      {
        src: 'images/praxis/small/Achtes.jpg',
        w: 1000,
        h: 666,
        title: 'Sprechzimmer'
      },
      {
        src: 'images/praxis/small/Neuntes.jpg',
        w: 1000,
        h: 750,
        title: 'Sprechzimmer'
      },
      {
        src: 'images/praxis/small/Zehntes.jpg',
        w: 750,
        h: 1000,
        title: 'Kindgerechte Ausstattung'
      }
    ];

    var options = {
      showAnimationDuration: 0
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, praxisItems, options);
    gallery.init();
  }

  document.getElementById('praxis').addEventListener('click', createPraxisGallery);
})();
