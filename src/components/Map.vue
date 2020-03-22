<template>
  <div ref="map" class="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { getHosts, getPets, getRefuges, getVets } from "../utils/http";
import { initMap } from "../utils/map";
import { loadHosts, loadPets, loadRefuges, loadVets } from "../utils/map";

export default {
  name: "Map",
  props: {
    hosts: Array,
    vets: Array,
    pets: Array,
    refuges: Array,
    clientPos: GeolocationPosition
  },
  async mounted() {
    const map = initMap(this.$refs.map, this.clientPos.coords);
    map.addControl(new mapboxgl.NavigationControl());
    map.on("load", () => {
      loadHosts(map, this.hosts);
      loadVets(map, this.vets);
      loadPets(map, this.pets);
      loadRefuges(map, this.refuges);
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
