<template>
  <section class="p-0">
    <Map
      :client-pos="clientPos"
      :persons="persons"
      :pets="pets"
      :refuges="refuges"
      :vets="vets"
      :volunteers="volunteers"
    />
  </section>
</template>

<script>
import Map from "../components/Map";
import { getCurrentPosition } from "../utils/navigator";
import { getPersons, getPets, getRefuges, getVets } from "../utils/http";

export default {
  name: "explore",
  components: { Map },
  data: () => ({
    clientPos: null,
    persons: null,
    pets: null,
    refuges: null,
    vets: null,
    volunteers: null
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
    async getPersons() {
      // Fetch persons
      try {
        const { data: PersonsRes } = await getPersons();
        this.persons = PersonsRes.data.filter(person => person.alerts == false);
        this.volunteers = PersonsRes.data.filter(
          person => person.alerts == true
        );
      } catch (err) {
        console.warn("There was an error getting the persons", err);
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
      this.getPersons(),
      this.getVets(),
      this.getPets(),
      this.getRefuges()
    ]);
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: calc(100% - 56px);
}
</style>
