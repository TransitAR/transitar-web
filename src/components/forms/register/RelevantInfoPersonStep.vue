<template>
  <div class="step-content has-text-centered is-primary is-active">
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
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
              </div>
            </div>

            <div class="is-divider"></div>

            <SelectField
              label="Tipo de vivienda"
              sublabel="Seleccioná la opción que mejor describa tu vivienda"
              placeholder="Tipo de vivienda"
              :value="step.houseType"
              :options="['Casa', 'Departamento', 'Quinta']"
              @input="updateStep(keys.houseType, $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "../../inputs/TextField";
import DateField from "../../inputs/DateField";
import PhoneField from "../../inputs/PhoneField";
import CheckboxField from "../../inputs/CheckboxField";
import ToggleField from "../../inputs/ToggleField";
import SelectField from "../../inputs/SelectField";

/* 

personInfo: {
    // Second step
    canTravel: boolean;
    canAdopt: boolean;
    canTransit: boolean;
    canHelp: boolean;

    // Third step
    houseType: string;
    hoursAway: string;
    houseProtection: boolean;
    hasAdults: boolean;
    adults: number;
    hasChildren: boolean;
    children: number;
    hasPets: boolean;
    otherPets: number;
    experience: boolean;
    hasTransportBox: boolean;
    availability: {
      mon: boolean;
      tue: boolean;
      wed: boolean;
      thu: boolean;
      fri: boolean;
      sat: boolean;
      sun: boolean;
    };
  };

*/

// keys to match exactly in RegisterForm
const keys = Object.freeze({
  // User & alerts
  canTravel: "canTravel",
  canAdopt: "canAdopt",
  canTransit: "canTransit",
  houseType: "houseType",
  canHelp: "canHelp",
  alerts: "alerts"
});

export default {
  name: "RelevantInfoPersonStep",
  components: {
    // TextField,
    // DateField,
    // PhoneField,
    CheckboxField,
    SelectField
    // ToggleField
  },
  props: {
    userType: String,
    step: Object
  },
  data: () => ({
    keys
  }),
  computed: {
    isAdoptant() {
      return this.userType === "adoptant";
    },
    isVolunteer() {
      return this.userType === "volunteer";
    }
  },
  methods: {
    updateStep(key, $event) {
      const value =
        $event.target.type === "checkbox"
          ? $event.target.checked
          : $event.target.value;
      this.$emit("update:step", {
        ...this.step,
        [key]: value
      });
    }
  }
};
</script>
