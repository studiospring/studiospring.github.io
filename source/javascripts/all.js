//= require_tree .

window.onload = function() {
  function addTriangleTo(target) {
      var dimensions = target.getClientRects()[0];
      var pattern = Trianglify({
          width: dimensions.width,
          height: dimensions.height,
          variance: 0.9,
          y_colors: 'RdBu',
          x_colors: 'RdBu'
      });
      target.style['background-image'] = 'url(' + pattern.png() + ')';
  }

  addTriangleTo(document.getElementById('sidebar'));

  $('.nav-item').hover(function(){
    if ($(this).children().html() == 'Accounting') {
      $(this).attr({title: "Dummy link"});
    }
  });

  $('#login-submit').click(function(event){
    $('#password-error').remove();

    if ($('#password').val() == 'ux') {
      $(this).attr('href', 'index.html');
      event();
    }
    else {
      $('#login').before('<div id="password-error" class="warning alert alert-warning">Incorrect password.</div>');
      }
      event.preventDefault();
  });

  $('#password').focus(function() {
    $('#password-error').remove();
  });
});
