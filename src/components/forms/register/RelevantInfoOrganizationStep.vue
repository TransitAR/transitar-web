<template>
  <div class="step-content has-text-centered is-primary is-active">
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <div>
            <div class="field">
              <p class="label pb-6">Nombre de la organizacion</p>
              <TextField
                placeholder="Nombre"
                :value="step.displayName"
                @input="updateStep(keys.displayName, $event)"
              />
              <CheckboxField
                class="mt-8"
                label="Aparecer en el mapa de RefugiAR"
                name="show-in-map"
                :checked="step.showInMap"
                @input="updateStep(keys.showInMap, $event)"
              />
              <div class="is-divider"></div>
              <p class="label">Especialidades</p>
              <p class="help pb-6">
                Ingresa las especialidades separadas con una coma (por ejemplo
                "rayos X, internacion")
              </p>
              <TextField
                placeholder="Especialidades"
                :value="step.specialization"
                @input="updateStep(keys.specialization, $event)"
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
import CheckboxField from "../../inputs/CheckboxField";

const keys = Object.freeze({
  displayName: "displayName",
  showInMap: "showInMap",
  specialization: "specialization"
});

export default {
  name: "RelevantInfoOrganizationStep",
  components: {
    TextField,
    CheckboxField
  },
  props: {
    userType: String,
    step: Object
  },
  data: () => ({
    keys
  }),
  methods: {
    updateStep(key, value) {
      this.$emit("update:step", {
        ...this.step,
        [key]: value
      });
    }
  }
};
</script>
