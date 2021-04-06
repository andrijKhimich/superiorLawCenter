document.addEventListener("DOMContentLoaded", function () {
  $('#map')[0] ? initMap() : null;

  function initMap() {
    let mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(32.774020495991, -117.12409664138474),
      disableDefaultUI: true,
    };
    let mapElement = document.getElementById('map')
    let map = new google.maps.Map(mapElement, mapOptions);
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(32.774020495991, -117.12409664138474),
      map: map,
      title: 'Superior Law Center',
      label: {
        color: '#BB4445',
        fontWeight: 'bold',
        text: 'Superior Law Center',
      },
      icon: {
        labelOrigin: new google.maps.Point(100, 20),
        url: '../img/marker.svg',
        size: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(11, 40),
      },
    });
  }
});