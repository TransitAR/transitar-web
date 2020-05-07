<template>
  <section class="container relative">
    <div
      class="flex md:hidden justify-center fixed z-10 bottom-0 inset-x-0 border-t border-solid border-gray-200 bg-gray-100 p-2"
    >
      <button class="button is-primary mr-8">Contactar</button>
      <button class="button is-secondary">Donar</button>
    </div>
    <div class="my-16 md:my-24 pt-8 px-8 pb-16 card">
      <!-- 1st row -->
      <div class="flex mb-8 flex-col md:flex-row">
        <!-- mobile:2nd desktop:left -->
        <div class="flex-1 flex text-center mt-8 md:mt-0 order-1 md:order-0">
          <div class="mr-4">
            <p class="heading mb-0">Animales</p>
            <p class="title">23</p>
          </div>
          <div class="mx-4">
            <p class="heading mb-0">Comentarios</p>
            <p class="title">8</p>
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
            <img
              class="rounded-full"
              src="../assets/refuge-example-image.jpg"
            />
          </figure>
          <h1 class="title capitalize">{{ refuge.displayName }}</h1>
          <h2 class="subtitle">@{{ user.nickname }}</h2>
        </div>
        <!-- mobile:hidden desktop:right -->
        <div class="hidden md:flex flex-1 justify-end order-2">
          <button class="button is-primary mr-8">Contactar</button>
          <button class="button is-secondary">Donar</button>
        </div>
      </div>
      <!-- 2nd row -->
      <div class="flex justify-center">
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
      <hr class="my-16" />
      <!-- 3rd row -->
      <div class="flex items-center flex-col">
        <p class="title is-4">Especializaciones</p>
        <p class="subtitle is-6">
          Areas particulares a la cuales
          <i class="capitalize">{{ refuge.displayName }}</i> se dedica y
          compromete
        </p>
        <div class="max-w-sm text-center">
          <span
            class="tag is-info capitalize m-1"
            v-for="specialization in refuge.specialization"
            :key="specialization"
            >{{ specialization }}</span
          >
        </div>
      </div>
      <hr class="mx-auto my-16 w-64" />
      <!-- 4th row -->
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
      <hr class="mx-auto my-16 w-64" />
      <!-- 5th row -->
      <div class="flex items-center flex-col">
        <p class="title is-4">
          Adopciones
        </p>
        <p class="subtitle is-6">
          Animales que <i class="capitalize">{{ refuge.displayName }}</i> cuida
          mientras buscan hogar para ser felices
        </p>
        <div class="flex flex-wrap justify-center px-8">
          <div v-for="n in 5" :key="n" class="m-4">
            <PetCard class="w-64" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from "../components/Spinner";
import PetCard from "../components/cards/PetCard";
import { initMapProfile } from "../utils/map";

export default {
  name: "ProfileTest",
  components: {
    Spinner,
    PetCard
  },
  data: () => ({
    mapLoaded: false
  }),
  computed: {
    user() {
      return this.$auth.mongoUser;
    },
    refuge() {
      return {
        displayName: this.user.refugeInfo?.displayName || "El Pandorofugio",
        specialization: this.user.refugeInfo?.specialization.length
          ? this.user.refugeInfo.specialization
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
