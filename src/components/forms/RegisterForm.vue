<template>
  <section class="container is-fullhd p-16">
    <div class="container mt-8">
      <div v-if="!$auth.user.email_verified" class="text-center">
        <h2 class="subtitle">
          Tenes que verificar to correo para poder continuar.
        </h2>
        <button class="button is-primary" @click="reload()">
          Ya lo verifiqué
        </button>
      </div>
      <div v-else class="steps pt-6">
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
            <p class="step-title">Tipo de usuario</p>
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
            <p class="step-title">Datos personales</p>
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
            <p class="step-title">Social</p>
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
            <p class="step-title">Información relevante</p>
          </div>
        </div>
        <div
          :class="
            `step-item is-primary ${isHighlighted(5) ? 'is-active' : ''} ${
              isCompleted(5) ? 'is-completed' : ''
            }`
          "
        >
          <div class="step-marker">5</div>
          <div class="step-details">
            <p class="step-title">Fin</p>
          </div>
        </div>

        <!-- steps -->
        <div class="steps-content">
          <UserTypeStep
            v-if="currentStep === 1"
            :isActive="isActive(1)"
            :step.sync="form.userTypeStep"
          />

          <PersonalInfoStep
            v-if="currentStep === 2"
            :isActive="isActive(2)"
            :step.sync="form.personalInfoStep"
          />

          <!-- <VetInformationStep
            v-if="currentStep === 2"
            :isActive="isActive(2)"
            :step.sync="form.secondStep"
          /> -->

          <UserSocialStep
            v-if="currentStep === 3"
            :isActive="isActive(3)"
            :step.sync="form.secondStep"
          />

          <UserHomeAndExperienceStep
            v-if="currentStep === 4"
            :isActive="isActive(4)"
            :step.sync="form.thirdStep"
            :showHouseInfo="showHouseInfo"
            :showExperience="showExperience"
            :showAvailability="showAvailability"
          />

          <LastStep v-if="currentStep === 5" :isActive="isActive(5)" />
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
              :class="`button is-light ${submittingStep ? 'is-loading' : ''}`"
              v-on:click="next()"
              :disabled="currentStep == 5"
              >Siguiente</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserTypeStep from "../forms/register/UserTypeStep";
import PersonalInfoStep from "../forms/register/PersonalInfoStep";
import UserSocialStep from "../forms/register/UserSocialStep";
import UserHomeAndExperienceStep from "../forms/register/UserHomeAndExperienceStep";
// import VetInformationStep from "../forms/register/VetInformationStep";
import LastStep from "../forms/register/LastStep";

// NO PUEDE ESTAR SI NO INICIO SESION (TODO: chequear por esto por las dudas)

export default {
  name: "register-form",
  components: {
    UserTypeStep,
    PersonalInfoStep,
    UserSocialStep,
    UserHomeAndExperienceStep,
    // VetInformationStep,
    LastStep
  },
  data: () => ({
    currentStep: 1,
    submittingStep: false,
    form: {
      userTypeStep: {
        userType: ""
      },
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
    reload() {
      window.location.reload();
    },
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
    async next() {
      this.submittingStep = true;
      if (this.currentStep == 1) {
        // user type submit
        const { userType } = this.form.userTypeStep;
        const data = {
          userType
        };
        await this.$auth.updateUser(data);
      } else if (this.currentStep == 2) {
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
      }
      if (this.currentStep < 5) {
        this.currentStep++;
      }
      this.submittingStep = false;
    }
  },
  mounted() {
    const userKeys = Object.keys(this.$auth.mongoUser);
    const userTypeStepKeys = Object.keys(this.form.userTypeStep);

    const personalInfoStepKeys = Object.keys(this.form.personalInfoStep);

    userKeys.forEach(key => {
      const val = this.$auth.mongoUser[key];
      if (val != null && typeof val === "object") {
        Object.keys(val).forEach(k => {
          const v = val[k];
          if (userTypeStepKeys.includes(k)) {
            this.form.userTypeStep[k] = v;
          }
          if (personalInfoStepKeys.includes(k)) {
            this.form.personalInfoStep[k] = v;
          }
        });
      }
      if (userTypeStepKeys.includes(key)) {
        this.form.userTypeStep[key] = val;
      }
      if (personalInfoStepKeys.includes(key)) {
        this.form.personalInfoStep[key] = val;
      }
    });
  }
};
</script>
