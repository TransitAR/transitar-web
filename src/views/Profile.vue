<template>
  <div>
    <RefugeProfile v-if="isRefuge" />
    <PersonProfile v-else-if="isAdoptant || isVolunteer" />
    <div v-else>¡Algo salió mal!</div>
  </div>
</template>

<script>
import RefugeProfile from "@/components/profiles/RefugeProfile";
import PersonProfile from "@/components/profiles/PersonProfile";

export default {
  name: "Profile",
  components: {
    RefugeProfile,
    PersonProfile
  },
  computed: {
    user() {
      return this.$auth.mongoUser;
    },
    isRefuge() {
      return this.user.userType === "refuge";
    },
    isVet() {
      return this.user.userType === "vet";
    },
    isVolunteer() {
      return this.user.userType === "volunteer";
    },
    isAdoptant() {
      return this.user.userType === "adoptant";
    }
  }
};
</script>
