<template>
  <div
    :class="
      `step-content has-text-centered is-primary ${isActive ? 'is-active' : ''}`
    "
  >
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <!-- HEALTH FORM START -->

          <div>
            <!-- FAMILY START -->
            <div class="field">
              <label class="label">Historial veterinario</label>
              <p class="help pb-6">
                Seleccioná todas las que apliquen
              </p>
              <div class="control">
                <div class="field">
                  <div class="field">
                    <input
                      class="is-checkradio has-background-color"
                      id="hadDiseases"
                      type="checkbox"
                      name="hadDiseases"
                      :checked="step.hadDiseases"
                      @input="updateStep(keys.hadDiseases, $event)"
                    />
                    <label for="hadDiseases"
                      >Ha tenido o tiene enfermedades</label
                    >
                  </div>
                  <textarea
                    v-if="step.hadDiseases"
                    class="textarea"
                    @input="updateStep(keys.diseases, $event)"
                    placeholder="¿Cuáles?"
                  ></textarea>
                </div>
                <div class="field">
                  <div class="field pt-6">
                    <input
                      class="is-checkradio has-background-color"
                      id="hadSurgeries"
                      type="checkbox"
                      name="hadSurgeries"
                      :checked="step.hadSurgeries"
                      @input="updateStep(keys.hadSurgeries, $event)"
                    />
                    <label for="hadSurgeries">Ha tenido cirugías</label>
                  </div>
                  <textarea
                    v-if="step.hadSurgeries"
                    class="textarea"
                    @input="updateStep(keys.surgeries, $event)"
                    placeholder="¿Cuáles?"
                  ></textarea>
                </div>
              </div>
              <div class="is-divider"></div>
            </div>
            <!-- FAMILY END -->
            <!-- REPRODUCTIVE DATA START -->
            <div class="field">
              <label class="label pb-3">Esterilización</label>
              <input
                class="is-checkradio has-background-color"
                id="sterilized"
                type="checkbox"
                name="sterilized"
                v-model="step.sterilized"
                @input="updateStep(keys.sterilized, $event)"
              />
              <label for="sterilized">Está esterilizado</label>
              <article class="message is-primary mt-5" v-if="!step.sterilized">
                <div class="message-header">
                  <p>¡Atención!</p>
                </div>
                <div class="message-body">
                  Las esterilización de las mascotas es
                  <strong>fundamental</strong>, así evitamos camadas no deseadas
                  y posibles abandonos, entre todos podemos mejorar la situación
                  de nuestros amigos peludos. Informate más <a>acá</a>.
                </div>
              </article>
              <div class="is-divider"></div>
            </div>
            <!-- REPRODUCTIVE DATA END -->
            <!-- VACCINES START -->
            <div class="field">
              <label class="label">Vacunas</label>
              <p class="help pb-6">
                Seleccioná todas las que apliquen
              </p>
              <div class="field is-grouped is-grouped-multiline">
                <p
                  class="control"
                  v-for="vaccine in vaccineOptions"
                  :key="vaccine"
                >
                  <a
                    :class="{
                      button: true,
                      'is-primary': step.vaccines.includes(vaccine)
                    }"
                    @click="toggleVaccine(vaccine)"
                    >{{ vaccine }}</a
                  >
                </p>
              </div>
              <div class="is-divider"></div>
            </div>
            <!-- VACCINES END -->
            <!-- FOOD TYPE START -->
            <div class="field">
              <label class="label">Tipo de comida</label>
              <p class="help pb-6">
                Seleccioná la opción que mejor se adapte
              </p>
              <div class="select">
                <select @input="updateStep(keys.foodType, $event)">
                  <option v-for="food in foodTypes" :key="food">{{
                    food
                  }}</option>
                </select>
              </div>
            </div>
            <div class="field pt-6">
              <label class="label pb-3">Consistencia</label>
              <div class="select">
                <select @input="updateStep(keys.foodConsistencyType, $event)">
                  <option v-for="type in foodConsistencies" :key="type">{{
                    type
                  }}</option>
                </select>
              </div>
            </div>
            <!-- FOOD TYPE END -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// keys to match exactly in RegisterForm
const keys = Object.freeze({
  hadDiseases: "hadDiseases",
  hadSurgeries: "hadSurgeries",
  surgeries: "surgeries",
  diseases: "diseases",
  sterilized: "sterilized",
  vaccines: "vaccines",
  foodType: "foodType",
  foodConsistencyType: "foodConsistencyType"
});

export default {
  name: "SecondStep",
  props: {
    isActive: Boolean,
    step: Object
  },
  data: () => ({
    keys,
    vaccineOptions: [
      "Moquillo canino",
      "Hepatitis infecciosa (Adenovirus)",
      "Parvovirus",
      "Rabia",
      "Leptospirosis",
      "Parainfluenza canina",
      "Coronavirus",
      "Trivalente",
      "Leucemia felina"
    ],
    foodTypes: [
      "Seleccionar",
      "Cachorros",
      "Madre y cachorros",
      "Geriátrica",
      "Transtorno Renal",
      "Transtorno hepático",
      "Transtorno urinario",
      "Fibra",
      "Gastrointestinal",
      "Light",
      "Castrados control de peso",
      "Hembra castrada",
      "Macho castrado",
      "Control de estress",
      "Control de saciedad",
      "Control de diabetes",
      "Control de obesidad",
      "Hipoalergénica",
      "Otro",
      "No sé"
    ],
    foodConsistencies: ["Seleccionar", "Sólida", "Húmeda", "Líquida", "No sé"]
  }),
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
    toggleVaccine(vaccine) {
      if (this.step.vaccines.includes(vaccine)) {
        this.step.vaccines = this.step.vaccines.filter(v => v != vaccine);
      } else {
        this.step.vaccines.push(vaccine);
      }
    }
  }
};
</script>
