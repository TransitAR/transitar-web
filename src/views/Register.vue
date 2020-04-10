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
                  <!-- ACCOUNT FORM START -->
                  <div>
                    <div class="field">
                      <label class="label">Datos personales</label>
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
                        type="text"
                        placeholder="Apellido"
                        v-model="lastName"
                      />
                    </div>
                    <div class="field">
                      <input class="input" type="date" />
                    </div>
                    <div class="field">
                      <input
                        class="input"
                        type="text"
                        placeholder="Domicilio"
                        v-model="address"
                      />
                    </div>
                    <div class="is-divider"></div>
                    <div class="field">
                      <label class="label">¿Cómo podés ayudar?</label>
                      <div class="control">
                        <div class="field">
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="canAdopt"
                              type="checkbox"
                              name="canAdopt"
                              v-model="canAdopt"
                            />
                            <label for="canAdopt">Puedo adoptar</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="canTransit"
                              type="checkbox"
                              name="canTransit"
                              v-model="canTransit"
                            />
                            <label for="canTransit">Puedo dar tránsito</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="canTravel"
                              type="checkbox"
                              name="canTravel"
                              v-model="canTravel"
                            />
                            <label for="canTravel">Puedo hacer traslados</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="canHelp"
                              type="checkbox"
                              name="canHelp"
                              v-model="canHelp"
                            />
                            <label for="canHelp"
                              >Puedo ayudar ante emergencias cerca mío</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="is-divider"></div>
                    <div class="field">
                      <label class="label">Alertas</label>
                      <div class="control">
                        <input
                          id="switchExample"
                          type="checkbox"
                          name="switchExample"
                          class="switch"
                          v-model="alerts"
                        />
                        <label for="switchExample"
                          >Quiero recibir alertas sobre casos de riesgo
                          cercanos</label
                        >
                      </div>
                    </div>
                  </div>
                  <!-- ACCOUNT FORM END -->
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
                  <!-- HOME FORM START -->
                  <div>
                    <!-- TYPE START -->
                    <div class="field" v-if="canAdopt || canTransit">
                      <label class="label">Tipo</label>
                      <div class="select">
                        <select
                          placeholder="Tipo de vivienda"
                          v-model="houseType"
                        >
                          <option>Casa</option>
                          <option>Departamento</option>
                          <option>Quinta</option>
                        </select>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- TYPE END -->

                    <!-- HOURS AWAY START -->
                    <div class="field" v-if="canAdopt || canTransit">
                      <label class="label">Horas fuera de casa</label>

                      <div class="control">
                        <div class="field">
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="less-than-8"
                              type="radio"
                              name="less-than-8"
                              value="-8"
                              v-model="hoursAway"
                            />
                            <label for="less-than-8">Menos de 8</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="more-than-8"
                              type="radio"
                              name="more-than-8"
                              value="+8"
                              v-model="hoursAway"
                            />
                            <label for="more-than-8">Más de 8</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="more-than-8-op"
                              type="radio"
                              name="more-than-8-op"
                              value="+16"
                              v-model="hoursAway"
                            />
                            <label for="more-than-8-op"
                              >Más de 16, pero hay gente en casa</label
                            >
                          </div>
                        </div>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- HOURS AWAY END -->

                    <!-- PROTECTION START -->
                    <div class="field" v-if="canAdopt || canTransit">
                      <label class="label">Protección</label>
                      <input
                        class="is-checkradio has-background-color is-primary"
                        id="houseProtection"
                        type="checkbox"
                        name="houseProtection"
                        v-model="houseProtection"
                      />
                      <label for="houseProtection"
                        >Cuento con protección en balcones y/o medianeras</label
                      >
                      <article
                        class="message is-primary mt-5"
                        v-if="!houseProtection"
                      >
                        <div class="message-header">
                          <p>¡Atención!</p>
                        </div>
                        <div class="message-body">
                          Las protecciones en balcones y medianeras son
                          <strong
                            >muy importantes para evitar escapes y posibles
                            accidentes</strong
                          >, si no contás con protecciones podés ver los
                          servicios recomendados por miembros de la comunidad
                          <a>acá</a>.
                        </div>
                      </article>
                      <div class="is-divider"></div>
                    </div>

                    <!-- PROTECTION END -->

                    <!-- FAMILY START -->
                    <div class="field" v-if="canAdopt || canTransit">
                      <label class="label"
                        >Integrantes del grupo familiar</label
                      >
                      <div class="control">
                        <div class="field">
                          <div class="field pt-6">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="adults"
                              type="checkbox"
                              name="adults"
                              v-model="hasAdults"
                            />
                            <label for="adults"
                              >Hay más adultos en mi grupo familiar</label
                            >
                          </div>
                          <input
                            v-if="hasAdults"
                            class="input"
                            type="number"
                            v-model="adults"
                            placeholder="¿Cuántos?"
                          />
                        </div>
                      </div>
                      <div class="control">
                        <div class="field">
                          <div class="field pt-6">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="children"
                              type="checkbox"
                              name="children"
                              v-model="hasChildren"
                            />
                            <label for="children"
                              >Hay menores de 18 años en mi grupo
                              familiar</label
                            >
                          </div>
                          <input
                            v-if="hasChildren"
                            class="input"
                            type="number"
                            v-model="children"
                            placeholder="¿Cuántos?"
                          />
                        </div>
                      </div>
                      <div class="control">
                        <div class="field">
                          <div class="field pt-6">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="otherPets"
                              type="checkbox"
                              name="otherPets"
                              v-model="hasPets"
                            />
                            <label for="otherPets"
                              >Hay animales en mi grupo familiar</label
                            >
                          </div>
                          <input
                            v-if="hasPets"
                            class="input"
                            type="number"
                            v-model="otherPets"
                            placeholder="¿Cuántos?"
                          />
                        </div>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- FAMILY END -->

                    <!-- EXPERIENCE START -->
                    <div
                      class="field"
                      v-if="canAdopt || canTransit || canTravel || canHelp"
                    >
                      <label class="label">Experiencia</label>
                      <div class="control pt-6">
                        <input
                          id="experience"
                          type="checkbox"
                          name="experience"
                          class="switch"
                          v-model="experience"
                        />
                        <label for="experience"
                          >Tengo experiencia con perros y/o gatos</label
                        >
                      </div>
                      <div class="control pt-6">
                        <input
                          id="hasTransportBox"
                          type="checkbox"
                          name="hasTransportBox"
                          class="switch"
                          v-model="hasTransportBox"
                        />
                        <label for="hasTransportBox"
                          >Tengo caja transportadora o canil</label
                        >
                      </div>
                    </div>
                    <!-- EXPERIENCE END -->
                  </div>
                  <!-- HOME FORM END -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="steps-actions">
          <div class="steps-action">
            <a class="button is-light" v-on:click="currentStep--">Anterior</a>
          </div>
          <div class="steps-action">
            <a class="button is-light" v-on:click="currentStep++">Siguiente</a>
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
  name: "home",
  components: {},
  data: () => ({
    hasAdults: false,
    hasChildren: false,
    hasPets: false,
    currentStep: 1,
    name: "",
    lastName: "",
    birthDate: null,
    canTravel: false,
    canAdopt: false,
    canTransit: false,
    canHelp: false,
    alerts: false,
    experience: false,
    adults: 0,
    children: 0,
    otherPets: 0,
    houseType: null,
    houseProtection: false,
    hoursAway: -8,
    mobility: false,
    travelsSchedule: {},
    mobilitySchedule: {},
    hasTransportBox: false,
    address: ""
  }),
  methods: {
    isActive(step) {
      return this.currentStep == step || this.currentStep > step;
    }
  }
};
</script>
