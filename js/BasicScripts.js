$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
}) //meant to resize the map with the resize of screen but unsure if correct//
