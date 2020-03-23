<template>
  <section class="container is-fullhd">
    <div>
      <Map
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
            <p class="subtitle is-6">
              Viajes ofrecidos por voluntarios en su tiempo libre
            </p>
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
    clientPos: null,
    hosts: null,
    pets: null,
    refuges: null,
    vets: null
  }),
  methods: {
    async getCurrentPosition() {
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
    },
    async getHosts() {
      // Fetch hosts
      try {
        const { data: hostsRes } = await getHosts();
        this.hosts = hostsRes.data;
      } catch (err) {
        console.warn("There was an error getting the hosts", err);
      }
    },
    async getVets() {
      // Fetch vets
      try {
        const { data: vetsRes } = await getVets();
        this.vets = vetsRes.data;
      } catch (err) {
        console.warn("There was an error getting the vets", err);
      }
    },
    async getPets() {
      // Fetch pets
      try {
        const { data: petsRes } = await getPets();
        this.pets = petsRes.data;
      } catch (err) {
        console.warn("There was an error getting the pets", err);
      }
    },
    async getRefuges() {
      // Fetch refuges
      try {
        const { data: refugesRes } = await getRefuges();
        this.refuges = refugesRes.data;
      } catch (err) {
        console.warn("There was an error getting the refuges", err);
      }
    }
  },
  async mounted() {
    Promise.allSettled([
      this.getCurrentPosition(),
      this.getHosts(),
      this.getVets(),
      this.getPets(),
      this.getRefuges()
    ]);
  }
};
</script>
