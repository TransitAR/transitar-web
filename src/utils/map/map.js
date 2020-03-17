import mapboxgl from "mapbox-gl";
import petSilhouetteImg from "../../assets/pet.png";
import dogSilhouetteImg from "../../assets/dog.png";
import hostSilhouetteImg from "../../assets/home.png";
import refugeSilhouetteImg from "../../assets/home.png";
import vetSilhouetteImg from "../../assets/vet.png";

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
})

const images = [
  { imageUrl: '../../assets/pet.png', id: 'pet' },
  { imageUrl: '../../assets/dog.png', id: 'dog' },
  { imageUrl: '../../assets/home.png', id: 'host' },
  { imageUrl: '../../assets/home.png', id: 'refuge' },
  { imageUrl: '../../assets/vet.png', id: 'vet' },
]

export const loadHosts = (map, hostsPoints) => {
  images.forEach(img => {
    map.loadImage(img.imageUrl, function (error, res) {
      if (error) throw error;
      map.addImage(img.id, img)
    })
  })

  map.loadImage(hostSilhouetteImg, (error, image) => {
    if (error) throw error;
    map.addImage('host', image);
  })
  map.addLayer({
    id: "points",
    type: "symbol",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: hostsPoints
      }
    },
    layout: {
      "icon-image": "host",
      "icon-size": 0.02,
      "text-field": "{ hostId }",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.9],
      "text-anchor": "top"
    }
  });
}