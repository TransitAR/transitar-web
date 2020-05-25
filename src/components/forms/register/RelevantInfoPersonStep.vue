<template>
  <div class="step-content has-text-centered is-primary is-active">
    <div class="hero-body" :class="{ 'pt-2': narrow }">
      <div class="columns is-centered">
        <div class="column is-half text-left">
          <div>
            <div class="field">
              <label class="label">¿Cómo podés ayudar?</label>
              <p class="help pb-6">
                Seleccioná al menos una opción para poder continuar
              </p>
              <div class="control">
                <CheckboxField
                  label="Puedo adoptar"
                  name="can-adopt"
                  :checked="step.canAdopt"
                  @input="updateStep(keys.canAdopt, $event)"
                />
                <CheckboxField
                  label="Puedo dar tránsito"
                  name="can-transit"
                  :checked="step.canTransit"
                  @input="updateStep(keys.canTransit, $event)"
                />
                <CheckboxField
                  label="Puedo hacer traslados"
                  name="can-travel"
                  :checked="step.canTravel"
                  @input="updateStep(keys.canTravel, $event)"
                />
                <CheckboxField
                  label="Puedo ayudar ante emergencias cerca mío"
                  name="can-help"
                  :checked="step.canHelp"
                  @input="updateStep(keys.canHelp, $event)"
                />
                <CheckboxField
                  label="Tengo impresora 3D o puedo ayudar a fabricar prótesis"
                  name="can-print"
                  :checked="step.canPrint"
                  @input="updateStep(keys.canPrint, $event)"
                />
                <CheckboxField
                  label="Tengo materiales o puedo ayudar a construir cuchas"
                  name="can-build"
                  :checked="step.canBuild"
                  @input="updateStep(keys.canBuild, $event)"
                />
              </div>
            </div>

            <div class="is-divider"></div>

            <template v-if="showHouseInfo">
              <SelectField
                label="Tipo de vivienda"
                sublabel="Seleccioná la opción que mejor describa tu vivienda"
                placeholder="Tipo de vivienda"
                :value="step.houseType"
                :options="['Casa', 'Departamento', 'Quinta']"
                @input="updateStep(keys.houseType, $event)"
              />
              <div class="is-divider"></div>
              <RadioGroup
                name="hours-away"
                label="Horas fuera de casa"
                :value="step.hoursAway"
                :options="hoursAwayOptions"
                @input="updateStepRadio(keys.hoursAway, $event)"
              />
              <div class="is-divider"></div>
              <p class="label pb-3">Protección en el edificio</p>
              <CheckboxField
                name="house-protection"
                label="Cuento con protección en balcones y/o medianeras"
                :checked="step.houseProtection"
                @input="updateStep(keys.houseProtection, $event)"
              />
              <Message
                v-if="!step.houseProtection"
                title="¡Atención!"
                class="mt-5"
              >
                Las protecciones en balcones y medianeras son
                <b>muy importantes para evitar escapes y posibles accidentes</b
                >, si no contás con protecciones podés ver los servicios
                recomendados por miembros de la comunidad <a>acá</a>.
              </Message>
              <div class="is-divider"></div>
              <p class="label">Integrantes del grupo familiar</p>
              <p class="help mb-6">Seleccioná todas las que apliquen</p>
              <CheckboxField
                name="more-adults"
                label="Hay más adultos en mi grupo familiar"
                :checked="step.hasAdults"
                @input="updateStep(keys.hasAdults, $event)"
              />
              <NumberField
                v-if="step.hasAdults"
                placeholder="¿Cuántos?"
                :value="step.adults"
                @input="updateStep(keys.adults, $event)"
              />
              <CheckboxField
                name="more-children"
                label="Hay menores de 18 años en mi grupo familiar"
                :checked="step.hasChildren"
                @input="updateStep(keys.hasChildren, $event)"
              />
              <NumberField
                v-if="step.hasChildren"
                placeholder="¿Cuántos?"
                :value="step.children"
                @input="updateStep(keys.children, $event)"
              />
              <CheckboxField
                name="other-pets"
                label="Hay animales en mi grupo familiar"
                :checked="step.hasPets"
                @input="updateStep(keys.hasPets, $event)"
              />
              <NumberField
                v-if="step.hasPets"
                placeholder="¿Cuántos?"
                :value="step.otherPets"
                @input="updateStep(keys.otherPets, $event)"
              />
              <div class="is-divider"></div>
            </template>
            <template v-if="showAvailability">
              <div>
                <p class="label">Disponibilidad para traslados</p>
                <p class="help pb-6">Seleccioná todas las que apliquen</p>
                <CheckboxField
                  v-for="{ day, label } in availabilityOptions"
                  :key="day"
                  :name="day"
                  :label="label"
                  :checked="isAvailable(day)"
                  @input="updateAvailability(day, $event)"
                />
                <div class="is-divider"></div>
              </div>
              <div class="is-divider"></div>
            </template>
            <template v-if="showExperience">
              <p class="label pb-3">Experiencia con animales</p>
              <CheckboxField
                name="experience"
                label="Tengo experiencia con perros y/o gatos"
                :checked="step.experience"
                @input="updateStep(keys.experience, $event)"
              />
              <CheckboxField
                name="transport-box"
                label="Tengo caja transportadora o canil"
                :checked="step.hasTransportBox"
                @input="updateStep(keys.hasTransportBox, $event)"
              />
              <div class="is-divider"></div>
            </template>
            <div>
              <p class="label pb-3">Redes sociales</p>
              <label class="label has-text-weight-medium">Twitter</label>
              <TextField
                placeholder="Usuario Twitter"
                :value="step.twitter"
                @input="updateStep(keys.twitter, $event)"
              />
              <label class="label has-text-weight-medium">Instagram</label>
              <TextField
                placeholder="Usuario Instagram"
                :value="step.instagram"
                @input="updateStep(keys.instagram, $event)"
              />
              <label class="label has-text-weight-medium">Facebook</label>
              <TextField
                placeholder="Usuario Facebook"
                :value="step.facebook"
                @input="updateStep(keys.facebook, $event)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "../../inputs/TextField";
