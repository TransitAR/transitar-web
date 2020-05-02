<template>
  <section class="container is-fullhd p-16">
    <div class="steps pt-6">
      <!-- progress -->

      <FormStepMarker
        v-for="(markerTitle, i) in stepMarkers"
        :key="markerTitle"
        :marker="markerTitle"
        :number="i + 1"
        :current-step="currentStep"
      />

      <!-- steps -->
      <div class="steps-content">
        <PersonalInfoStep
          v-if="currentStep === 1"
          :isActive="isActive(1)"
          :step.sync="form.personalInfoStep"
        />

        <UserSocialStep
          v-if="currentStep === 2"
          :isActive="isActive(2)"
          :step.sync="form.secondStep"
        />

        <UserHomeAndExperienceStep
          v-if="currentStep === 3"
          :isActive="isActive(3)"
          :step.sync="form.thirdStep"
          :showHouseInfo="showHouseInfo"
          :showExperience="showExperience"
          :showAvailability="showAvailability"
        />

        <LastStep v-if="currentStep === 4" :isActive="isActive(4)" />
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
            :class="{ 'is-loading': submittingStep }"
            v-on:click="next()"
            :disabled="currentStep == 4"
            >Siguiente</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PersonalInfoStep from "../forms/register/PersonalInfoStep";
import UserSocialStep from "../forms/register/UserSocialStep";
import UserHomeAndExperienceStep from "../forms/register/UserHomeAndExperienceStep";
// import VetInformationStep from "../forms/register/VetInformationStep";
import LastStep from "../forms/register/LastStep";
import FormStepMarker from "./FormStepMarker";

const stepMarkers = Object.assign([
  "Datos Personales",
  "Social",
  "Informacion Relevante",
  "Fin"
]);

// NO PUEDE ESTAR SI NO INICIO SESION (TODO: chequear por esto por las dudas)

export default {
  name: "register-form",
  components: {
    PersonalInfoStep,
    FormStepMarker,
    UserSocialStep,
    UserHomeAndExperienceStep,
    // VetInformationStep,
    LastStep
  },
  data: () => ({
    stepMarkers,
    currentStep: 1,
    submittingStep: false,
    form: {
      personalInfoStep: {
        name: "",
        lastName: "",
        address: "",
        dob: "",
        landlinePhone: "",
        mobilePhone: ""
      },
      secondStep: {
        instagram: "",
        twitter: "",
        facebook: "",
        alerts: false,

        // person
        canTravel: false,
        canAdopt: false,
        canTransit: false,
        canHelp: false
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
    },
    showAvailability() {
      return this.form.secondStep.canTravel;
    }
  },
  methods: {
    isActive(step) {
      return this.currentStep == step || this.currentStep > step;
    },
    prev() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    async next() {
      this.submittingStep = true;
      if (this.currentStep == 1) {
        // personal info submit
        const data = {
          name: this.form.personalInfoStep.name,
          lastName: this.form.personalInfoStep.lastName,
          address: this.form.personalInfoStep.address,
          dob: this.form.personalInfoStep.dob,
          landlinePhone: this.form.personalInfoStep.landlinePhone,
          mobilePhone: this.form.personalInfoStep.mobilePhone
        };
        await this.$auth.updateUser(data);
      } else if (this.currentStep == 2) {
        // etc
      }
      if (this.currentStep < 4) {
        this.currentStep++;
      }
      this.submittingStep = false;
    }
  },
  mounted() {
    const userKeys = Object.keys(this.$auth.mongoUser);

    const personalInfoStepKeys = Object.keys(this.form.personalInfoStep);

    userKeys.forEach(key => {
      const val = this.$auth.mongoUser[key];
      if (val != null && typeof val === "object") {
        Object.keys(val).forEach(k => {
          const v = val[k];
          if (personalInfoStepKeys.includes(k)) {
            this.form.personalInfoStep[k] = v;
          }
        });
      }
      if (personalInfoStepKeys.includes(key)) {
        this.form.personalInfoStep[key] = val;
      }
    });
  }
};
</script>
