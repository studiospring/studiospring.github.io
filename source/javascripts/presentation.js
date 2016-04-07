//= require_tree .

window.onload = function() {
  function addTriangleTo(target) {
      var dimensions = target.getClientRects()[0];
      var pattern = Trianglify({
          width: dimensions.width,
          height: dimensions.height,
          variance: 0.9,
          x_colors: 'RdYlGn',
          y_colors: 'Spectral'
      });
      target.style['background-image'] = 'url(' + pattern.png() + ')';
  }

  addTriangleTo(document.getElementById('banner'));

  $('#questions-link').click(function(){
    $('#questions-placeholder').append("<h1>Questions?</h1>");
  });
}
