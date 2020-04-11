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
                  <!-- USER TYPE START -->

                  <div>
                    <!-- USER TYPE START -->
                    <div class="field">
                      <label class="label">Tipo de usuario</label>
                      <div class="control">
                        <div class="field">
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="isRefuge"
                              type="radio"
                              name="isRefuge"
                              value="refuge"
                              v-model="userType"
                            />
                            <label for="isRefuge">Refugio</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="isAdoptant"
                              type="radio"
                              name="isAdoptant"
                              value="adoptant"
                              v-model="userType"
                            />
                            <label for="isAdoptant">Adoptante</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="isVolunteer"
                              type="radio"
                              name="isVolunteer"
                              value="volunteer"
                              v-model="userType"
                            />
                            <label for="isVolunteer">Voluntario</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color is-primary"
                              id="isVet"
                              type="radio"
                              name="isVet"
                              value="vet"
                              v-model="userType"
                            />
                            <label for="isVet">Veterinaria</label>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  <!-- ACCOUNT FORM START -->

                  <div>
                    <!-- PERSONAL DATA START -->
                    <div class="field">
                      <label class="label">Datos personales</label>
                      <input
                        class="input"
                        type="text"
                        placeholder="Nombres"
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
                      <p class="help">Calle, altura, localidad, provincia.</p>
                    </div>

                    <div class="field">
                      <div class="field-body">
                        <div class="field is-expanded">
                          <div class="field has-addons">
                            <p class="control">
                              <a class="button is-static">
                                +54
                              </a>
                            </p>
                            <p class="control is-expanded">
                              <input
                                class="input"
                                type="tel"
                                placeholder="Teléfono fijo"
                              />
                            </p>
                          </div>
                          <p class="help">Sin guiones y sin el 0</p>
                        </div>
                      </div>
                    </div>

                    <div class="field">
                      <div class="field-body">
                        <div class="field is-expanded">
                          <div class="field has-addons">
                            <p class="control">
                              <a class="button is-static">
                                +54
                              </a>
                            </p>
                            <p class="control is-expanded">
                              <input
                                class="input"
                                type="tel"
                                placeholder="Teléfono celular"
                              />
                            </p>
                          </div>
                          <p class="help">Sin guiones y sin el 0</p>
                        </div>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- SOCIAL START -->
                    <div class="field">
                      <label class="label">Redes sociales</label>
                      <input
                        class="input"
                        type="text"
                        placeholder="Instagram"
                        v-model="instagram"
                      />
                    </div>
                    <div class="field">
                      <input
                        class="input"
                        type="text"
                        placeholder="Twitter"
                        v-model="twitter"
                      />
                    </div>
                    <div class="field">
                      <input
                        class="input"
                        type="text"
                        placeholder="Facebook"
                        v-model="facebook"
                      />
                    </div>
                    <div class="is-divider"></div>

                    <!-- SOCIAL END -->
                    <!-- PERSONAL DATA END -->
                    <div class="field">
                      <label class="label">¿Cómo podés ayudar?</label>
                      <div class="control">
                        <div class="field">
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color"
                              id="canAdopt"
                              type="checkbox"
                              name="canAdopt"
                              v-model="canAdopt"
                            />
                            <label for="canAdopt">Puedo adoptar</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color"
                              id="canTransit"
                              type="checkbox"
                              name="canTransit"
                              v-model="canTransit"
                            />
                            <label for="canTransit">Puedo dar tránsito</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color"
                              id="canTravel"
                              type="checkbox"
                              name="canTravel"
                              v-model="canTravel"
                            />
                            <label for="canTravel">Puedo hacer traslados</label>
                          </div>
                          <div class="field">
                            <input
                              class="is-checkradio has-background-color"
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
                currentStep == 3 ? 'is-active' : ''
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
                      <label class="label">Tipo de vivienda</label>
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
                      <label class="label">Protección en el edificio</label>
                      <input
                        class="is-checkradio has-background-color"
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
                              class="is-checkradio has-background-color"
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
                            min="0"
                            placeholder="¿Cuántos?"
                          />
                        </div>
                      </div>
                      <div class="control">
                        <div class="field">
                          <div class="field pt-6">
                            <input
                              class="is-checkradio has-background-color"
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
                            min="0"
                            placeholder="¿Cuántos?"
                          />
                        </div>
                      </div>
                      <div class="control">
                        <div class="field">
                          <div class="field pt-6">
                            <input
                              class="is-checkradio has-background-color"
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
                            min="0"
                            placeholder="¿Cuántos?"
                          />
                        </div>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- FAMILY END -->
                    <!-- SCHEDULE START -->
                    <div
                      class="field"
                      v-if="canAdopt || canTransit || canTravel || canHelp"
                    >
                      <label class="label">Disponibilidad para traslados</label>
                      <div class="control">
                        <div class="field">
                          <div class="field pt-3">
                            <input
                              class="is-checkradio has-background-color"
                              id="mon"
                              type="checkbox"
                              name="mon"
                              value="mon"
                              v-model="availability"
                            />
                            <label for="mon">Lunes</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="field pt-3">
                            <input
                              class="is-checkradio has-background-color"
                              id="tue"
                              type="checkbox"
                              name="tue"
                              value="tue"
                              v-model="availability"
                            />
                            <label for="tue">Martes</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="field pt-3">
                            <input
                              class="is-checkradio has-background-color"
                              id="wed"
                              type="checkbox"
                              name="wed"
                              value="wed"
                              v-model="availability"
                            />
                            <label for="wed">Miércoles</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="field pt-3">
                            <input
                              class="is-checkradio has-background-color"
                              id="thu"
                              type="checkbox"
                              name="thu"
                              value="thu"
                              v-model="availability"
                            />
                            <label for="thu">Jueves</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="field pt-3">
                            <input
                              class="is-checkradio has-background-color"
                              id="fri"
                              type="checkbox"
                              name="fri"
                              value="fri"
                              v-model="availability"
                            />
                            <label for="fri">Viernes</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="field pt-3">
                            <input
                              class="is-checkradio has-background-color"
                              id="sat"
                              type="checkbox"
                              name="sat"
                              value="sat"
                              v-model="availability"
                            />
                            <label for="sat">Sábado</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="field pt-3">
                            <input
                              class="is-checkradio has-background-color"
                              id="sun"
                              type="checkbox"
                              name="sun"
                              value="sun"
                              v-model="availability"
                            />
                            <label for="sun">Domingo</label>
                          </div>
                        </div>
                      </div>
                      <div class="is-divider"></div>
                    </div>
                    <!-- SCHEDULE END -->
                    <!-- EXPERIENCE START -->
                    <div
                      class="field"
                      v-if="canAdopt || canTransit || canTravel || canHelp"
                    >
                      <label class="label">Experiencia con animales</label>
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
                  <div>
                    ¡LISTO!
                  </div>
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
              >Anterior</a
            >
          </div>
          <div class="steps-action">
            <a
              class="button is-light"
              v-on:click="currentStep++"
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
    currentStep: 1,
    userType: "",
    mondayAvai: false,
    hasAdults: false,
    hasChildren: false,
    hasPets: false,
    instagram: "",
    twitter: "",
    facebook: "",
    availability: [],
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
