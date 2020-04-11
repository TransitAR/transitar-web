<template>
  <div ref="map" class="map">
    <div class="card mt-5 ml-5">
      <input class="input" type="text" placeholder="Buscar..." />
    </div>
    <div class="card mt-2 ml-5">
      <div class="card-content">
        <div class="level-item has-text-centered">
          <div class="mx-3">
            <div>
              <div class="inline-flex align-center">
                <figure class="image is-24x24 inline-block m-auto">
                  <img src="../assets/png/016-veterinarian-1.png" />
                </figure>
              </div>
            </div>
            <span>Refugios</span>
          </div>
          <!--
          <div class="mx-3">
            <div>
              <div class="inline-flex align-center">
                <figure class="image is-24x24 inline-block m-auto">
                  <img src="../assets/png/030-dog-house.png" />
                </figure>
              </div>
            </div>
            <span>Adoptantes</span>
          </div>
          -->
          <div class="mx-3">
            <div>
              <div class="inline-flex align-center">
                <figure
                  class="image is-24x24 inline-block m-auto"
                  v-on:click="this.seeVolunteers = !this.seeVolunteers"
                >
                  <img src="../assets/png/volunteer.png" />
                </figure>
              </div>
            </div>
            <span>Voluntarios</span>
          </div>
          <!--
          <div class="mx-3">
            <div>
              <div class="inline-flex align-center">
                <figure class="image is-24x24 inline-block m-auto">
                  <img src="../assets/png/car.png" />
                </figure>
              </div>
            </div>
            <span>Viajes</span>
          </div>
          -->
          <div class="mx-3">
            <div>
              <div class="inline-flex align-center">
                <figure
                  class="image is-24x24 inline-block m-auto"
                  v-on:click="this.seeVets = !this.seeVets"
                >
                  <img src="../assets/png/002-veterinarian-2.png" />
                </figure>
              </div>
            </div>
            <span>Veterinarias</span>
          </div>
          <div class="mx-3">
            <div>
              <div class="inline-flex align-center">
                <figure
                  class="image is-24x24 inline-block m-auto"
                  v-on:click="this.seeDogs = !this.seeDogs"
                >
                  <img src="../assets/png/032-dog.png" />
                </figure>
              </div>
            </div>
            <span>Perros</span>
          </div>
          <div class="mx-3">
            <div>
              <div class="inline-flex align-center">
                <figure
                  class="image is-24x24 inline-block m-auto"
                  v-on:click="this.seeCats = !this.seeCats"
                >
                  <img src="../assets/png/036-cat.png" />
                </figure>
              </div>
            </div>
            <span>Gatos</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPersons, getPets, getRefuges, getVets } from "../utils/http";
import { initMap, flyTo, addSearch, addNavigation } from "../utils/map";
import {
  loadPersons,
  loadPets,
  loadRefuges,
  loadVets,
  loadVolunteers
} from "../utils/map";

export default {
  name: "Map",
  data: () => ({
    map: null
  }),
  props: {
    persons: Array,
    vets: Array,
    pets: Array,
    refuges: Array,
    volunteers: Array,
    clientPos: undefined
  },
  async mounted() {
    this.map = initMap(this.$refs.map);
    addSearch(this.map);
    addNavigation(this.map);
    if (this.clientPos) flyTo(this.map, this.clientPos.coords);
    if (this.persons) loadPersons(this.map, this.persons);
    if (this.volunteers) loadVolunteers(this.map, this.volunteers);
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
    persons(persons) {
      loadPersons(this.map, persons);
    },
    vets(vets) {
      loadVets(this.map, vets);
    },
    pets(pets) {
      loadPets(this.map, pets);
    },
    refuges(refuges) {
      loadRefuges(this.map, refuges);
    },
    volunteers(volunteers) {
      loadVolunteers(this.map, volunteers);
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}

.card {
  z-index: 1;
  max-width: 400px;
}
</style>
