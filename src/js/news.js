(function() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://www.homoeopathie-paling.de/_news.html', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log(request.responseText);
    }
  }

  request.send();
}());
