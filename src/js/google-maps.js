(function() {
  var myOptions = {
    center: new google.maps.LatLng(49.7946104, 9.9153093),
    zoom: 16,
    zoomControl: true,
    streetViewControl: false,
    panControl:true,
    scaleControl:true,
    overviewMapControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById("map"),
  myOptions);

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    animation: google.maps.Animation.Drop,
    title: 'Praxis Dr.Paling'
  });

  var contentString = '<b>Praxis Dr.Paling</b>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });


}());
