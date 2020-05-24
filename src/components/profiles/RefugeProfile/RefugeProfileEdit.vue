<template>
  <section class="container relative">
    <div class="my-16 md:my-24 pt-8 px-4 pb-16 card">
      <div class="ml-6">
        <button class="button mb-8" @click="goBack()">
          Volver
          <font-awesome-icon icon="pencil-alt" class="ml-2" />
        </button>
      </div>
      <h1 class="title ml-6 md:text-center">
        Editar Refugio
      </h1>
      <div class="px-6 py-2 md:hidden">
        <SelectField
          narrow
          label="Ajustes"
          sublabel="Selecciona lo que te gustaría editar"
          :options="sections"
          v-model="currentSection"
        />
      </div>
      <div class="hidden md:block my-16">
        <TabsField boxed :tabs="sections" v-model="currentSection" />
      </div>
      <hr class="md:hidden mb-8" />
      <div v-if="showPersonalInfo" class="flex flex-col">
        <PersonalInfoStep narrow :step.sync="form.personalInfo" />
        <button
          class="button is-primary ml-auto mr-6"
          :class="{ 'is-loading': saving }"
          @click="savePersonalInfo"
        >
          Guardar
        </button>
      </div>
      <div v-if="showRelevantInfo" class="flex flex-col">
        <RelevantInfoOrganizationStep
          narrow
          :step.sync="form.relevantInfoOrganization"
          :user-type="user.userType"
        />
        <button
          class="button is-primary ml-auto mr-6"
          :class="{ 'is-loading': saving }"
          @click="saveRelevantInfo"
        >
          Guardar
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import SelectField from "@/components/inputs/SelectField";
import TabsField from "@/components/inputs/TabsField";
import PersonalInfoStep from "@/components/forms/register/PersonalInfoStep";
import RelevantInfoOrganizationStep from "@/components/forms/register/RelevantInfoOrganizationStep";
import { UserFormHelper } from "@/utils/forms";

const sections = Object.freeze([
  "Informacion Personal",
  "Informacion del Refugio"
]);

export default {
  name: "RefugeProfileEdit",
  components: {
    SelectField,
    TabsField,
    PersonalInfoStep,
    RelevantInfoOrganizationStep
  },
  data: () => ({
    sections,
    saving: false,
    currentSection: sections[0],
    form: UserFormHelper.getCleanForm()
  }),
  computed: {
    user() {
      return this.$auth.mongoUser;
    },
    isRefuge() {
      return this.user.userType === "refuge";
    },
    isVet() {
      return this.user.userType === "vet";
    },
    showPersonalInfo() {
      return this.currentSection === this.sections[0];
    },
    showRelevantInfo() {
      return this.currentSection === this.sections[1];
    }
  },
  methods: {
    async savePersonalInfo() {
      this.saving = true;
      await UserFormHelper.submitPersonalInfo(this.form.personalInfo);
      this.saving = false;
    },
    async saveRelevantInfo() {
      this.saving = true;
      if (this.isRefuge) {
        await UserFormHelper.submitRelevantInfoRefuge(
          this.form.relevantInfoOrganization
        );
      } else if (this.isVet) {
        await UserFormHelper.submitRelevantInfoVet(
          this.form.relevantInfoOrganization
        );
      } else {
        console.warn(`The user type is invalid ${this.user.userType}`);
      }
      this.saving = false;
    },
    selectSection(section) {
      this.currentSection = section;
    },
    goBack() {
      this.$emit("finish-edit");
    }
  },
  mounted() {
    this.form = UserFormHelper.getPopulatedForm(
      this.$auth.mongoUser,
      this.user.userType
    );
  }
};
</script>
