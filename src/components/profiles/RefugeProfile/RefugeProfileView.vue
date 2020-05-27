<template>
  <section class="container relative">
    <div
      class="flex md:hidden justify-center fixed z-10 bottom-0 inset-x-0 border-t border-solid border-gray-200 bg-gray-100 p-2"
    >
      <button v-if="!readOnly" class="button mr-8" @click="edit()">
        Editar
        <font-awesome-icon icon="pencil-alt" class="ml-2" />
      </button>
      <button class="button is-danger">
        Donar
        <font-awesome-icon icon="heart" class="ml-2" />
      </button>
    </div>
    <div class="my-16 md:my-24 pt-8 px-8 pb-16 card">
      <!-- 1st row -->
      <div class="flex mb-8 flex-col md:flex-row">
        <!-- mobile:2nd desktop:left -->
        <div class="flex-1 flex mt-8 md:mt-0 hidden md:block md:order-0">
          <button v-if="!readOnly" class="button" @click="edit()">
            Editar
            <font-awesome-icon icon="pencil-alt" class="ml-2" />
          </button>
        </div>
        <!-- mobile:1st desktop:center -->
        <div class="flex-1 flex flex-col items-center order-0 md:order-1">
          <figure
            class="refuge-image rounded-full border-solid border-4 border-gray-600 -my-16 mb-8"
          >
            <img class="rounded-full" src="@/assets/refuge-example-image.jpg" />
          </figure>
          <h1 class="title capitalize text-center">
            {{ info.displayName }}
            <div class="image is-24x24 inline-block pt-1 m-1">
              <img src="@/assets/png/refuge.png" />
            </div>
          </h1>
          <h2 class="subtitle">@{{ info.username }}</h2>
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
      <div class="py-2 mb-8 md:hidden">
        <SelectField
          narrow
          label="Sección"
          sublabel="Seleccioná lo que te gustaría ver"
          :options="sections"
          v-model="currentSection"
        />
      </div>
      <div class="hidden md:block my-16">
        <TabsField boxed :tabs="sections" v-model="currentSection" />
      </div>
      <!-- info tab -->
      <div v-show="showInfoSection" class="flex items-center flex-col">
        <div class="flex items-center flex-col">
          <div class="md:w-3/5 text-center">
            <p>
              <i class="capitalize">{{ info.displayName }}</i> Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
        </div>
        <hr class="mx-auto my-8 md:my-16" />
        <!-- specializations -->
        <div class="flex items-center flex-col">
          <p class="title is-4">Especializaciones</p>
          <p class="subtitle is-6 pt-3">
            Areas particulares a la cuales
            <i class="capitalize">{{ info.displayName }}</i> se dedica y
            compromete
          </p>
          <div class="max-w-sm text-center">
            <span
              class="tag is-primary capitalize m-1"
              v-for="specialization in info.specialization"
              :key="specialization"
              >{{ specialization }}</span
            >
          </div>
        </div>
        <hr class="mx-auto my-8 md:my-16" />
        <!-- location -->
        <div class="flex items-center flex-col max-w-full">
          <p class="title is-4">
            Ubicacion
          </p>
          <p class="subtitle is-6 pt-3">
            Por motivos de privacidad la ubicacion es aproximada y no exacta
          </p>
          <div
            v-show="!mapLoaded"
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
      <!-- adoptions tab -->
      <div v-show="showAdoptionsSection" class="flex items-center flex-col">
        <div class="flex flex-wrap justify-center px-8">
          <div v-for="n in 8" :key="n" class="m-4">
            <PetCard class="w-64" />
          </div>
        </div>
      </div>
      <!-- contact tab -->
      <div v-show="showContactSection" class="flex items-center flex-col">
        <!-- data -->
        <div class="flex items-center flex-col">
          <p class="title is-4">Información de contacto</p>
          <div class="content">
            <font-awesome-icon icon="envelope" class="mr-3" size="lg" />
            {{ refuge.email }}
          </div>
        </div>
        <hr class="mx-auto my-8 md:my-16" />
        <div class="flex items-center flex-col">
          <p class="title is-4">Redes sociales</p>
          <div class="content">
            <div class="d-flex align-center">
              <font-awesome-icon :icon="['fab', 'facebook-square']" size="lg" />
              <span class="ml-3">{{ info.facebook }}</span>
            </div>
            <br />
            <div class="d-flex align-center">
              <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
              <span class="ml-3">{{ info.twitter }}</span>
            </div>
            <br />
            <div class="d-flex align-center">
              <font-awesome-icon
                :icon="['fab', 'instagram-square']"
                size="lg"
              />
              <span class="ml-3">{{ info.instagram }}</span>
            </div>
          </div>
        </div>
        <hr class="mx-auto my-8 md:my-16" />
        <div v-if="info.donations" class="flex items-center flex-col">
          <p class="title is-4">Donaciones</p>
          <!-- paypal -->
          <div v-if="info.donations.hasPaypal">
            <font-awesome-icon :icon="['fab', 'paypal']" size="lg" />
            <span class="font-semibold is-6 my-2 ml-3">Paypal</span>
            <p>
              <a :href="info.donations.paypal.link" target="_blank">{{
                info.donations.paypal.link
              }}</a>
            </p>
          </div>
          <!-- banco -->
          <div v-if="info.donations.hasBank" class="my-8">
            <p class="mb-2">
              <font-awesome-icon icon="university" size="lg" />
              <span class="font-semibold is-6 ml-3"
                >Banco {{ info.donations.bankName }}</span
              >
            </p>
            <p class="font-semibold">
              {{ info.donations.bank.owner }}
            </p>
            <p>
              <span class="font-semibold is-6 mr-3">Cuenta:</span>
              <span>{{ info.donations.bank.accountCBU }}</span>
            </p>
            <p>
              <span class="font-semibold is-6 mr-3">Alias:</span>
              <span>{{ info.donations.bank.accountAlias }}</span>
            </p>
            <!-- <BankDonationCard :info="info.donations.bank" class="my-4 md:m-4" /> -->
          </div>
          <!-- mercadopago -->
          <div v-if="info.donations.hasMercadopago" class="my-8">
            <p class="mb-3">
              <font-awesome-icon icon="hand-holding-usd" size="lg" />
              <span class="font-semibold is-6 ml-3">Mercadopago</span>
            </p>
            <div
              v-for="link in info.donations.mercadopago.links"
              :key="link.url"
              class="mb-2"
            >
              <p>
                <span class="font-semibold is-6 mr-2">Monto:</span>
                <span>{{ link.amount }}</span>
              </p>
              <p>
                <span class="font-semibold is-6 mr-2" v-if="link.description"
                  >Descripcion:</span
                >
                <span>{{ link.description }}</span>
              </p>
              <p>
                <span class="font-semibold is-6 mr-2">URL:</span>
                <a :href="link.url" target="_blank">{{ link.url }}</a>
              </p>
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
// import BankDonationCard from "./BankDonationCard";
import SelectField from "@/components/inputs/SelectField";
import TabsField from "@/components/inputs/TabsField";
import { initMapProfile } from "@/components/../utils/map";

const sections = Object.freeze(["Información", "Adopciones", "Contacto"]);

export default {
  name: "RefugeProfile",
  components: {
    Spinner,
    PetCard,
    // BankDonationCard,
    TabsField,
    SelectField
  },
  props: {
    readOnly: Boolean,
    refuge: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    sections,
    map: null,
    mapLoaded: false,
    currentSection: sections[2]
  }),
  computed: {
    info() {
      return this.refuge.refugeInfo;
    },
    showInfoSection() {
      return this.currentSection === this.sections[0];
    },
    showAdoptionsSection() {
      return this.currentSection === this.sections[1];
    },
    showContactSection() {
      return this.currentSection === this.sections[2];
    }
  },
  methods: {
    selectSection(section) {
      this.currentSection = section;
    },
    edit() {
      this.$emit("start-edit");
    }
  },
  mounted() {
    const fallbackLocation = [-58.235084, -34.765982];
    this.map = initMapProfile(
      this.$refs.map,
      this.refuge.location || { coordinates: fallbackLocation }
    );
    this.map.on("load", () => {
      this.mapLoaded = true;
    });
  },
  destroyed() {
    this.map.remove();
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
