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

export const flyTo = (map, { longitude, latitude }) => {
  map.flyTo({ center: [longitude, latitude] });
};

export const loadHosts = (map, hosts) => {
  hosts.forEach(host => {
    const elem = createMarkerElement(homeSmall);
    const popup = createPopup(
      host.name,
      homeSmall,
      host.location.formattedAddress
    );
    new mapboxgl.Marker(elem)
      .setLngLat(host.location.coordinates)
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
    const image = pet.type == "dog" ? dog : cat;
    const elem = createMarkerElement(image);
    const popup = createPopup(pet.name, image, pet.location.formattedAddress);
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
const createPopup = (title, image, address) =>
  new mapboxgl.Popup({ offset: 25 }).setHTML(`
    <div style="display: flex; align-items: center; margin-bottom: 0.5rem">
      <strong>${title}</strong>
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
