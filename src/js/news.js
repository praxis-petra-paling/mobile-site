(function() {
  nanoajax.ajax({
    url: '_news.html',
    method: 'GET',
    cors: true },
    (code, response) => {
      var news = document.getElementById('news');
      news.innerHTML = response;
    }
  );
}());
