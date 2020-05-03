<template>
  <div>
    <div class="tabs is-centered">
      <ul v-for="tab in Tabs" :key="tab">
        <li class="is-active">
          <a>{{ tab }}</a>
        </li>
      </ul>
    </div>
    <div class="columns">
      <div class="column">
        <PetCard v-if="false" />
        <Register />
      </div>
    </div>
  </div>
</template>

<script>
import Register from "../views/Register";
import PetCard from "../components/cards/PetCard";
export default {
  name: "ProfileContent",
  components: { PetCard, Register },
  props: ["user", "userType"],
  computed: {
    Tabs() {
      let tabs = [];
      if (this.userType == "refuge")
        return (tabs = [
          "Adopciones",
          "Tránsito",
          "Donaciones",
          `Configuración ${this.userType}`
        ]);
      else if (this.userType == "volunteer")
        return (tabs = [
          "Adopciones",
          "Tránsito",
          "Donaciones",
          "Traslados",
          `Configuración ${userType}`
        ]);
      else if (this.userType == "adoptant")
        return (tabs = [`Configuración ${this.userType}`]);
      else if (this.userType == "vet")
        return (tabs = [
          "Adopciones",
          "Tránsito",
          "Donaciones",
          "Especialidades",
          `Configuración ${this.userType}`
        ]);
      else if (this.userType == "founder")
        return (tabs = [`Configuración ${this.userType}`]);
      else return null;
    }
  }
};
</script>
