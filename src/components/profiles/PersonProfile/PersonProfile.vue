<template>
  <section class="container relative">
    <div class="my-16 md:my-24 pt-8 px-8 pb-16 card">
      <div class="message md:w-1/2 mx-auto mt-5">
        <Message>
          <p>
            La informacion provista por vos solamente va a ser utilizada a la
            hora de contactarte con algun ente externo dentro de RefugiAR, como
            pueden ser Refugios o Veterinarias.
          </p>
          <p>
            <strong
              >Recorda que tu perfil es privado y solo lo vas a poder ver
              vos!</strong
            >
          </p>
        </Message>
      </div>
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
        <RelevantInfoPersonStep
          narrow
          :step.sync="form.relevantInfoPerson"
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
import RelevantInfoPersonStep from "@/components/forms/register/RelevantInfoPersonStep";
import Message from "@/components/Message";
import { UserFormHelper } from "@/utils/forms";

const sections = Object.freeze([
  "Informacion Personal",
  "Informacion Relevante"
]);

export default {
  name: "PersonProfile",
  components: {
    SelectField,
    TabsField,
    PersonalInfoStep,
    RelevantInfoPersonStep,
    Message
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
    info() {
      return this.user.personInfo;
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
      await UserFormHelper.submitRelevantInfoPerson(
        this.form.relevantInfoPerson
      );
      this.saving = false;
    },
    selectSection(section) {
      this.currentSection = section;
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
