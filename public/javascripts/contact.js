function initMap() {
  
  const custom = {
    lat: 43.299609,
    lng:-3.0074670000000197
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: custom
  });
  
  var marker = new google.maps.Marker({
    position: {
      lat: custom.lat, 
      lng: custom.lng
    },
    map: map,
    title: "Custom Camper"
  });
  var input=document.getElementById("search");
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.geometry) { 
      window.alert("No encontramos la ubicación de: '" + place.name + "'");
      return;
    }
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
      var latitude=(place.geometry.viewport.l.j+place.geometry.viewport.l.l)/2;
      var longitude=(place.geometry.viewport.j.j+place.geometry.viewport.j.l)/2;
      var origin = new google.maps.Marker({
      position: {
        lat: latitude,
        lng: longitude
      },
      map: map,
      title: "ubication"
      });
    } 
    else{
      map.setCenter(place.geometry.location);
      map.setZoom(17);
      var latitude=place.geometry.viewport.lat
      var longitude=place.geometry.viewport.lng
      var origin = new google.maps.Marker({
        position: {
          lat: latitude,
          lng: longitude
        },
        map: map,
        title: "ubication"
      });
      console.log(origin.position.lat);
    }
   

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
  
    var directionRequest = {
    origin: {lat:latitude,lng:longitude},
    destination: {lat:custom.lat,lng:custom.lng},
    travelMode: 'DRIVING'
    };

    directionsService.route(
      directionRequest, 
      function(response, status) {
        if (status === 'OK') {
        // everything is ok
        directionsDisplay.setDirections(response)
        } 
        else{ 
          window.alert('Directions request failed due to ' + status);      
        } 
      }
    );
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directionsPanel'));
    document.getElementById("search").value="";

  })
};

