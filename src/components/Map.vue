<template>
  <div ref="map" class="map" />
</template>

<script>
import { getPeople, getPets, getRefuges, getVets } from "../utils/http";
import { initMap, flyTo } from "../utils/map";
import { loadPeople, loadPets, loadRefuges, loadVets } from "../utils/map";

export default {
  name: "Map",
  data: () => ({
    map: null
  }),
  props: {
    people: Array,
    vets: Array,
    pets: Array,
    refuges: Array,
    clientPos: undefined
  },
  async mounted() {
    this.map = initMap(this.$refs.map);
    this.map.addControl(new mapboxgl.NavigationControl());
    if (this.clientPos) flyTo(this.map, this.clientPos.coords);
    if (this.people) loadPeople(this.map, this.people);
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
    people(people) {
      loadPeople(this.map, people);
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
.map {
  width: 100%;
  height: 100%;
}
</style>
