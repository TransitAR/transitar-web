<template>
  <div class="step-content has-text-centered is-primary is-active">
    <div class="hero-body" :class="{ 'py-2': narrow }">
      <div class="columns is-centered">
        <div class="column is-half text-left">
          <div>
            <div>
              <label class="label">Datos personales</label>
              <p class="help pb-6">
                Datos del responsable de esta cuenta
              </p>
            </div>
            <TextField
              placeholder="Nombre de usuario"
              :value="step.nickname"
              @input="updateStep(keys.nickname, $event)"
            />
            <TextField
              placeholder="Nombres"
              :value="step.name"
              @input="updateStep(keys.name, $event)"
            />
            <TextField
              placeholder="Apellido"
              :value="step.lastName"
              @input="updateStep(keys.lastName, $event)"
            />
            <DateField
              placeholder="Fecha de nacimiento"
              :value="step.dob"
              @input="updateStep(keys.dob, $event)"
            />
            <TextField
              placeholder="Domicilio"
              help-text="Calle, altura, localidad, provincia."
              :value="step.address"
              @input="updateStep(keys.address, $event)"
            />
            <PhoneField
              placeholder="Teléfono fijo"
              help-text="Sin guiones y sin el 0."
              :value="step.landlinePhone"
              @input="updateStep(keys.landlinePhone, $event)"
            />
            <PhoneField
              placeholder="Teléfono celular"
              help-text="Sin guiones y sin el 0."
              :value="step.mobilePhone"
              @input="updateStep(keys.mobilePhone, $event)"
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

// keys to match exactly in RegisterForm
const keys = Object.freeze({
  nickname: "nickname",
  name: "name",
  lastName: "lastName",
  address: "address",
  dob: "dob",
  landlinePhone: "landlinePhone",
  mobilePhone: "mobilePhone"
});

export default {
  name: "PersonalInfoStep",
  components: {
    TextField,
    DateField,
    PhoneField
  },
  props: {
    narrow: Boolean,
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
