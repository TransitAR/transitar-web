<template>
  <div
    class="spinner"
    :style="{
      height: size,
      width: size
    }"
  ></div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    size: {
      type: String,
      default: "1em"
    }
  }
};
</script>

<style lang="scss" scoped>
.spinner {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #00d1b2;
  border-radius: 100%;
  border-right-color: transparent;
  border-top-color: transparent;
  display: block;
}
</style>
