<template>
  <section class="container relative">
    <div
      class="flex md:hidden justify-center fixed z-10 bottom-0 inset-x-0 border-t border-solid border-gray-200 bg-gray-100 p-2"
    >
      <button class="button is-danger">
        Donar
        <font-awesome-icon icon="heart" class="ml-2" />
      </button>
    </div>
    <div class="my-16 md:my-24 pt-8 px-8 pb-16 card">
      <!-- 1st row -->
      <div class="flex mb-8 flex-col md:flex-row">
        <!-- mobile:2nd desktop:left -->
        <div class="flex-1 flex text-center mt-8 md:mt-0 order-1 md:order-0">
          <div class="mx-4">
            <p class="heading mb-0">Voluntarios</p>
            <p class="title">20</p>
          </div>
          <div class="mx-4">
            <p class="heading mb-0">Animales</p>
            <p class="title">80</p>
          </div>
          <div class="ml-4">
            <p class="heading mb-0">Recomendaciones</p>
            <p class="title">12</p>
          </div>
        </div>
        <!-- mobile:1st desktop:center -->
        <div class="flex-1 flex flex-col items-center order-0 md:order-1">
          <figure
            class="refuge-image rounded-full border-solid border-4 border-gray-600 -my-16 mb-8"
          >
            <img class="rounded-full" src="@/assets/refuge-example-image.jpg" />
          </figure>
          <h1 class="title capitalize text-center">
            {{ refuge.displayName }}
            <div class="image is-24x24 inline-block pt-1 m-1">
              <img src="@/assets/png/refuge.png" />
            </div>
          </h1>
          <h2 class="subtitle">@{{ user.nickname }}</h2>
        </div>
        <!-- mobile:hidden desktop:right -->
        <div class="hidden md:flex flex-1 justify-end order-2">
          <button class="button is-danger">
            Donar
            <font-awesome-icon icon="heart" class="ml-2" />
          </button>
        </div>
      </div>
      <!-- 2nd row (tabs) -->
      <div class="tabs is-centered my-16 pb-16">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab.key"
            :class="{ 'is-active': currentTab === tab.key }"
            @click="selectTab(tab.key)"
          >
            <a class="capitalize">{{ tab.title }}</a>
          </li>
        </ul>
      </div>
      <!-- home tab -->
      <div
        v-show="currentTab === tabs.home.key"
        class="flex items-center flex-col"
      ></div>
      <!-- adoptions tab -->
      <div
        v-show="currentTab === tabs.adoptions.key"
        class="flex items-center flex-col"
      >
        <div class="flex flex-wrap justify-center px-8">
          <div v-for="n in 8" :key="n" class="m-4">
            <PetCard class="w-64" />
          </div>
        </div>
      </div>
      <!-- info tab -->
      <div
        v-show="currentTab === tabs.info.key"
        class="flex items-center flex-col"
      >
        <div class="flex items-center flex-col">
          <div class="md:w-3/5 text-center">
            <p>
              <i class="capitalize">{{ refuge.displayName }}</i> es un lugar muy
              colorido lleno de peludos con ganas de hacer cosas, ser felices en
              lugares, comer y dormir muchísimas horas – A veces juegan con
              cartones o cajas, e incluso en algunas ocaciones especiales comen
              zapallo desaforadadamente haciendo mucho ruido.
            </p>
          </div>
        </div>
        <hr class="mx-auto my-16" />
        <!-- specializations -->
        <div class="flex items-center flex-col">
          <p class="title is-4">Especializaciones</p>
          <p class="subtitle is-6">
            Areas particulares a la cuales
            <i class="capitalize">{{ refuge.displayName }}</i> se dedica y
            compromete
          </p>
          <div class="max-w-sm text-center">
            <span
              class="tag is-primary capitalize m-1"
              v-for="specialization in refuge.specialization"
              :key="specialization"
              >{{ specialization }}</span
            >
          </div>
        </div>
        <hr class="mx-auto my-16" />
        <!-- location -->
        <div class="flex items-center flex-col">
          <p class="title is-4">
            Ubicacion
          </p>
          <p class="subtitle is-6">
            Por motivos de privacidad la ubicacion es aproximada y no exacta
          </p>
          <div
            v-if="!mapLoaded"
            class="map-placeholder bg-gray-100 flex justify-center items-center rounded-md border-solid border-2 border-gray-600"
          >
            <Spinner size="2rem" />
          </div>
          <div
            ref="map"
            class="map rounded-md border-solid border-2 border-gray-600"
            v-show="mapLoaded"
          ></div>
        </div>
      </div>
      <!-- contact tab -->
      <div
        v-show="currentTab === tabs.contact.key"
        class="flex items-center flex-col"
      >
        <!-- data -->
        <div class="flex items-center flex-col">
          <p class="title is-4">Información de contacto</p>
          <div class="content">
            <font-awesome-icon icon="envelope" class="mr-3" size="lg" />
            {{ user.email }}
          </div>
        </div>
        <hr class="mx-auto my-16" />
        <div class="flex items-center flex-col">
          <p class="title is-4">Redes sociales</p>
          <div class="content">
            <div class="d-flex align-center">
              <font-awesome-icon
                :icon="['fab', 'facebook-square']"
                class="mr-3"
                size="lg"
              />
              <span>{{ user.facebook }}</span>
            </div>
            <br />
            <div class="d-flex align-center">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="mr-3"
                size="lg"
              />
              <span>{{ user.twitter }}</span>
            </div>
            <br />
            <div class="d-flex align-center">
              <font-awesome-icon
                :icon="['fab', 'instagram-square']"
                class="mr-3"
                size="lg"
              />
              <span>{{ user.instagram }}</span>
            </div>
          </div>
        </div>
        <hr class="mx-auto my-16" />
        <div class="flex items-center flex-col">
          <p class="title is-4">Donaciones</p>
          <div class="flex flex-wrap justify-center px-8">
            <div v-for="n in 2" :key="n" class="m-4">
              <DonationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from "@/components/Spinner";
