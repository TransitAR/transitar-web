<template>
  <section class="container is-fullhd">
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
          :step.sync="form.personalInfoStep"
        />

        <template v-if="currentStep === 2">
          <RelevantInfoPersonStep
            v-if="isPerson"
            :user-type="userType"
            :step.sync="form.relevantInfoPersonStep"
          />

          <RelevantInfoOrganizationStep
            v-if="isOrganization"
            :user-type="userType"
            :step.sync="form.relevantInfoOrganizationStep"
          />
        </template>

        <LastStep v-if="currentStep === 3" :isActive="isActive(4)" />
      </div>

      <!-- actions -->
      <div class="steps-actions">
        <div class="steps-action">
          <a class="button is-light" v-on:click="prev()">Anterior</a>
        </div>
        <div class="steps-action">
          <a
            class="button is-light"
            :class="{ 'is-loading': submittingStep }"
            v-on:click="next()"
            :disabled="currentStep == 3"
            >Siguiente</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PersonalInfoStep from "../forms/register/PersonalInfoStep";
import RelevantInfoPersonStep from "../forms/register/RelevantInfoPersonStep";
import RelevantInfoOrganizationStep from "../forms/register/RelevantInfoOrganizationStep";
import LastStep from "../forms/LastStep";
import FormStepMarker from "./FormStepMarker";

export default {
  name: "register-form",
  components: {
    FormStepMarker,
    PersonalInfoStep,
    RelevantInfoPersonStep,
    RelevantInfoOrganizationStep,
    LastStep
  },
  props: {
    userType: String
  },
  data: () => ({
    currentStep: 2,
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
      relevantInfoPersonStep: {
        canTravel: false,
        canAdopt: false,
        canTransit: false,
        canHelp: false,
        houseType: "",
        hoursAway: "8-",
        houseProtection: false,
        hasAdults: false,
        adults: "",
        hasChildren: false,
        children: "",
        hasPets: false,
        otherPets: "",
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
      },
      relevantInfoOrganizationStep: {
        showInMap: false,
        displayName: "",
        specialization: ""
      }
    }
  }),
  computed: {
    isPerson() {
      return this.userType === "volunteer" || this.userType === "adoptant";
    },
    isOrganization() {
      return this.userType === "refuge" || this.userType === "vet";
    },
    stepMarkers() {
      const map = {
        volunteer: "Voluntario",
        adoptant: "Adoptante",
        refuge: "del Refugio",
        vet: "de la Clinica Veterinaria"
      };
      return ["Datos Personales", `Informacion ${map[this.userType]}`, "Fin"];
    }
  },
  methods: {
    isActive(step) {
      return this.currentStep == step || this.currentStep > step;
    },
    prev() {
      if (this.currentStep == 1) {
        this.$emit("change-user-type");
      } else if (this.currentStep > 1) {
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
        const data = {};
        await this.$auth.updateUser(data);
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
