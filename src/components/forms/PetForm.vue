<template>
  <section class="container is-fullhd p-16">
    <div class="container mt-8">
      <div class="steps pt-6" id="stepsDemo">
        <div
          :class="
            `step-item is-primary ${isActive(1) ? 'is-active' : ''} ${
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
            `step-item is-primary ${isActive(2) ? 'is-active' : ''} ${
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
            `step-item is-primary ${isActive(3) ? 'is-active' : ''} ${
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
            `step-item is-primary ${isActive(4) ? 'is-active' : ''} ${
              isCompleted(4) ? 'is-completed' : ''
            }`
          "
        >
          <div class="step-marker">4</div>
          <div class="step-details">
            <p class="step-title">Fin</p>
          </div>
        </div>
        <div class="steps-content">
          <div
            :class="
              `step-content has-text-centered is-primary ${
                currentStep == 1 ? 'is-active' : ''
              }`
            "
          >
            <div class="hero-body">
              <div class="columns is-centered">
                <div class="column is-half">
                  <div>
                    <!-- ANIMAL TYPE START -->
                    <div class="field">
                      <label class="label pb-3">Tipo de animal</label>
                      <div class="control">
                        <div class="field">
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="isCat"
                              type="radio"
                              name="isCat"
                              value="cat"
                              v-model="animalType"
                            />
                            <label for="isCat">Gato</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="isDog"
                              type="radio"
                              name="isDog"
                              value="dog"
                              v-model="animalType"
                            />
                            <label for="isDog">Perro</label>
                          </div>
                        </div>
                        <div class="is-divider"></div>
                      </div>
                    </div>
                    <!-- ANIMAL TYPE END -->
                    <!-- ANIMAL SEX START -->
                    <div class="field">
                      <label class="label pb-3">Sexo</label>
                      <div class="control">
                        <div class="field">
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="isMale"
                              type="radio"
                              name="isMale"
                              value="male"
                              v-model="animalSex"
                            />
                            <label for="isMale">Macho</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="isFemale"
                              type="radio"
                              name="isFemale"
                              value="female"
                              v-model="animalSex"
                            />
                            <label for="isFemale">Hembra</label>
                          </div>
                        </div>
                        <div class="is-divider"></div>
                      </div>
                    </div>
                    <!-- ANIMAL SEX END -->
                    <!-- NAME ETC START -->
                    <div class="field">
                      <label class="label pb-3">Datos del animal</label>
                      <input
                        class="input"
                        type="text"
                        placeholder="Nombre"
                        v-model="name"
                      />
                    </div>

                    <div class="field">
                      <input
                        class="input"
                        type="number"
                        min="0"
                        placeholder="Años"
                        v-model="age"
                      />
                    </div>
                    <div class="field">
                      <input
                        class="input"
                        type="number"
                        min="0"
                        placeholder="Peso"
                        v-model="weight"
                      />
                    </div>

                    <div class="field is-grouped">
                      <p class="control is-expanded">
                        <input
                          class="input"
                          type="text"
                          placeholder="Seleccionar imagen"
                        />
                      </p>
                      <p class="control">
                        <a class="button is-primary">Buscar</a>
                      </p>
                    </div>
                    <div class="is-divider"></div>
                    <!-- NAME ETC END -->
                    <!-- SIZE START -->
                    <div class="field">
                      <label class="label">Tamaño</label>
                      <p class="help pb-6">
                        Seleccioná La opción que mejor se adapte
                      </p>
                      <div class="select">
                        <select
                          placeholder="Tipo de vivienda"
                          v-model="houseType"
                        >
                          <option v-for="size in petSizes" :key="size">{{
                            size
                          }}</option>
                        </select>
                      </div>
                    </div>

                    <!-- SIZE END -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            :class="
              `step-content has-text-centered is-primary ${
                currentStep == 2 ? 'is-active' : ''
              }`
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
                              v-model="hadDiseases"
                            />
                            <label for="hadDiseases"
                              >Ha tenido o tiene enfermedades</label
                            >
                          </div>
                          <textarea
                            v-if="hadDiseases"
                            class="textarea"
                            v-model="diseases"
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
                              v-model="hadSurgeries"
                            />
                            <label for="hadSurgeries">Ha tenido cirugías</label>
                          </div>
                          <textarea
                            v-if="hadSurgeries"
                            class="textarea"
                            v-model="surgeries"
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
                        v-model="sterilized"
                      />
                      <label for="sterilized">Está esterilizado</label>
                      <article
                        class="message is-primary mt-5"
                        v-if="!sterilized"
                      >
                        <div class="message-header">
                          <p>¡Atención!</p>
                        </div>
                        <div class="message-body">
                          Las esterilización de las mascotas es
                          <strong>fundamental</strong>, así evitamos camadas no
                          deseadas y posibles abandonos, entre todos podemos
                          mejorar la situación de nuestros amigos peludos.
                          Informate más <a>acá</a>.
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
                          v-for="vaccine in petVaccines"
                          :key="vaccine"
                        >
                          <a class="button">{{ vaccine }}</a>
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
                        <select
                          placeholder="Tipo de vivienda"
                          v-model="houseType"
                        >
                          <option v-for="food in foodTypes" :key="food">{{
                            food
                          }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="field pt-6">
                      <label class="label pb-3">Consistencia</label>
                      <div class="select">
                        <select
                          placeholder="Tipo de vivienda"
                          v-model="houseType"
                        >
                          <option
                            v-for="type in foodConsistencies"
                            :key="type"
                            >{{ type }}</option
                          >
                        </select>
                      </div>
                    </div>
                    <!-- FOOD TYPE END -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            :class="
              `step-content has-text-centered is-primary ${
                currentStep == 3 ? 'is-active' : ''
              }`
            "
          >
            <div class="hero-body">
              <div class="columns is-centered">
                <div class="column is-half">
                  <!-- DESCRIPTION START -->
                  <div class="field">
                    <label class="label pb-3">Descripción</label>
                    <div class="control">
                      <textarea
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
                      <p
                        class="control"
                        v-for="trait in petTraits"
                        :key="trait"
                      >
                        <a class="button">{{ trait }}</a>
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
                        v-for="item in perfectFamily"
                        :key="item"
                      >
                        <a class="button">{{ item }}</a>
                      </p>
                    </div>
                  </div>
                  <!-- FAMILY END -->
                </div>
              </div>
            </div>
          </div>

          <div
            :class="
              `step-content has-text-centered is-primary ${
                currentStep == 4 ? 'is-active' : ''
              }`
            "
          >
            <div class="hero-body">
              <div class="columns is-centered">
                <div class="column is-half">
                  <!-- END -->
                  ¡LISTO!
                </div>
              </div>
            </div>
          </div>
        </div>
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
/*
import FirstStep from "../components/forms/register/pet/FirstStep";
import SecondStep from "../components/forms/register/pet/SecondStep";
import ThirdStep from "../components/forms/register/pet/ThirdStep";
import FourthStep from "../components/forms/register/pet/FourthStep";*/
export default {
  name: "pet-form",
  components: {},
  data: () => ({
    petSizes: ["Pequeño", "Mediano", "Grande"],
    petTraits: [
      "Tranquilo",
      "Inquieto",
      "Miedoso",
      "Arisco",
      "Cariñoso",
      "Amigable",
      "Hablador"
    ],
    petVaccines: [
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
    foodConsistencies: ["Sólida", "Húmeda", "Líquida", "No sé"],
    perfectFamily: [
      "Todos",
      "Bebés",
      "Niños",
      "Adultos",
      "Adultos mayores",
      "Perros",
      "Gatos",
      "No sé"
    ],
    currentStep: 1,
    hadDiseases: false,
    hadSurgeries: false,
    animalType: null,
    animalSex: null,
    surgeries: "",
    description: "",
    petType: "",
    name: "",
    photo: "",
    age: null,
    weight: null,
    size: null,
    traits: [],
    diseases: [],
    sterilized: false,
    vaccines: [],
    Food: ""
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