import NumberField from "../../inputs/NumberField";
import DateField from "../../inputs/DateField";
import PhoneField from "../../inputs/PhoneField";
import CheckboxField from "../../inputs/CheckboxField";
import ToggleField from "../../inputs/ToggleField";
import SelectField from "../../inputs/SelectField";
import RadioGroup from "../../inputs/RadioGroup";
import Message from "../../Message";

// keys to match exactly in RegisterForm
const keys = Object.freeze({
  canTravel: "canTravel",
  canAdopt: "canAdopt",
  canTransit: "canTransit",
  canHelp: "canHelp",
  canPrint: "canPrint",
  canBuild: "canBuild",
  alerts: "alerts",
  houseType: "houseType",
  hoursAway: "hoursAway",
  houseProtection: "houseProtection",
  hasAdults: "hasAdults",
  adults: "adults",
  hasChildren: "hasChildren",
  children: "children",
  hasPets: "hasPets",
  otherPets: "otherPets",
  availability: "availability",
  experience: "experience",
  hasTransportBox: "hasTransportBox",

  twitter: "twitter",
  instagram: "instagram",
  facebook: "facebook"
});

export default {
  name: "RelevantInfoPersonStep",
  components: {
    CheckboxField,
    SelectField,
    RadioGroup,
    NumberField,
    TextField,
    Message
  },
  props: {
    narrow: Boolean,
    step: {
      type: Object,
      required: true
    },
    userType: {
      type: String,
      required: true
    }
  },
  data: () => ({
    keys,
    hoursAwayOptions: [
      { val: "8-", text: "Menos de 8" },
      { val: "8+", text: "Más de 8" },
      { val: "16+", text: "Más de 16, pero hay gente en casa" }
    ],
    availabilityOptions: [
      { day: "mon", label: "Lunes" },
      { day: "tue", label: "Martes" },
      { day: "wed", label: "Miercoles" },
      { day: "thu", label: "Jueves" },
      { day: "fri", label: "Viernes" },
      { day: "sat", label: "Sabado" },
      { day: "sun", label: "Domingo" }
    ]
  }),
  computed: {
    isAdoptant() {
      return this.userType === "adoptant";
    },
    isVolunteer() {
      return this.userType === "volunteer";
    },
    showHouseInfo() {
      return this.step.canAdopt || this.step.canTransit;
    },
    showExperience() {
      return (
        this.step.canAdopt ||
        this.step.canTransit ||
        this.step.canTravel ||
        this.step.canHelp
      );
    },
    showAvailability() {
      return this.step.canTravel;
    }
  },
  methods: {
    updateStep(key, value) {
      this.$emit("update:step", {
        ...this.step,
        [key]: value
      });
    },
    updateStepRadio(key, value) {
      this.$emit("update:step", {
        ...this.step,
        [key]: value
      });
    },
    updateAvailability(day, value) {
      this.$emit("update:step", {
        ...this.step,
        [this.keys.availability]: {
          ...this.step.availability,
          [day]: value
        }
      });
    },
    isAvailable(day) {
      return Boolean(this.step.availability[day]);
    }
  }
};
</script>
