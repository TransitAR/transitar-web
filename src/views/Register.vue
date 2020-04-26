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
      <RegisterForm v-else />
    </div>
  </section>
</template>

<script>
import RegisterForm from "../components/forms/RegisterForm";
export default {
  name: "register",
  components: { RegisterForm },
  methods: {
    reload() {
      window.location.reload();
    }
  }
};
</script>
