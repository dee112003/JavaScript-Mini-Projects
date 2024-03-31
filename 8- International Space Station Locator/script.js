const myMap = L.map("isMap").setView([0, 0], 1);
const attribution =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const tileUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);

const issIcon = L.icon({
  iconUrl: "img.png",
  iconSize: [50, 32], // size of the icon
  iconAnchor: [25, 16], // point of the icon which will
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(myMap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

let firstTime = true;

async function getData() {
  const response = await fetch(api_url);

  const data = await response.json();
  const { latitude, longitude } = data;

  marker.setLatLng([latitude, longitude]);
  if (firstTime) {
    myMap.setView([latitude, longitude], 2);
    firstTime = false;
  }

  document.getElementById("lat").textContent = latitude.toFixed(2);
  document.getElementById("long").textContent = longitude.toFixed(2);
}

setInterval(getData, 1000);
