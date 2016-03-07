//= require_tree .

window.onload = function() {
  function addTriangleTo(target) {
      var dimensions = target.getClientRects()[0];
      var pattern = Trianglify({
          width: dimensions.width,
          height: dimensions.height,
          variance: 0.9,
          // x_colors: ['#550000','#801515', '#fff'],
          // x_colors: ['#550000','#fa2f43', '#6966b1'],
          x_colors: ['#550000','#fa2f43', '#fff'],
          // x_colors: ['#fff', '#fa2f43', '#550000']
          // y_colors: ['#550000','#9b0000', '#5882a3'],
          // x_colors: 'Reds',
          // y_colors: 'RdBu'
      });
      target.style['background-image'] = 'url(' + pattern.png() + ')';
  }

  addTriangleTo(document.getElementById('banner'));
}