import PetCard from "@/components/cards/PetCard";
import DonationCard from "@/components/DonationCard";
import { initMapProfile } from "@/components/../utils/map";

const tabs = Object.freeze({
  home: {
    key: "home",
    title: "Inicio"
  },
  adoptions: {
    key: "adoptions",
    title: "Adopciones"
  },
  info: {
    key: "info",
    title: "Info"
  },
  contact: {
    key: "contact",
    title: "Contacto"
  }
});

export default {
  name: "RefugeProfile",
  components: {
    Spinner,
    PetCard,
    DonationCard
  },
  data: () => ({
    tabs,
    mapLoaded: false,
    currentTab: tabs.home.key
  }),
  computed: {
    user() {
      return this.$auth.mongoUser;
    },
    info() {
      return this.user.refugeInfo;
    },
    refuge() {
      return {
        displayName: this.info.displayName || "El Pandorofugio",
        specialization: this.info.specialization.length
          ? this.info.specialization
          : [
              "vacunacion",
              "cuidado",
              "discapacidad motriz",
              "enseñar piruetas",
              "Ceguera",
              "alimentar con zapallo",
              "trastornos neurotico-compulsivos"
            ]
      };
    }
  },
  methods: {
    selectTab(key) {
      this.currentTab = key;
    }
  },
  mounted() {
    const fallbackLocation = [-58.235084, -34.765982];
    const map = initMapProfile(
      this.$refs.map,
      this.user.location || { coordinates: fallbackLocation }
    );
    map.on("load", () => {
      this.mapLoaded = true;
    });
  }
};
</script>

<style lang="scss" scoped>
.refuge-image {
  width: 160px;
}
.map {
  height: 300px;
  width: 400px;
  max-width: 100%;
}
.map-placeholder {
  height: 300px;
  width: 400px;
}
</style>
