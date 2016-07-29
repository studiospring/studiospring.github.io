window.onload = function() {
  // Accordion
  $('.collapse').collapse()

  var waypoint = new Waypoint({
    element: $('#personas'),
    handler: function() {
      alert('hi');
    }
  })
}
