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
              <label class="label">Datos personales</label>
              <p class="help pb-6">
                Datos del responsable de esta cuenta
              </p>
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
            </div>
          </div>
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
  mobilePhone: "mobilePhone"
});

export default {
  name: "UserDataStep",
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
