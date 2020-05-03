<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li
          @click="toggleTab(tab)"
          v-for="tab in tabs.tabsNames"
          :key="tab"
          :class="{ 'is-active': tabActive == tab }"
        >
          <a>{{ tab }}</a>
        </li>
      </ul>
    </div>
    <div class="columns">
      <div class="column">
        <Register v-if="isCurrentTabConfig" />
        <div
          v-if="tabActive === 'Adopciones'"
          class="flex flex-row px-24 py-4 flex-wrap justify-center"
        >
          <div v-for="n in 5" :key="n" class="m-4">
            <PetCard style="max-width: 300px;" />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "../views/Register";
import PetCard from "./cards/PetCard";

export default {
  name: "ProfileContent",
  components: { Register, PetCard },
  props: ["user", "userType"],
  data: () => ({
    tabActive: ""
  }),
  mounted() {
    this.tabActive = this.tabs.tabsNames[0];
  },
  computed: {
    tabs() {
      const map = {
        refuge: {
          tabsType: "refuge",
          tabsNames: [
            "Adopciones",
            "Tránsito",
            "Donaciones",
            `Configuración del refugio`
          ]
        },
        vet: {
          tabsType: "vet",
          tabsNames: [
            "Adopciones",
            "Tránsito",
            "Donaciones",
            `Configuración del refugio`
          ]
        },
        volunteer: {
          tabsType: "volunteer",
          tabsNames: [
            "Adopciones",
            "Tránsito",
            "Donaciones",
            "Traslados",
            `Configuración del voluntario`
          ]
        },
        adoptant: {
          tabsType: "adoptant",
          tabsNames: [`Configuración del adoptante`]
        },
        founder: {
          tabsType: "founder",
          tabsNames: [`Configuración del fundador`]
        }
      };
      return map[this.userType] || "Error";
    },
    isCurrentTabConfig() {
      return this.tabActive.includes("Configuración");
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
