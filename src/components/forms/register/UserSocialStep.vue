<template>
  <div
    class="step-content has-text-centered is-primary"
    :class="{ 'is-active': isActive }"
  >
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <div>
            <p class="label pb-3">Redes sociales</p>
            <TextField
              placeholder="Instagram"
              :value="step.instagram"
              @input="updateStep(keys.instagram, $event)"
            />
            <TextField
              placeholder="Twitter"
              :value="step.twitter"
              @input="updateStep(keys.twitter, $event)"
            />
            <TextField
              placeholder="Facebook"
              :value="step.facebook"
              @input="updateStep(keys.facebook, $event)"
            />
            <div class="is-divider"></div>
            <div class="field">
              <label class="label">¿Cómo podés ayudar?</label>
              <p class="help pb-6">
                Seleccioná al menos una opción para poder continuar
              </p>
              <div class="control">
                <div class="field">
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
            </div>
            <div class="is-divider"></div>
            <p class="label">Alertas</p>
            <p class="help pb-6">
              Estamos trabajando para habilitar alertas en tiempo real
            </p>
            <ToggleField
              name="alerts"
              label="Quiero recibir alertas sobre casos de riesgo cercanos."
              :checked="step.alerts"
              @input="updateStep(keys.alerts, $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "../../inputs/TextField";
import CheckboxField from "../../inputs/CheckboxField";
import ToggleField from "../../inputs/ToggleField";

// keys to match exactly in RegisterForm
const keys = Object.freeze({
  // Social
  instagram: "instagram",
  twitter: "twitter",
  facebook: "facebook",
  // User & alerts
  canTravel: "canTravel",
  canAdopt: "canAdopt",
  canTransit: "canTransit",
  canHelp: "canHelp",
  alerts: "alerts"
});

export default {
  name: "SecondStep",
  components: {
    TextField,
    CheckboxField,
    ToggleField
  },
  props: {
    isActive: Boolean,
    step: Object
  },
  data: () => ({
    keys
  }),
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
