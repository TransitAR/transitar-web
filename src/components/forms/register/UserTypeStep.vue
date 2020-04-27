<template>
  <div class="step-content has-text-centered is-primary is-active">
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-narrow">
          <RadioGroup
            name="user-type"
            :value="step.userType"
            :options="options"
            @input="updateUserType"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadioGroup from "../../inputs/RadioGroup";

export default {
  name: "UserTypeStep",
  components: { RadioGroup },
  data: () => ({
    options: [
      {
        val: "refuge",
        text: "Refugio"
      },
      {
        val: "adoptant",
        text: "Adoptante"
      },
      {
        val: "volunteer",
        text: "Voluntario"
      },
      {
        val: "vet",
        text: "Clinica Veterinaria"
      }
    ]
  }),
  props: {
    step: Object
  },
  methods: {
    updateUserType(val) {
      this.$emit("update:step", { userType: val });
    }
  }
};
</script>
