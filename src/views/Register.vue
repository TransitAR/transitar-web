<template>
  <section class="container is-fullhd p-16">
    <div class="columns is-centered is-vcentered">
      <!-- verify email -->
      <VerifyEmail v-if="!$auth.user.email_verified" />
      <!-- user type -->
      <div v-else-if="!submittedUserType">
        <RadioGroup name="user-type" v-model="userType" :options="userTypes" />
        <button
          class="button is-light"
          :class="submittingUserType ? 'is-loading' : ''"
          @click="next()"
        >
          Continuar
        </button>
      </div>
      <!-- register form -->
      <RegisterForm v-else :user-type="userType" />
    </div>
  </section>
</template>

<script>
import RadioGroup from "../components/inputs/RadioGroup";
import VerifyEmail from "../components/register/VerifyEmail";
import RegisterForm from "../components/forms/RegisterForm";

const userTypes = Object.freeze([
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
]);

export default {
  name: "register",
  components: {
    VerifyEmail,
    RegisterForm,
    RadioGroup
  },
  data: () => ({
    userTypes,
    userType: "",
    submittedUserType: false,
    submittingUserType: false
  }),
  methods: {
    async next() {
      this.submittingUserType = true;
      if (this.userType) {
        const data = { userType: this.userType };
        await this.$auth.updateUser(data);
        this.submittedUserType = true;
      }
      this.submittingUserType = false;
    }
  },
  mounted() {
    this.userType = this.$auth.mongoUser.userType || "";
  }
};
</script>
