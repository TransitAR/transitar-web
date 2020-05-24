<template>
  <div>
    <RefugeProfileEdit v-if="isEditing" @finish-edit="finishEdit" />
    <RefugeProfileView v-else @start-edit="startEdit" />
  </div>
</template>

<script>
import RefugeProfileView from "./RefugeProfileView";
import RefugeProfileEdit from "./RefugeProfileEdit";

export default {
  name: "RefugeProfileContainer",
  components: {
    RefugeProfileView,
    RefugeProfileEdit
  },
  data: () => ({
    isEditing: false
  }),
  methods: {
    startEdit() {
      this.isEditing = true;
      this.scrollToTop();
    },
    finishEdit() {
      this.isEditing = false;
      this.scrollToTop();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
