<template>
  <div
    :class="
      `step-content has-text-centered is-primary ${isActive ? 'is-active' : ''}`
    "
  >
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <!-- DESCRIPTION START -->
          <div class="field">
            <label class="label">Descripción</label>
            <p class="help pb-6">
              Podrás editarla luego
            </p>
            <div class="control">
              <textarea
                @input="updateStep(keys.description, $event)"
                class="textarea"
                placeholder="Contanos brevemente la parte que conozcas sobre su historia..."
              ></textarea>
            </div>
            <div class="is-divider"></div>
          </div>
          <!-- DESCRIPTION END -->
          <!-- PERSONALITY START -->
          <div class="field">
            <label class="label">Personalidad</label>
            <p class="help pb-6">
              Seleccioná todas las que apliquen
            </p>
            <div class="field is-grouped is-grouped-multiline">
              <p class="control" v-for="trait in petTraitsOptions" :key="trait">
                <a
                  :class="{
                    button: true,
                    'is-rounded': true,
                    'is-primary': step.traits.includes(trait)
                  }"
                  @click="toggleMultiselectOption(keys.traits, trait)"
                  >{{ trait }}</a
                >
              </p>
            </div>
            <div class="is-divider"></div>
          </div>
          <!-- PERSONALITY END -->
          <!-- FAMILY START -->
          <div class="field">
            <label class="label">¿Con quién se lleva bien?</label>
            <p class="help pb-6">
              Seleccioná todas las que apliquen
            </p>
            <div class="field is-grouped is-grouped-multiline">
              <p
                class="control"
                v-for="familyOption in perfectFamilyOptions"
                :key="familyOption"
              >
                <a
                  :class="{
                    button: true,
                    'is-rounded': true,
                    'is-primary': step.perfectFamily.includes(familyOption)
                  }"
                  @click="
                    toggleMultiselectOption(keys.perfectFamily, familyOption)
                  "
                  >{{ familyOption }}</a
                >
              </p>
            </div>
          </div>
          <!-- FAMILY END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// keys to match exactly in RegisterForm
const keys = Object.freeze({
  description: "description",
  traits: "traits",
  perfectFamily: "perfectFamily"
});

const petTraitsOptions = Object.freeze([
  "Tranquilo",
  "Asustadizo",
  "Inquieto",
  "Miedoso",
  "Arisco",
  "Cariñoso",
  "Amigable",
  "Hablador",
  "Hogareño",
  "Salidor"
]);

const perfectFamilyOptions = Object.freeze([
  "Todos",
  "Bebés",
  "Niños",
  "Adultos",
  "Adultos mayores",
  "Perros",
  "Gatos",
  "No sé"
]);

export default {
  name: "ThirdStep",
  data: () => ({
    keys,
    petTraitsOptions,
    perfectFamilyOptions
  }),
  props: {
    isActive: Boolean,
    step: Object
  },
  methods: {
    updateStep(key, $event) {
      const value =
        $event.target.type === "checkbox"
          ? $event.target.checked
          : $event.target.value;
      this.$emit("update:step", {
        ...this.step,
        [key]: value
      });
    },
    toggleMultiselectOption(key, option) {
      if (this.step[key].includes(option)) {
        this.step[key] = this.step[key].filter(o => o != option);
      } else {
        this.step[key].push(option);
      }
    }
  }
};
</script>
