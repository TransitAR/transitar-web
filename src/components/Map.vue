<template>
  <div ref="map" class="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import petSilhouetteImg from "../assets/pet.png";
import dogSilhouetteImg from "../assets/dog.png";
import hostSilhouetteImg from "../assets/home.png";
import vetSilhouetteImg from "../assets/vet.png";
import { getHosts, getPets, getRefuges, getVets } from "../utils/http";
import { initMap } from "../utils/map";
import { loadHosts, loadPets, loadRefuges, loadVets } from "../utils/map";

export default {
  name: "Map",
  props: {
    hosts: Object,
    vets: Object,
    pets: Object,
    refuges: Object,
    clientPos: GeolocationPosition
  },
  methods: {
    loadHosts() {},
    loadPets() {},
    loadRefuge() {},
    loadVet() {}
  },
  computed: {
    hostsPoints() {
      if (!this.hosts) return [];
      return this.hosts.data.map(host => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: host.location.coordinates
          },
          properties: {
            host: host.hostId,
            icon: "host"
          }
        };
      });
    },
    petsPoints() {
      if (!this.pets) return [];
      return this.pets.data.map(pets => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: pet.location.coordinates
          },
          properties: {
            host: pet.petId,
            icon: "pet"
          }
        };
      });
    },
    refugesPoints() {
      if (!this.refuges) return [];
      return this.refuges.data.map(refuge => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: refuge.location.coordinates
          },
          properties: {
            host: refuge.refugeId,
            icon: "refuge"
          }
        };
      });
    },
    vetsPoints() {
      if (!this.vets) return [];
      return this.vets.data.map(vet => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: vet.location.coordinates
          },
          properties: {
            vet: vet.vetId,
            icon: "vet"
          }
        };
      });
    }
  },
  async mounted() {
    console.info(
      `Creando mapa con ${this.hosts?.count || 0} Hosts, ${this.pets?.count ||
        0} Pets, ${this.refuges?.count || 0} Refuges, ${this.vets?.count ||
        0} Vets`
    );
    const map = initMap(this.$refs.map, this.clientPos.coords);

    map.on("load", () => {
      loadHosts(map, this.hostsPoints);
    });
  }
};
</script>

<style lang="scss" scoped>
/* Capaz hay una manera mas elegante */
@import "../../node_modules/mapbox-gl/dist/mapbox-gl.css";

.map {
  width: 100%;
  height: 600px;
}
</style>
