function initMap() {
    var op = {lat: -35.220230, lng: 173.954469};
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 16, center: op});
    var marker = new google.maps.Marker({position: op, map: map });
  }
//created by:Adam Hearps
//student id: 5001160
//For: openpolytech, BIT607, assignment 2.