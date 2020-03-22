import mapboxgl from "mapbox-gl";
import homeSmall from "../../assets/home_small.png";
import vetSmall from "../../assets/vet_small.png";
import petSmall from "../../assets/pet_small.png";
// import refugeSmall from "../../assets/refuge_small.png";

// TODO: Sacar el access token del repo 🌚
const accessToken =
  "pk.eyJ1IjoianVsaWV0YWZsdXgiLCJhIjoiY2s2OWI1NDRkMGUxNzNrcG8wa2UybGV3dSJ9.QMOmG279ABpD0HWyoCIHvg";

mapboxgl.accessToken = accessToken;

export const initMap = (elem, { longitude, latitude }) =>
  new mapboxgl.Map({
    container: elem,
    style: "mapbox://styles/mapbox/outdoors-v11",
    zoom: 12,
    center: [longitude, latitude]
  });

new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
});

export const loadHosts = (map, hosts) => {
  hosts.forEach(host => {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker host";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundImage = `url(${homeSmall})`;

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(host.location.coordinates).addTo(map);
  });
};

export const loadVets = (map, vets) => {
  vets.forEach(vet => {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundImage = `url(${vetSmall})`;

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(vet.location.coordinates).addTo(map);
  });
};

export const loadPets = (map, pets) => {
  pets.forEach(pet => {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundImage = `url(${petSmall})`;

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(pet.location.coordinates).addTo(map);
  });
};

export const loadRefuges = (map, refuges) => {
  refuges.forEach(refuge => {
    // create a DOM element for the marker
    var el = document.createElement("div");
    el.className = "marker";
    // el.style.backgroundImage = "url(https://placekitten.com/g/50/50/)";
    el.style.width = "40px";
    el.style.height = "40px";
    el.style.backgroundColor = "brown";
    el.style.borderRadius = "50%";

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(refuge.location.coordinates).addTo(map);
  });
};
