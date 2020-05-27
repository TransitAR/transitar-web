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

              <div class="mb-4">
                <p class="label">Donaciones</p>
              </div>

              <!-- banco -->
              <ToggleField
                name="has-bank"
                label="Banco"
                :checked="step.donations.hasBank"
                @input="updateStepDonations(keys.hasBank, $event)"
              />
              <div
                v-if="step.donations.hasBank"
                class="card px-4 pt-4 pb-8 my-4"
              >
                <p class="label">Datos del banco</p>
                <label class="label has-text-weight-medium">Titular</label>
                <TextField
                  placeholder="Titular"
                  :value="step.donations.bank.owner"
                  @input="updateStepDonationsBank(keys.bank_owner, $event)"
                />
                <label class="label has-text-weight-medium">Banco</label>
                <TextField
                  placeholder="Banco"
                  :value="step.donations.bank.bankName"
                  @input="updateStepDonationsBank(keys.bank_bankName, $event)"
                />
                <label class="label has-text-weight-medium">Cuenta</label>
                <TextField
                  placeholder="Cuenta"
                  :value="step.donations.bank.accountId"
                  @input="updateStepDonationsBank(keys.bank_accountId, $event)"
                />
                <label class="label has-text-weight-medium">CBU</label>
                <TextField
                  placeholder="CBU"
                  :value="step.donations.bank.accountCBU"
                  @input="updateStepDonationsBank(keys.bank_accountCBU, $event)"
                />
                <label class="label has-text-weight-medium">Alias</label>
                <TextField
                  placeholder="Alias"
                  :value="step.donations.bank.accountAlias"
                  @input="
                    updateStepDonationsBank(keys.bank_accountAlias, $event)
                  "
                />
              </div>

              <!-- paypal -->
              <ToggleField
                class="my-8"
                name="has-paypal"
                label="Paypal"
                :checked="step.donations.hasPaypal"
                @input="updateStepDonations(keys.hasPaypal, $event)"
              />
              <div
                v-if="step.donations.hasPaypal"
                class="card px-4 pt-4 pb-8 my-4"
              >
                <p class="label">Datos de Paypal</p>
                <label class="label has-text-weight-medium"
                  >Link a Paypal</label
                >
                <TextField
                  placeholder="www.paypal.com"
                  :value="step.donations.paypal.link"
                  @input="updateStepDonationsPaypal(keys.paypal_link, $event)"
                />
              </div>

              <!-- mercadolibre -->
              <ToggleField
                class="my-8"
                name="has-mercadopago"
                label="Mercadopago"
                :checked="step.donations.hasMercadopago"
                @input="updateStepDonations(keys.hasMercadopago, $event)"
              />
              <template v-if="showMercadopagoLinks">
                <div
                  class="card px-4 pt-4 pb-8 my-4 relative"
                  v-for="(link, i) in step.donations.mercadopago.links"
                  :key="i"
                >
                  <font-awesome-icon
                    icon="trash"
                    class="absolute right-0 top-0 m-5 cursor-pointer"
                    @click="removeMpLink(i)"
                  />
                  <label class="label has-text-weight-medium"
                    >Link número {{ i + 1 }}</label
                  >
                  <NumberField
                    placeholder="Monto"
                    :value="link.amount"
                    @input="
                      updateStepDonationsMP(keys.mercadopago_amount, $event, i)
                    "
                  />
                  <TextField
                    placeholder="Descripcion"
                    :value="link.description"
                    @input="
                      updateStepDonationsMP(
                        keys.mercadopago_description,
                        $event,
                        i
                      )
                    "
                  />
                  <TextField
                    placeholder="www.mercadopago.com"
                    :value="link.url"
                    @input="
                      updateStepDonationsMP(keys.mercadopago_url, $event, i)
                    "
                  />
                </div>
                <div class="button is-light is-rounded mt-2" @click="addMpLink">
                  <font-awesome-icon icon="plus" class="mr-2" />
                  Agregar un link mas de Mercadopago
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextField from "@/components/inputs/TextField";
import NumberField from "@/components/inputs/NumberField";
import ToggleField from "@/components/inputs/ToggleField";
import CheckboxField from "../../inputs/CheckboxField";

const keys = Object.freeze({
  username: "username",
  displayName: "displayName",
  showInMap: "showInMap",
  specialization: "specialization",
  twitter: "twitter",
  instagram: "instagram",
  facebook: "facebook",
  donations: "donations",
  hasBank: "hasBank",
  bank: "bank",
  bank_owner: "owner",
  bank_bankName: "bankName",
  bank_accountId: "accountId",
  bank_accountCBU: "accountCBU",
  bank_accountAlias: "accountAlias",
  hasMercadopago: "hasMercadopago",
  mercadopago_links: "links",
  mercadopago_amount: "amount",
  mercadopago_description: "description",
  mercadopago_url: "url",
  hasPaypal: "hasPaypal",
  paypal: "paypal",
  paypal_link: "link"
});

export default {
  name: "RelevantInfoOrganizationStep",
  components: {
    TextField,
    NumberField,
    ToggleField,
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
  computed: {
    showMercadopagoLinks() {
      return (
        this.step.donations.hasMercadopago &&
        this.step.donations.mercadopago.links.length
      );
    }
  },
  methods: {
    updateStep(key, value) {
      this.$emit("update:step", {
        ...this.step,
        [key]: value
      });
    },
    updateStepDonations(key, value) {
      if (keys.hasMercadopago) {
        if (!this.step.donations.mercadopago.links.length) {
          this.step.donations.mercadopago.links = [
            {
              amount: "",
              description: "",
              url: ""
            }
          ];
        } else if (!value) {
          this.step.donations.mercadopago.links = [];
        }
      }
      this.$emit("update:step", {
        ...this.step,
        donations: {
          ...this.step.donations,
          [key]: value
        }
      });
    },
    updateStepDonationsBank(key, value) {
      this.$emit("update:step", {
        ...this.step,
        donations: {
          ...this.step.donations,
          bank: {
            ...this.step.donations.bank,
            [key]: value
          }
        }
      });
    },
    updateStepDonationsPaypal(key, value) {
      this.$emit("update:step", {
        ...this.step,
        donations: {
          ...this.step.donations,
          paypal: {
            ...this.step.donations.paypal,
            [key]: value
          }
        }
      });
    },
    updateStepDonationsMP(key, value, i) {
      const links = this.step.donations.mercadopago.links;
      links[i][key] = value;
      this.$emit("update:step", {
        ...this.step,
        donations: {
          ...this.step.donations,
          mercadopago: {
            ...this.step.donations.paypal,
            links
          }
        }
      });
    },
    addMpLink() {
      const { links } = this.step.donations.mercadopago;
      const last = links[links.length - 1];
      if (links.length > 5 || !last.url || !last.amount) {
        return;
      }
      links.push({
        amount: "",
        description: "",
        url: ""
      });
      this.$emit("update:step", {
        ...this.step,
        donations: {
          ...this.step.donations,
          mercadopago: {
            links
          }
        }
      });
    },
    removeMpLink(i) {
      const links = this.step.donations.mercadopago.links.filter(
        (_link, j) => i !== j
      );
      const hasMercadopago = Boolean(links.length);
      this.$emit("update:step", {
        ...this.step,
        donations: {
          ...this.step.donations,
          hasMercadopago,
          mercadopago: {
            links
          }
        }
      });
    }
  }
};
</script>
