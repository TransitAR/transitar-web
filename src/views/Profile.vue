<template>
  <div>
    <RefugeProfile v-if="isRefuge" />
    <div v-else>Algo salió mal!</div>
  </div>
</template>

<script>
import RefugeProfile from "../components/profiles/RefugeProfile";

export default {
  name: "Profile",
  components: {
    RefugeProfile
  },
  computed: {
    user() {
      return this.$auth.mongoUser;
    },
    isRefuge() {
      return this.user.userType === "refuge";
    },
    isVolunteer() {
      return this.user.userType === "volunteer";
    },
    isAdoptant() {
      return this.user.userType === "adoptant";
    },
    isVet() {
      return this.user.userType === "vet";
    }
  }
};
</script>
