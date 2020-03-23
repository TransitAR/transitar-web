import mapboxgl from "mapbox-gl";
import homeSmall from "../../assets/png/030-dog-house.png";
import vetSmall from "../../assets/png/002-veterinarian-2.png";
import dog from "../../assets/png/032-dog.png";
import cat from "../../assets/png/036-cat.png";
import refugeSmall from "../../assets/png/016-veterinarian-1.png";

// TODO: Sacar el access token del repo 🌚
const accessToken =
  "pk.eyJ1IjoianVsaWV0YWZsdXgiLCJhIjoiY2s2OWI1NDRkMGUxNzNrcG8wa2UybGV3dSJ9.QMOmG279ABpD0HWyoCIHvg";

mapboxgl.accessToken = accessToken;

export const initMap = elem =>
  new mapboxgl.Map({
    container: elem,
    style: "mapbox://styles/mapbox/outdoors-v11",
    zoom: 12,
    center: [-58.381592, -34.603722] // Capital Federal
  });


function GetPopupText(el) {
  return new mapboxgl.Popup({ offset: 25 }).setText(
    el.name
  );
}

new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
});

export const flyTo = (map, { longitude, latitude }) => {
  map.flyTo({ center: [longitude, latitude] });
};

export const loadHosts = (map, hosts) => {
  hosts.forEach(host => {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker host";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "contain";
    el.style.backgroundImage = `url(${homeSmall})`;

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(host.location.coordinates).setPopup(GetPopupText(host)).addTo(map);
  });
};

export const loadVets = (map, vets) => {
  vets.forEach(vet => {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "contain";
    el.style.backgroundImage = `url(${vetSmall})`;

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(vet.location.coordinates).setPopup(GetPopupText(vet)).addTo(map);

  });
};

export const loadPets = (map, pets) => {
  pets.forEach(pet => {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "contain";

    if (pet.type == 'dog') {
      el.style.backgroundImage = `url(${dog})`;
    }
    if (pet.type == 'cat') {
      el.style.backgroundImage = `url(${cat})`;
    }

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(pet.location.coordinates).setPopup(GetPopupText(pet)).addTo(map);
  });
};

export const loadRefuges = (map, refuges) => {
  refuges.forEach(refuge => {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundSize = "contain";
    el.style.backgroundImage = `url(${refugeSmall})`;

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(refuge.location.coordinates).setPopup(GetPopupText(refuge)).addTo(map);
  });
};
