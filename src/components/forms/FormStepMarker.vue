<template>
  <div
    class="step-item is-primary"
    :class="{
      'is-active': isActive(number),
      'is-completed': isCompleted(number)
    }"
  >
    <div class="step-marker">{{ number }}</div>
    <div class="step-details">
      <p class="step-title">{{ marker }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormStepMarker",
  props: {
    marker: String,
    number: Number,
    currentStep: Number
  },
  methods: {
    isActive(step) {
      return step <= this.currentStep;
    },
    isCompleted(step) {
      return step < this.currentStep;
    }
  }
};
</script>
