<template>
  <div ref="map" class="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { getHosts, getPets, getRefuges, getVets } from "../utils/http";
import { initMap, flyTo } from "../utils/map";
import { loadHosts, loadPets, loadRefuges, loadVets } from "../utils/map";

export default {
  name: "Map",
  data: () => ({
    map: null
  }),
  props: {
    hosts: Array,
    vets: Array,
    pets: Array,
    refuges: Array,
    clientPos: GeolocationPosition
  },
  async mounted() {
    this.map = initMap(this.$refs.map);
    this.map.addControl(new mapboxgl.NavigationControl());
  },
  watch: {
    clientPos(pos) {
      flyTo(this.map, pos.coords);
    },
    hosts(hosts) {
      loadHosts(this.map, hosts);
    },
    vets(vets) {
      loadVets(this.map, vets);
    },
    pets(pets) {
      loadPets(this.map, pets);
    },
    refuges(refuges) {
      loadRefuges(this.map, refuges);
    }
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
