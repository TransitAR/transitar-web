<template>
  <div class="step-content has-text-centered is-primary is-active">
    <div class="hero-body" :class="{ 'pt-2': narrow }">
      <div class="columns is-centered">
        <div class="column is-half text-left">
          <div>
            <div class="field">
              <p class="label pb-6">Nombre de la organizacion</p>
              <TextField
                placeholder="Nombre"
                :value="step.displayName"
                @input="updateStep(keys.displayName, $event)"
              />
              <p class="label mt-8">
                Nombre de de usuario para la organizacion
              </p>
              <p class="help pb-6">
                Es la forma en que los demas miembros de nuestra comunidad van a
                identificar al refugio
              </p>
              <TextField
                placeholder="NombreDeUsuario"
                :value="step.username"
                @input="updateStep(keys.username, $event)"
              />
              <p class="help">Intenta no usar espacios.</p>
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
              <div class="is-divider"></div>
              <p class="label">Redes sociales</p>
              <TextField
                placeholder="Usuario Twitter"
                :value="step.twitter"
                @input="updateStep(keys.twitter, $event)"
              />
              <TextField
                placeholder="Usuario Instagram"
                :value="step.instagram"
                @input="updateStep(keys.instagram, $event)"
              />
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
import CheckboxField from "../../inputs/CheckboxField";

const keys = Object.freeze({
  username: "username",
  displayName: "displayName",
  showInMap: "showInMap",
  specialization: "specialization",
  twitter: "twitter",
  instagram: "instagram",
  facebook: "facebook"
});

export default {
  name: "RelevantInfoOrganizationStep",
  components: {
    TextField,
    CheckboxField
  },
  props: {
    narrow: Boolean,
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
