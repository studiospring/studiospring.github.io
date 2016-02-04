//= require_tree .

$(function(){
  $('.carousel').carousel();

  $('.dropdown').attr({title: "Dummy link"});

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
