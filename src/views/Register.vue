<template>
  <section class="container is-fullhd p-16">
    <div class="columns is-centered is-vcentered">
      <div v-if="!$auth.user.email_verified" class="text-center">
        <h2 class="subtitle">
          Tenes que verificar to correo para poder continuar.
        </h2>
        <button class="button is-primary" @click="reload()">
          Ya lo verifiqué
        </button>
      </div>
      <div v-if="!showFollowingSteps">
        <UserTypeStep :step.sync="step" />
        <button
          class="button is-light"
          :class="submittingUserType ? 'is-loading' : ''"
          @click="next()"
        >
          Continuar
        </button>
      </div>
      <RegisterForm v-else />
    </div>
  </section>
</template>

<script>
import UserTypeStep from "../components/forms/register/UserTypeStep";
import RegisterForm from "../components/forms/RegisterForm";
export default {
  name: "register",
  components: { UserTypeStep, RegisterForm },
  data: () => ({
    showFollowingSteps: false,
    submittingUserType: false,
    step: {
      userType: ""
    }
  }),
  methods: {
    reload() {
      window.location.reload();
    },
    async next() {
      this.submittingUserType = true;
      try {
        if (this.step.userType) {
          // user type submit
          await this.$auth.updateUser(this.step);
          this.showFollowingSteps = true;
        }
      } catch (err) {
        console.error(err);
        alert("whoops");
      }
      this.submittingUserType = false;
    }
  },
  mounted() {
    this.step.userType = this.$auth.mongoUser.userType || "";
  }
};
</script>
