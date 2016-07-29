window.onload = function() {
  // Accordion
  $('.collapse').collapse()

  // $(document).scroll(function() {
  //   event.preventDefault();
  // });

  var lastScrollTop = $(window).scrollTop()
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      // downscroll code
      $('#collapseOne').collapse('toggle')
      // $('#collapseOne').collapse({
      //   toggle: true
      // })
      // alert('scroll down');
    } else {
      // upscroll code
      // alert('scroll up');
    }
    lastScrollTop = st;
    event.preventDefault();
    event.stopImmediatePropagation();
  });

  var waypoint = new Waypoint({
    element: $('#personas'),
    handler: function() {
      alert('hi');
    }
  })
}
