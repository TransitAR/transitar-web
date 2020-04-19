<template>
  <section class="container is-fullhd p-16">
    <div class="container mt-8">
      <div class="steps pt-6" id="stepsDemo">
        <!-- progress -->
        <div
          :class="
            `step-item is-primary ${isHighlighted(1) ? 'is-active' : ''} ${
              isCompleted(1) ? 'is-completed' : ''
            }`
          "
        >
          <div class="step-marker">1</div>
          <div class="step-details">
            <p class="step-title">Información del animal</p>
          </div>
        </div>
        <div
          :class="
            `step-item is-primary ${isHighlighted(2) ? 'is-active' : ''} ${
              isCompleted(2) ? 'is-completed' : ''
            }`
          "
        >
          <div class="step-marker">2</div>
          <div class="step-details">
            <p class="step-title">Salud</p>
          </div>
        </div>
        <div
          :class="
            `step-item is-primary ${isHighlighted(3) ? 'is-active' : ''} ${
              isCompleted(3) ? 'is-completed' : ''
            }`
          "
        >
          <div class="step-marker">3</div>
          <div class="step-details">
            <p class="step-title">Personalidad</p>
          </div>
        </div>
        <div
          :class="
            `step-item is-primary ${isHighlighted(4) ? 'is-active' : ''} ${
              isCompleted(4) ? 'is-completed' : ''
            }`
          "
        >
          <div class="step-marker">4</div>
          <div class="step-details">
            <p class="step-title">Fin</p>
          </div>
        </div>

        <!-- steps -->
        <div class="steps-content">
          <FirstStep
            v-if="currentStep === 1"
            :isActive="isActive(1)"
            :step.sync="form.firstStep"
          />

          <SecondStep
            v-if="currentStep === 2"
            :isActive="isActive(2)"
            :step.sync="form.secondStep"
          />

          <ThirdStep
            v-if="currentStep === 3"
            :isActive="isActive(3)"
            :step.sync="form.thirdStep"
          />

          <FourthStep v-if="currentStep === 4" :isActive="isActive(4)" />
        </div>
        <!-- actions -->
        <div class="steps-actions">
          <div class="steps-action">
            <a
              class="button is-light"
              v-on:click="prev()"
              :disabled="currentStep == 1"
              >Anterior</a
            >
          </div>
          <div class="steps-action">
            <a
              class="button is-light"
              v-on:click="next()"
              :disabled="currentStep == 4"
              >Siguiente</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FirstStep from "../../components/forms/register/pet/FirstStep";
import SecondStep from "../../components/forms/register/pet/SecondStep";
import ThirdStep from "../../components/forms/register/pet/ThirdStep";
import FourthStep from "../../components/forms/register/pet/FourthStep";
export default {
  name: "pet-form",
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep
  },
  data: () => ({
    currentStep: 1,
    form: {
      firstStep: {
        type: null,
        sex: null,
        name: "",
        age: null,
        weight: null,
        image: "",
        size: null
      },
      secondStep: {
        hadDiseases: false,
        hadSurgeries: false,
        surgeries: "",
        diseases: "",
        sterilized: false,
        vaccines: [],
        foodType: "",
        foodConsistencyType: ""
      },
      thirdStep: {
        description: "",
        traits: [],
        perfectFamily: []
      }
    }
  }),
  methods: {
    isActive(step) {
      return this.currentStep == step || this.currentStep > step;
    },
    isHighlighted(step) {
      return step <= this.currentStep;
    },
    isCompleted(step) {
      return step < this.currentStep;
    },
    prev() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    next() {
      if (this.currentStep < 4) {
        this.currentStep++;
      }
    }
  }
};
</script>
