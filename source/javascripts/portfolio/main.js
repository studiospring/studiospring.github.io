window.onload = function() {
  // Accordion
  $('.collapse').collapse()

  // $(document).scroll(function() {
  //   event.preventDefault();
  // });

  var lastScrollTop = $(window).scrollTop()
  $(window).scroll(function(event){
    event.preventDefault();
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      // downscroll code
      alert('scroll down');
    } else {
      // upscroll code
      alert('scroll up');
    }
    lastScrollTop = st;
  });

  var waypoint = new Waypoint({
    element: $('#personas'),
    handler: function() {
      alert('hi');
    }
  })
}
