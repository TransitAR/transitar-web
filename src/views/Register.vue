<template>
  <section class="container is-fullhd p-16">
    <div class="columns is-centered is-vcentered">
      <RegisterForm />
    </div>
  </section>
</template>

<script>
import RegisterForm from "../components/forms/RegisterForm";
export default {
  name: "register",
  components: { RegisterForm }
};
</script>
