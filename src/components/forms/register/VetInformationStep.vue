<template>
  <div
    :class="
      `step-content has-text-centered is-primary ${isActive ? 'is-active' : ''}`
    "
  >
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <!-- VET FORM START -->

          <div>
            <div>
              <!-- VET DATA START -->
              <div class="field">
                <label class="label pb-6">Datos de la veterinaria</label>
                <input
                  class="input"
                  type="text"
                  placeholder="Nombre"
                  :value="step.name"
                  @input="updateStep(keys.name, $event)"
                />
              </div>
              <div class="field">
                <input
                  class="input"
                  type="text"
                  placeholder="Dirección"
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
              <!-- VET DATA START -->
            </div>
            <!-- SOCIAL START -->
            <div class="field">
              <label class="label">Redes sociales</label>
              <p class="help pb-6">
                Redes sociales de la veterinaria
              </p>
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
              <label class="label">Especialidades</label>
              <p class="help pb-6">
                Ingresa las especialidades separadas con una coma (por ejemplo
                "rayos X, internacion")
              </p>
              <input
                class="input"
                type="text"
                placeholder="Especialidades"
                :value="step.specialties"
              />
            </div>
            <div class="is-divider"></div>
          </div>
          <!-- VET FORM END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// keys to match exactly in RegisterForm
const keys = Object.freeze({
  // Vet
  name: "name",
  address: "address",
  landlinePhone: "landlinePhone",
  mobilePhone: "mobilePhone",
  // Social
  instagram: "instagram",
  twitter: "twitter",
  facebook: "facebook",
  // Specialties
  specialties: "specialties"
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
    updateStep(key, value) {
      this.$emit("update:step", {
        ...this.step,
        [key]: value
      });
    }
  }
};
</script>
