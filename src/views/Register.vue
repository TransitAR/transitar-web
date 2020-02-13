<template>
  <section>
    <div class="container">
      <RegisterForm />
    </div>
  </section>
</template>

<script>
import RegisterForm from "../components/Forms/RegisterForm";

export default {
  name: "register",
  components: {
    RegisterForm
  }
};
</script>