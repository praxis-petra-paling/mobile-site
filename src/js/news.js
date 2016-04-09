(function() {
  nanoajax.ajax({
    url: 'http://www.homoeopathie-paling.de/_news.html',
    method: 'GET',
    cors: true },
    (code, response) => {
      var news = document.getElementById('news');
      news.innerHTML = response;
    }
  );
}());
