<template>
  <section class="steps pt-6">
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
        :step.sync="form.personalInfo"
      />

      <template v-if="currentStep === 2">
        <RelevantInfoPersonStep
          v-if="isPerson"
          :user-type="userType"
          :step.sync="form.relevantInfoPerson"
        />

        <RelevantInfoOrganizationStep
          v-if="isOrganization"
          :user-type="userType"
          :step.sync="form.relevantInfoOrganization"
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
  </section>
</template>

<script>
import { UserFormHelper } from "../../utils/forms";
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
    currentStep: 1,
    submittingStep: false,
    form: UserFormHelper.getCleanForm()
  }),
  computed: {
    isPerson() {
      return (
        this.userType === "volunteer" ||
        this.userType === "adoptant" ||
        this.userType === "founder"
      );
    },
    isOrganization() {
      return this.userType === "refuge" || this.userType === "vet";
    },
    isRefuge() {
      return this.userType === "refuge";
    },
    isVet() {
      return this.userType === "vet";
    },
    stepMarkers() {
      const map = {
        volunteer: "Voluntario",
        adoptant: "Adoptante",
        refuge: "del Refugio",
        vet: "de la Clinica Veterinaria",
        founder: "del Fundador"
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
        await UserFormHelper.submitPersonalInfo(this.form.personalInfo);
      } else if (this.currentStep == 2) {
        if (this.isRefuge) {
          await UserFormHelper.submitRelevantInfoRefuge(
            this.form.relevantInfoOrganization
          );
        } else if (this.isVet) {
          await UserFormHelper.submitRelevantInfoVet(
            this.form.relevantInfoOrganization
          );
        } else if (this.isPerson) {
          await UserFormHelper.submitRelevantInfoPerson(
            this.form.relevantInfoPerson
          );
        }
      }
      if (this.currentStep < 3) {
        this.currentStep++;
      }
      this.submittingStep = false;
    }
  },
  mounted() {
    this.form = UserFormHelper.getPopulatedForm(
      this.$auth.mongoUser,
      this.userType
    );
  }
};
</script>
