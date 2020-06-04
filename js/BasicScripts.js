$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
})
//meant to resize the map with the resize of screen but unsure if correct//
//created by:Adam Hearps
//student id: 5001160
//For: openpolytech, BIT607, assignment 2.