'use strict';(function(){function createGallery(){var pswpElement=document.querySelectorAll('.pswp')[0];var praxisItems=[{src:'images/praxis/Erstes.jpg',w:750,h:1000},{src:'images/praxis/Zweites.jpg',w:1000,h:1000},{src:'images/praxis/Drittes.jpg',w:1000,h:750},{src:'images/praxis/Viertes.jpg',w:750,h:1000},{src:'images/praxis/Fünftes.jpg',w:750,h:1000},{src:'images/praxis/Sechstes.jpg',w:1000,h:666},{src:'images/praxis/Siebtes.jpg',w:1000,h:750},{src:'images/praxis/Achtes.jpg',w:750,h:1000}];var options={showAnimationDuration:0};var gallery=new PhotoSwipe(pswpElement,PhotoSwipeUI_Default,praxisItems,options);gallery.init()}document.getElementById('praxis').addEventListener('click',createGallery)})();