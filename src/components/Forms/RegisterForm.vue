<template>
  <section class="section">
    <div class="columns is-4 is-variable">
      <div class="column is-half is-offset-one-quarter">
        <RegisterWizard />
      </div>
    </div>
  </section>
</template>

<script>
import RegisterWizard from "./RegisterWizard";
export default {
  name: "registerForm",
  components: {
    RegisterWizard
  }
};
</script>