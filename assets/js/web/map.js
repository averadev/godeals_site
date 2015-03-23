/*
* Coded By Geekbucket
*/

var map;
function initialize() {
 	var myLatlng = new google.maps.LatLng(21.153529, -86.821279);
  var mapOptions = {
    scrollwheel: false,
    zoom: 14,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var image = 'images/ggekbucket.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      //icon: image,
      title: 'Geek Bucket!'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
