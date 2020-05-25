<template>
  <div class="step-content has-text-centered is-primary is-active">
    <div class="hero-body" :class="{ 'pt-2': narrow }">
      <div class="columns is-centered">
        <div class="column is-half text-left">
          <div>
            <div>
              <label class="label">Datos personales</label>
              <p class="help pb-6">
                Datos del responsable de esta cuenta
              </p>
            </div>
            <label class="label has-text-weight-medium"
              >Nombre de usuario</label
            >
            <TextField
              placeholder="Nombre de usuario"
              :value="step.nickname"
              @input="updateStep(keys.nickname, $event)"
            />
            <label class="label has-text-weight-medium">Nombre</label>
            <TextField
              placeholder="Nombres"
              :value="step.name"
              @input="updateStep(keys.name, $event)"
            />
            <label class="label has-text-weight-medium">Apellido</label>
            <TextField
              placeholder="Apellido"
              :value="step.lastName"
              @input="updateStep(keys.lastName, $event)"
            />
            <label class="label has-text-weight-medium"
              >Fecha de nacimiento</label
            >
            <DateField
              placeholder="Fecha de nacimiento"
              :value="step.dob"
              @input="updateStep(keys.dob, $event)"
            />
            <label class="label has-text-weight-medium">Domicilio</label>
            <TextField
              placeholder="Domicilio"
              help-text="Calle, altura, localidad, provincia."
              :value="step.address"
              @input="updateStep(keys.address, $event)"
            />
            <label class="label has-text-weight-medium">Teléfono fijo</label>
            <PhoneField
              help-text="Sin guiones y sin el 0."
              :value="step.landlinePhone"
              @input="updateStep(keys.landlinePhone, $event)"
            />
            <label class="label has-text-weight-medium">Celular</label>
            <PhoneField
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
