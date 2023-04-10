if (Modernizr.geolocation) {

var el Map = document.getElementById('loc');

var msg = 'Sorry, we were unable to get your location.';

navigator.geolocation.getCurrent Position (success, fail); // Ask for location

elMap.text Content = 'Checking location... ';

} else {

elMap.textContent = msg;

}

[function success (position) {

msg= '<h3>Longitude:';

msg += position.coords.latitude + '</h3>';

msg += '<h3>Latitude:';

msg + position.coords.longitude + '</h3>';

elMap.innerHTML = msg;

function fail (msg) {

elMap.textContent = msg;

console.log(msg.code);