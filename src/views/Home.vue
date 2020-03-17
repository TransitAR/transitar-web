<template>
  <section class="container is-fullhd">
    <div>
      <!-- Map -->
      <div v-if="!loadedMapInfo">Loading map...</div>
      <Map
        v-else-if="clientPos"
        :client-pos="clientPos"
        :hosts="hosts"
        :pets="pets"
        :refuges="refuges"
        :vets="vets"
      />

      <br />

      <!-- Inner nav -->
      <div class="level">
        <div class="level-item has-text-centered">
          <div class="content">
            <fa-icon icon="paw" size="2x" class="has-text-primary" />
            <p class="title is-5">Buscar tránsito</p>
            <p class="subtitle is-6">Buscar hogares de tránsito disponibles</p>
            <button class="button is-primary">Buscar</button>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div class="content">
            <fa-icon icon="home" size="2x" class="has-text-primary" />
            <p class="title is-5">Dar tránsito</p>
            <p class="subtitle is-6">Ofrecer espacio para tránsito</p>
            <button class="button is-primary">Registrarme</button>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div class="content">
            <fa-icon icon="car" size="2x" class="has-text-primary" />
            <p class="title is-5">Ver viajes voluntarios</p>
            <p class="subtitle is-6">Viajes ofrecidos por voluntarios en su tiempo libre</p>
            <button class="button is-primary">Ver viajes</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Map from "../components/Map";
import { getCurrentPosition } from "../utils/navigator";
import { getHosts, getPets, getRefuges, getVets } from "../utils/http";

export default {
  name: "home",
  components: { Map },
  data: () => ({
    loadedMapInfo: false,
    clientPos: null,
    hosts: null,
    pets: null,
    refuges: null,
    vets: null
  }),
  async mounted() {
    // Fetch client position
    try {
      this.clientPos = await getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    } catch (err) {
      console.warn("There was an error getting the current pos", err);
    }

    // Fetch hosts
    try {
      const { data: hosts } = await getHosts();
      this.hosts = hosts;
    } catch (err) {
      console.warn("There was an error getting the hosts", err);
    }

    // Fetch pets
    try {
      const { data: pets } = await getPets();
      this.pets = pets;
    } catch (err) {
      console.warn("There was an error getting the pets", err);
    }

    // Fetch refuges
    try {
      const { data: refuges } = await getRefuges();
      this.refuges = refuges;
    } catch (err) {
      console.warn("There was an error getting the refuges", err);
    }

    // Fetch vets
    try {
      const { data: vets } = await getVets();
      this.vets = vets;
    } catch (err) {
      console.warn("There was an error getting the vets", err);
    }

    this.loadedMapInfo = true;
  }
};
</script>
