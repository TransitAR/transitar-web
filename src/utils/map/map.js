import adoptantSmall from "../../assets/png/adoptant.png";
import vetSmall from "../../assets/png/vet.png";
import dogSmall from "../../assets/png/dog.png";
import catSmall from "../../assets/png/cat.png";
import refugeSmall from "../../assets/png/refuge.png";
import volunteerSmall from "../../assets/png/volunteer.png";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

// TODO: Sacar el access token del repo 🌚
const accessToken =
  "pk.eyJ1IjoianVsaWV0YWZsdXgiLCJhIjoiY2s2OWI1NDRkMGUxNzNrcG8wa2UybGV3dSJ9.QMOmG279ABpD0HWyoCIHvg";

mapboxgl.accessToken = accessToken;

// TODO: mover a un lugar mas sensato
export const initMapProfile = (elem, location) => {
  const map = new mapboxgl.Map({
    container: elem,
    style: "mapbox://styles/mapbox/outdoors-v11?optimize=true",
    zoom: 14,
    center: location?.coordinates
  });

  const markerElem = createMarkerElement(refugeSmall);
  new mapboxgl.Marker(markerElem).setLngLat(location?.coordinates).addTo(map);

  return map;
};

export const initMap = elem =>
  new mapboxgl.Map({
    container: elem,
    style: "mapbox://styles/mapbox/outdoors-v11?optimize=true",
    zoom: 12,
    center: [-58.381592, -34.603722] // Capital Federal
  });

export const flyTo = (map, { longitude, latitude }) => {
  map.flyTo({ center: [longitude, latitude] });
};

export const addSearch = map =>
  map.addControl(
    new MapboxGeocoder({
      mapboxgl,
      accessToken: mapboxgl.accessToken,
      placeholder: "Buscar por zona...",
      countries: "ar",
      language: "es-AR",
      marker: {
        color: "red"
      }
    }),
    "top-left"
  );

export const addNavigation = map =>
  map.addControl(new mapboxgl.NavigationControl());

/*
  canTravel: boolean;
  canAdopt: boolean;
  canTransit: boolean;
  canHelp: boolean;
  alerts: boolean;
*/

export const loadPersons = (map, persons) => {
  /* const hosts = persons.filter(p => p.canTransit == true || p.canAdopt == true);
  hosts.forEach(person => {
    const elem = createMarkerElement(homeSmall);
    const popup = createPopup(
      person.name,
      homeSmall,
      person.location.formattedAddress
    );
    new mapboxgl.Marker(elem)
      .setLngLat(person.location.coordinates)
      .setPopup(popup)
      .addTo(map);
  }); */
};

export const loadVolunteers = (map, persons) => {
  const volunteers = persons.filter(
    p => p.canTransit == false || p.canAdopt == false
  );
  volunteers.forEach(person => {
    const image = volunteerSmall;
    const elem = createMarkerElement(image);
    const popup = createPopup(
      person.name,
      volunteerSmall,
      person.location.formattedAddress
    );
    new mapboxgl.Marker(elem)
      .setLngLat(person.location.coordinates)
      .setPopup(popup)
      .addTo(map);
  });
};

export const loadVets = (map, vets) => {
  vets.forEach(vet => {
    const elem = createMarkerElement(vetSmall);
    const popup = createPopup(
      vet.name,
      vetSmall,
      vet.location.formattedAddress
    );
    new mapboxgl.Marker(elem)
      .setLngLat(vet.location.coordinates)
      .setPopup(popup)
      .addTo(map);
  });
};

export const loadPets = (map, pets) => {
  pets.forEach(pet => {
    const image = pet.type == "dog" ? dogSmall : catSmall;
    const elem = createMarkerElement(image);
    const popup = createPopup(
      pet.name,
      image,
      pet.location.formattedAddress,
      `/mascota/${pet._id}`
    );
    new mapboxgl.Marker(elem)
      .setLngLat(pet.location.coordinates)
      .setPopup(popup)
      .addTo(map);
  });
};

export const loadRefuges = (map, refuges) => {
  refuges.forEach(refuge => {
    const elem = createMarkerElement(refugeSmall);
    const popup = createPopup(
      refuge.name,
      refugeSmall,
      refuge.location.formattedAddress
    );
    new mapboxgl.Marker(elem)
      .setLngLat(refuge.location.coordinates)
      .setPopup(popup)
      .addTo(map);
  });
};

// aux fns
const createPopup = (title, image, address, link) =>
  new mapboxgl.Popup({ offset: 25 }).setHTML(`
    <div style="display: flex; align-items: center; margin-bottom: 0.5rem">
      ${
        link
          ? `<a href="${link}"><strong>${title}</strong></a>`
          : `<strong>${title}</strong>`
      }
      <img
        src=${image}
        height="25" width="25"
        style="margin-left: 1rem;"
      >
    </div>
    <p>En ${address}</p>
`);

const createMarkerElement = image => {
  const el = document.createElement("div");
  el.className = "marker";
  el.style.width = "40px";
  el.style.height = "40px";
  el.style.backgroundSize = "contain";
  el.style.backgroundImage = `url(${image})`;
  return el;
};
