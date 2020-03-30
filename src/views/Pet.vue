<template>
  <div class="pt-16 flex justify-center align-center">
    <h1 v-if="loading">Loading...</h1>
    <h1 v-else-if="pet">{{ pet.name }}</h1>
    <h1 v-else>{{ error }}</h1>
  </div>
</template>

<script>
import { getPet } from "../utils/http";
export default {
  name: "pet",
  data: () => ({
    loading: true,
    pet: null,
    error: null
  }),
  async mounted() {
    if (!this.$route.params.id) {
      console.warn("A Pet ID is needed");
      return this.$router.push("/");
    }
    try {
      const { data: pet } = (await getPet(this.$route.params.id)).data;
      this.pet = pet;
    } catch (err) {
      this.err = `Hubo un error tratando de acceder a la mascota "${this.id}", por favor intenta devuelta luego\n${err}`;
    }
    this.loading = false;
  }
};
</script>
