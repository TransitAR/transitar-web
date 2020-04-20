<template>
  <div
    :class="
      `step-content has-text-centered is-primary ${isActive ? 'is-active' : ''}`
    "
  >
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <!-- ACCOUNT FORM START -->

          <div>
            <!-- PERSONAL DATA START -->
            <div class="field">
              <label class="label pb-3">Datos personales</label>
              <input
                class="input"
                type="text"
                placeholder="Nombres"
                :value="step.name"
                @input="updateStep(keys.name, $event)"
              />
            </div>
            <div class="field">
              <input
                class="input"
                type="text"
                placeholder="Apellido"
                :value="step.lastName"
                @input="updateStep(keys.lastName, $event)"
              />
            </div>
            <div class="field">
              <input
                class="input"
                type="date"
                :value="step.dob"
                @input="updateStep(keys.dob, $event)"
              />
            </div>
            <div class="field">
              <input
                class="input"
                type="text"
                placeholder="Domicilio"
                :value="step.address"
                @input="updateStep(keys.address, $event)"
              />
              <p class="help">Calle, altura, localidad, provincia.</p>
            </div>

            <div class="field">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static">+54</a>
                    </p>
                    <p class="control is-expanded">
                      <input
                        class="input"
                        type="tel"
                        placeholder="Teléfono fijo"
                        :value="step.landlinePhone"
                        @input="updateStep(keys.landlinePhone, $event)"
                      />
                    </p>
                  </div>
                  <p class="help">Sin guiones y sin el 0</p>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static">+54</a>
                    </p>
                    <p class="control is-expanded">
                      <input
                        class="input"
                        type="tel"
                        placeholder="Teléfono celular"
                        :value="step.mobilePhone"
                        @input="updateStep(keys.mobilePhone, $event)"
                      />
                    </p>
                  </div>
                  <p class="help">Sin guiones y sin el 0</p>
                </div>
              </div>
              <div class="is-divider"></div>
            </div>
            <!-- SOCIAL START -->
            <div class="field">
              <label class="label pb-3">Redes sociales</label>
              <input
                class="input"
                type="text"
                placeholder="Instagram"
                :value="step.instagram"
                @input="updateStep(keys.instagram, $event)"
              />
            </div>
            <div class="field">
              <input
                class="input"
                type="text"
                placeholder="Twitter"
                :value="step.twitter"
                @input="updateStep(keys.twitter, $event)"
              />
            </div>
            <div class="field">
              <input
                class="input"
                type="text"
                placeholder="Facebook"
                :value="step.facebook"
                @input="updateStep(keys.facebook, $event)"
              />
            </div>
            <div class="is-divider"></div>

            <!-- SOCIAL END -->
            <!-- PERSONAL DATA END -->
            <div class="field">
              <label class="label">¿Cómo podés ayudar?</label>
              <p class="help pb-6">
                Seleccioná al menos una opción para poder continuar
              </p>
              <div class="control">
                <div class="field">
                  <div class="field">
                    <input
                      class="is-checkradio has-background-color"
                      id="canAdopt"
                      type="checkbox"
                      name="canAdopt"
                      :checked="step.canAdopt"
                      @input="updateStep(keys.canAdopt, $event)"
                    />
                    <label for="canAdopt">Puedo adoptar</label>
                  </div>
                  <div class="field">
                    <input
                      class="is-checkradio has-background-color"
                      id="canTransit"
                      type="checkbox"
                      name="canTransit"
                      :checked="step.canTransit"
                      @input="updateStep(keys.canTransit, $event)"
                    />
                    <label for="canTransit">Puedo dar tránsito</label>
                  </div>
                  <div class="field">
                    <input
                      class="is-checkradio has-background-color"
                      id="canTravel"
                      type="checkbox"
                      name="canTravel"
                      :checked="step.canTravel"
                      @input="updateStep(keys.canTravel, $event)"
                    />
                    <label for="canTravel">Puedo hacer traslados</label>
                  </div>
                  <div class="field">
                    <input
                      class="is-checkradio has-background-color"
                      id="canHelp"
                      type="checkbox"
                      name="canHelp"
                      :checked="step.canHelp"
                      @input="updateStep(keys.canHelp, $event)"
                    />
                    <label for="canHelp"
                      >Puedo ayudar ante emergencias cerca mío</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="is-divider"></div>
            <div class="field">
              <label class="label">Alertas</label>
              <p class="help pb-6">
                Estamos trabajando para habilitar alertas en tiempo real
              </p>
              <div class="control">
                <input
                  id="switchExample"
                  type="checkbox"
                  name="switchExample"
                  class="switch"
                  :checked="step.alerts"
                  @input="updateStep(keys.alerts, $event)"
                />
                <label for="switchExample">
                  Quiero recibir alertas sobre casos de riesgo cercanos
                </label>
              </div>
            </div>
          </div>
          <!-- ACCOUNT FORM END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// keys to match exactly in RegisterForm
const keys = Object.freeze({
  name: "name",
  lastName: "lastName",
  address: "address",
  dob: "dob",
  landlinePhone: "landlinePhone",
  mobilePhone: "mobilePhone",
  instagram: "instagram",
  twitter: "twitter",
  facebook: "facebook",
  canTravel: "canTravel",
  canAdopt: "canAdopt",
  canTransit: "canTransit",
  canHelp: "canHelp",
  alerts: "alerts"
});

export default {
  name: "SecondStep",
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
