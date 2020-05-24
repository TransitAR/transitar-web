<template>
  <div class="container is-fullhd p-4 md:p-16">
    <!-- verify email -->
    <VerifyEmail v-if="!$auth.user.email_verified" />
    <!-- user type -->
    <div v-else-if="!submittedUserType">
      <div class="flex items-center flex-col mb-12">
        <p class="label">Seleccioná el tipo de usuario</p>
        <p class="help pb-6">
          Para más información acerca de los diferentes tipos de usuario podés
          entrar <router-link to="/info" class="underline">acá</router-link>
        </p>
        <RadioGroup name="user-type" v-model="userType" :options="userTypes" />
      </div>
      <div class="flex justify-center">
        <button
          class="button is-light"
          :class="submittingUserType ? 'is-loading' : ''"
          @click="next()"
        >
          Continuar
        </button>
      </div>
    </div>
    <!-- register form -->
    <RegisterForm
      v-else
      @change-user-type="submittedUserType = false"
      :user-type="userType"
    />
  </div>
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
  },
  {
    val: "founder",
    text: "Fundador"
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
