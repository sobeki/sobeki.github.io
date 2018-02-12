function initMap() {
    var LatLng = { lat: -15.841153, lng: -48.046742 };

    var map = new google.maps.Map($('#googleMap')[0], {
        zoom: 17,
        center: LatLng
    });

    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        title: 'UniCEUB campus I'
    });
}