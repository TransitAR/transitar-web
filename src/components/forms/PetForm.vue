<template>
  <section class="container is-fullhd p-16">
    <div class="container mt-8">
      <div class="steps pt-6" id="stepsDemo">
        <div :class="`step-item is-primary ${isActive(1) ? 'is-active' : ''}`">
          <div class="step-marker">1</div>
          <div class="step-details">
            <p class="step-title">Paso 1</p>
          </div>
        </div>
        <div :class="`step-item is-primary ${isActive(2) ? 'is-active' : ''}`">
          <div class="step-marker">2</div>
          <div class="step-details">
            <p class="step-title">Paso 2</p>
          </div>
        </div>
        <div :class="`step-item is-primary ${isActive(3) ? 'is-active' : ''}`">
          <div class="step-marker">3</div>
          <div class="step-details">
            <p class="step-title">Paso 3</p>
          </div>
        </div>
        <div :class="`step-item is-primary ${isActive(4) ? 'is-active' : ''}`">
          <div class="step-marker">4</div>
          <div class="step-details">
            <p class="step-title">Paso 4</p>
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
                      <label class="label">Tipo de animal</label>
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
                            <label for="isDog">Adoptante</label>
                          </div>
                        </div>
                        <div class="is-divider"></div>
                      </div>
                    </div>
                    <!-- ANIMAL TYPE END -->
                    <!-- NAME ETC START -->
                    <div class="field">
                      <label class="label">Datos del animal</label>
                      <input class="input" type="text" placeholder="Nombre" v-model="name" />
                    </div>

                    <div class="field">
                      <input class="input" type="number" min="0" placeholder="Años" v-model="age" />
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
                        <input class="input" type="text" placeholder="Seleccionar imagen" />
                      </p>
                      <p class="control">
                        <a class="button is-info">Buscar</a>
                      </p>
                    </div>
                    <div class="is-divider"></div>
                    <!-- NAME ETC END -->
                    <!-- SIZE START -->
                    <div class="field">
                      <label class="label">Tamaño</label>
                      <div class="select">
                        <select placeholder="Tipo de vivienda" v-model="houseType">
                          <option>Pequeño</option>
                          <option>Mediano</option>
                          <option>Grande</option>
                        </select>
                      </div>
                      <div class="is-divider"></div>
                    </div>

                    <!-- SIZE END -->
                    <!-- PERSONALITY START -->
                    <div class="field">
                      <label class="label">Personalidad</label>
                      <div class="field is-grouped is-grouped-multiline">
                        <p class="control">
                          <a class="button">One</a>
                        </p>
                        <p class="control">
                          <a class="button">Two</a>
                        </p>
                        <p class="control">
                          <a class="button">Three</a>
                        </p>
                        <p class="control">
                          <a class="button">Four</a>
                        </p>
                        <p class="control">
                          <a class="button">Five</a>
                        </p>
                        <p class="control">
                          <a class="button">Size</a>
                        </p>
                        <p class="control">
                          <a class="button">Seven</a>
                        </p>
                        <p class="control">
                          <a class="button">Eight</a>
                        </p>
                        <p class="control">
                          <a class="button">Nine</a>
                        </p>
                        <p class="control">
                          <a class="button">Ten</a>
                        </p>
                        <p class="control">
                          <a class="button">Eleven</a>
                        </p>
                        <p class="control">
                          <a class="button">Twelve</a>
                        </p>
                        <p class="control">
                          <a class="button">Thirteen</a>
                        </p>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- PERSONALITY END -->
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
                      <div class="control">
                        <div class="field">
                          <div class="field pt-6">
                            <input
                              class="is-checkradio has-background-color"
                              id="hadDiseases"
                              type="checkbox"
                              name="hadDiseases"
                              v-model="hadDiseases"
                            />
                            <label for="hadDiseases">Ha tenido o tiene enfermedades</label>
                          </div>
                          <textarea
                            v-if="hadDiseases"
                            class="textarea"
                            v-model="diseases"
                            placeholder="¿Cuáles?"
                          ></textarea>
                        </div>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- FAMILY END -->
                    <!-- REPRODUCTIVE DATA START -->
                    <div class="field">
                      <label class="label">Esterilización</label>
                      <input
                        class="is-checkradio has-background-color"
                        id="sterilized"
                        type="checkbox"
                        name="sterilized"
                        v-model="sterilized"
                      />
                      <label for="sterilized">Esterilizado</label>
                      <article class="message is-primary mt-5" v-if="!sterilized">
                        <div class="message-header">
                          <p>¡Atención!</p>
                        </div>
                        <div class="message-body">
                          Las esterilización de las mascotas es
                          <strong>muy importante</strong>, conocé más
                          <a>acá</a>.
                        </div>
                      </article>
                      <div class="is-divider"></div>
                    </div>
                    <!-- REPRODUCTIVE DATA END -->
                    <!-- VACCINES START -->
                    <div class="field">
                      <label class="label">Vaccines</label>
                      <div class="field is-grouped is-grouped-multiline">
                        <p class="control">
                          <a class="button">One</a>
                        </p>
                        <p class="control">
                          <a class="button">Two</a>
                        </p>
                        <p class="control">
                          <a class="button">Three</a>
                        </p>
                        <p class="control">
                          <a class="button">Four</a>
                        </p>
                        <p class="control">
                          <a class="button">Five</a>
                        </p>
                        <p class="control">
                          <a class="button">Size</a>
                        </p>
                        <p class="control">
                          <a class="button">Seven</a>
                        </p>
                        <p class="control">
                          <a class="button">Eight</a>
                        </p>
                        <p class="control">
                          <a class="button">Nine</a>
                        </p>
                        <p class="control">
                          <a class="button">Ten</a>
                        </p>
                        <p class="control">
                          <a class="button">Eleven</a>
                        </p>
                        <p class="control">
                          <a class="button">Twelve</a>
                        </p>
                        <p class="control">
                          <a class="button">Thirteen</a>
                        </p>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- VACCINES END -->
                    <!-- FOOD TYPE START -->
                    <div class="field">
                      <label class="label">Tipo de comida</label>
                      <div class="select">
                        <select placeholder="Tipo de vivienda" v-model="houseType">
                          <option>Normal</option>
                          <option>Urinary</option>
                          <option>Digestive</option>
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
                    <label class="label">Descripción</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Contanos brevemente la parte que conozcas sobre su historia.."
                      ></textarea>
                    </div>
                  </div>
                  <!-- DESCRIPTION END -->
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
              v-on:click="currentStep--"
              :disabled="currentStep == 1"
            >Anterior</a>
          </div>
          <div class="steps-action">
            <a
              class="button is-light"
              v-on:click="currentStep++"
              :disabled="currentStep == 4"
            >Siguiente</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/*
  name: string; DONE
  birthDate: Date; DONE
  canTravel: boolean; DONE
  canAdopt: boolean; DONE
  canTransit: boolean; DONE
  canHelp: boolean; DONE
  alerts: boolean; DONE
  experience: boolean; DONE
  adults: number; DONE
  children: number; DONE
  otherPets: number; DONE
  houseType: string; DONE
  houseProtection: boolean; DONE
  hoursAway: number; DONE
  mobility: boolean;
  travelsSchedule: ITravelsSchedule;
  mobilitySchedule: IMobilitySchedule;
  hasTransportBox: boolean; DONE
  address: string; DONE
  location: ILocation;
  pets: [string];
  createdAt: Date;
  */

export default {
  name: "pet-form",
  components: {},
  data: () => ({
    /*
      Animal
Dirección
Foto/s
Nombre
Tipo
Perro
Gato
Edad
Peso
Tamaño
Grande
Chico
Mediano
Personalidad
Se lleva bien con animales
Se lleva bien con personas
Agresivo
Activo
Enfermedades
Y/N
Esterilizado
Castrado
Vacunado
Tipo de comida
Apuntar a “dueño” actual
Apunta a DB Personas/Refugios

*/
    currentStep: 1,
    hadDiseases: false,
    animalType: null,
    description: "",
    petType: "",
    name: "",
    photo: "",
    age: null,
    weight: null,
    size: null,
    birthDate: null,
    traits: [],
    diseases: [],
    sterilized: false,
    vaccines: [],
    Food: ""
  }),
  methods: {
    isActive(step) {
      return this.currentStep == step || this.currentStep > step;
    }
  }
};
</script>
