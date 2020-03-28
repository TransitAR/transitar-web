<template>
  <div ref="map" class="map" />
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
    clientPos: undefined
  },
  async mounted() {
    this.map = initMap(this.$refs.map);
    this.map.addControl(new mapboxgl.NavigationControl());
    if (this.clientPos) flyTo(this.map, this.clientPos.coords);
    if (this.hosts) loadHosts(this.map, this.hosts);
    if (this.vets) loadVets(this.map, this.vets);
    if (this.pets) loadPets(this.map, this.pets);
    if (this.refuges) loadRefuges(this.map, this.refuges);
  },
  destroyed() {
    this.map.remove();
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
  width: 100vw;
  height: calc(100vh - 56px);
}
</style>
