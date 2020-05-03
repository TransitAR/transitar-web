<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li
          @click="toggleTab(tab)"
          v-for="tab in Tabs.tabsNames"
          :key="tab"
          :class="{ 'is-active': tabActive == tab }"
        >
          <a>{{ tab }}</a>
        </li>
      </ul>
    </div>
    <div class="columns">
      <div class="column">
        <Register />
      </div>
    </div>
  </div>
</template>

<script>
import Register from "../views/Register";
export default {
  name: "ProfileContent",
  components: { Register },
  props: ["user", "userType"],
  data: () => ({
    tabActive: ""
  }),
  computed: {
    Tabs() {
      let tabs = [];
      if (this.userType == "refuge")
        return (tabs = {
          tabsNames: [
            "Adopciones",
            "Tránsito",
            "Donaciones",
            `Configuración del refugio`
          ],
          tabsType: "refuge"
        });
      else if (this.userType == "volunteer")
        return (tabs = {
          tabsNames: [
            "Adopciones",
            "Tránsito",
            "Donaciones",
            "Traslados",
            `Configuración del voluntario`
          ],
          tabsType: "volunteer"
        });
      else if (this.userType == "adoptant")
        return (tabs = {
          tabsNames: [`Configuración del adoptante`],
          tabsType: "adoptant"
        });
      else if (this.userType == "vet")
        return (tabs = {
          tabsNames: [
            "Adopciones",
            "Tránsito",
            "Donaciones",
            "Especialidades",
            `Configuración de la clínica`
          ],
          tabsType: "vet"
        });
      else if (this.userType == "founder")
        return (tabs = {
          tabsNames: [`Configuración del fundador`],
          tabsType: "founder"
        });
      else return null;
    }
  },
  methods: {
    toggleTab: function(tab) {
      console.log(tab);
      this.tabActive = tab;
    }
  }
};
</script>
