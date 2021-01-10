var map = L.map('adminMap').setView([39.0742, 21.8243], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiZGVmZXgiLCJhIjoiY2tqMTg1eXZhMGlhdTJzbGdjMDVybmthZyJ9.Z6HlHQllZ1tohkK3pDAsLA"
}).addTo(map);

$(document).ready(function () {
});

