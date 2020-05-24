<template>
  <div v-if="loading" class="flex justify-center mt-12">
    <Spinner size="5rem" />
  </div>
  <RefugeProfileView v-else-if="refuge" read-only :refuge="refuge" />
  <pre v-else class="flex justify-center mt-12 text-center">
    <span>404 el Refugio <strong class="mx-1">{{ identifier }}</strong> no fue
    encontrado</span>
  </pre>
</template>

<script>
import Spinner from "@/components/Spinner";
import RefugeProfileView from "@/components/profiles/RefugeProfile/RefugeProfileView";
import { getRefuge } from "@/utils/http";

export default {
  name: "Refuge",
  components: {
    Spinner,
    RefugeProfileView
  },
  data: () => ({
    loading: false,
    refuge: null
  }),
  computed: {
    identifier() {
      return this.$route.params.identifier;
    }
  },
  async mounted() {
    this.loading = true;
    try {
      const { data: refuge } = await getRefuge(this.identifier);
      this.refuge = refuge;
    } catch (error) {
      console.warn(`There was an error getting the Refuge ${this.identifier}`);
    }
    this.loading = false;
  }
};
</script>
