<template>
  <div>
    Loading...
  </div>
</template>

<script>
import { unsetToken } from "../utils/auth";

export default {
  name: "Logout",
  mounted() {
    const { returnTo } = this.$route.query;
    unsetToken();
    this.$store.commit("auth/logout");
    this.$router.push(returnTo || "/");
  }
};
</script>
