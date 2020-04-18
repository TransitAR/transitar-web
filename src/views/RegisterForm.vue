<template>
  <section class="container is-fullhd p-16">
    <div class="container mt-8">
      <div class="steps pt-6">
        <!-- progress -->
        <div
          :class="`step-item is-primary ${isHighlighted(1) ? 'is-active' : ''}`"
        >
          <div class="step-marker">1</div>
          <div class="step-details">
            <p class="step-title">Paso 1</p>
          </div>
        </div>
        <div
          :class="`step-item is-primary ${isHighlighted(2) ? 'is-active' : ''}`"
        >
          <div class="step-marker">2</div>
          <div class="step-details">
            <p class="step-title">Paso 2</p>
          </div>
        </div>
        <div
          :class="`step-item is-primary ${isHighlighted(3) ? 'is-active' : ''}`"
        >
          <div class="step-marker">3</div>
          <div class="step-details">
            <p class="step-title">Paso 3</p>
          </div>
        </div>
        <div
          :class="`step-item is-primary ${isHighlighted(4) ? 'is-active' : ''}`"
        >
          <div class="step-marker">4</div>
          <div class="step-details">
            <p class="step-title">Paso 4</p>
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
            :showHouseInfo="showHouseInfo"
            :showExperience="showExperience"
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
import { updateUser } from "../utils/http";
import FirstStep from "../components/forms/register/FirstStep";
import SecondStep from "../components/forms/register/SecondStep";
import ThirdStep from "../components/forms/register/ThirdStep";
import FourthStep from "../components/forms/register/FourthStep";

export default {
  name: "register-form",
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
        userType: ""
      },
      secondStep: {
        name: "",
        lastName: "",
        address: "",
        dob: "",
        landlinePhone: "",
        mobilePhone: "",
        instagram: "",
        twitter: "",
        facebook: "",
        canTravel: false,
        canAdopt: false,
        canTransit: false,
        canHelp: false,
        alerts: false
      },
      thirdStep: {
        houseType: null,
        hoursAway: "-8",
        houseProtection: false,
        hasAdults: false,
        adults: 0,
        hasChildren: false,
        children: 0,
        hasPets: false,
        otherPets: 0,
        availability: {
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false
        },
        experience: false,
        hasTransportBox: false
      }
    }
  }),
  computed: {
    showHouseInfo() {
      return this.form.secondStep.canAdopt || this.form.secondStep.canTransit;
    },
    showExperience() {
      return (
        this.form.secondStep.canAdopt ||
        this.form.secondStep.canTransit ||
        this.form.secondStep.canTravel ||
        this.form.secondStep.canHelp
      );
    }
  },
  methods: {
    isActive(step) {
      return this.currentStep == step || this.currentStep > step;
    },
    isHighlighted(step) {
      return step <= this.currentStep;
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
