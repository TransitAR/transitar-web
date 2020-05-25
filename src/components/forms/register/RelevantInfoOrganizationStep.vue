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
              <div class="is-divider"></div>
              <p class="label">Donaciones</p>
              <label class="label has-text-weight-medium">Titular</label>
              <TextField
                placeholder="Titular"
                :value="step.bankAccountHolder"
                @input="updateStep(keys.bankAccountHolder, $event)"
              />
              <label class="label has-text-weight-medium">Banco</label>
              <TextField
                placeholder="Banco"
                :value="step.bankAccount"
                @input="updateStep(keys.bankAccount, $event)"
              />
              <label class="label has-text-weight-medium">Cuenta</label>
              <TextField
                placeholder="Cuenta"
                :value="step.bankAccountID"
                @input="updateStep(keys.bankAccountID, $event)"
              />
              <label class="label has-text-weight-medium">CBU</label>
              <TextField
                placeholder="CBU"
                :value="step.bankAccountCBU"
                @input="updateStep(keys.bankAccountCBU, $event)"
              />
              <label class="label has-text-weight-medium">Alias</label>
              <TextField
                placeholder="Alias"
                :value="step.bankAccountAlias"
                @input="updateStep(keys.bankAccountAlias, $event)"
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
  facebook: "facebook",
  mpLink: String,
  mpAmount: String,
  mpEmail: String,
  mpBankAccountHolder: String,
  bankAccountHolder: "bankAccountHolder",
  bankAccount: "bankAccount",
  bankAccountID: "bankAccountID",
  bankAccountCBU: "bankAccountCBU",
  bankAccountAlias: "bankAccountAlias"
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
