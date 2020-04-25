<template>
  <div
    :class="
      `step-content has-text-centered is-primary ${isActive ? 'is-active' : ''}`
    "
  >
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-half">
          <!-- HOME FORM START -->
          <div>
            <!-- TYPE START -->
            <div class="field" v-if="showHouseInfo">
              <label class="label">Tipo de vivienda</label>
              <p class="help pb-6">
                Seleccioná la opción que mejor describa tu vivienda
              </p>
              <div class="select">
                <select
                  placeholder="Tipo de vivienda"
                  @input="updateStep(keys.houseType, $event)"
                  :value="step.houseType"
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
            <div class="field" v-if="showHouseInfo">
              <label class="label pb-3">Horas fuera de casa</label>

              <div class="control">
                <div class="field">
                  <div class="field">
                    <input
                      class="is-checkradio has-background-color is-primary"
                      id="less-than-8"
                      type="radio"
                      name="less-than-8"
                      value="-8"
                      :checked="step.hoursAway === '-8'"
                      @input="updateStep(keys.hoursAway, $event)"
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
                      :checked="step.hoursAway === '+8'"
                      @input="updateStep(keys.hoursAway, $event)"
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
                      :checked="step.hoursAway === '+16'"
                      @input="updateStep(keys.hoursAway, $event)"
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
            <div class="field" v-if="showHouseInfo">
              <label class="label pb-3">Protección en el edificio</label>
              <input
                class="is-checkradio has-background-color"
                id="houseProtection"
                type="checkbox"
                name="houseProtection"
                :checked="step.houseProtection"
                @input="updateStep(keys.houseProtection, $event)"
              />
              <label for="houseProtection"
                >Cuento con protección en balcones y/o medianeras</label
              >
              <article
                class="message is-primary mt-5"
                v-if="!step.houseProtection"
              >
                <div class="message-header">
                  <p>¡Atención!</p>
                </div>
                <div class="message-body">
                  Las protecciones en balcones y medianeras son
                  <strong>
                    muy importantes para evitar escapes y posibles accidentes </strong
                  >, si no contás con protecciones podés ver los servicios
                  recomendados por miembros de la comunidad <a>acá</a>.
                </div>
              </article>
              <div class="is-divider"></div>
            </div>

            <!-- PROTECTION END -->

            <!-- FAMILY START -->
            <div class="field" v-if="showHouseInfo">
              <label class="label">Integrantes del grupo familiar</label>
              <p class="help pb-6">Seleccioná todas las que apliquen</p>
              <div class="control">
                <div class="field">
                  <div class="field">
                    <input
                      class="is-checkradio has-background-color"
                      id="adults"
                      type="checkbox"
                      name="adults"
                      :checked="step.hasAdults"
                      @input="updateStep(keys.hasAdults, $event)"
                    />
                    <label for="adults"
                      >Hay más adultos en mi grupo familiar</label
                    >
                  </div>
                  <input
                    v-if="step.hasAdults"
                    class="input"
                    type="number"
                    min="0"
                    placeholder="¿Cuántos?"
                    :value="step.adults"
                    @input="updateStep(keys.adults, $event)"
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
                      :checked="step.hasChildren"
                      @input="updateStep(keys.hasChildren, $event)"
                    />
                    <label for="children">
                      Hay menores de 18 años en mi grupo familiar
                    </label>
                  </div>
                  <input
                    v-if="step.hasChildren"
                    class="input"
                    type="number"
                    min="0"
                    placeholder="¿Cuántos?"
                    :value="step.children"
                    @input="updateStep(keys.children, $event)"
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
                      :checked="step.hasPets"
                      @input="updateStep(keys.hasPets, $event)"
                    />
                    <label for="otherPets"
                      >Hay animales en mi grupo familiar</label
                    >
                  </div>
                  <input
                    v-if="step.hasPets"
                    class="input"
                    type="number"
                    min="0"
                    placeholder="¿Cuántos?"
                    :value="step.otherPets"
                    @input="updateStep(keys.otherPets, $event)"
                  />
                </div>
              </div>
              <div class="is-divider"></div>
            </div>
            <!-- FAMILY END -->
            <!-- SCHEDULE START -->
            <div class="field" v-if="showAvailability">
              <label class="label">Disponibilidad para traslados</label>
              <p class="help pb-6">Seleccioná todas las que apliquen</p>
              <div class="control">
                <div class="field">
                  <div class="field">
                    <input
                      class="is-checkradio has-background-color"
                      id="mon"
                      type="checkbox"
                      name="mon"
                      value="mon"
                      :checked="isAvailable('mon')"
                      @input="updateAvailability"
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
                      :checked="isAvailable('tue')"
                      @input="updateAvailability"
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
                      :checked="isAvailable('wed')"
                      @input="updateAvailability"
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
                      :checked="isAvailable('thu')"
                      @input="updateAvailability"
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
                      :checked="isAvailable('fri')"
                      @input="updateAvailability"
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
                      :checked="isAvailable('sat')"
                      @input="updateAvailability"
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
                      :checked="isAvailable('sun')"
                      @input="updateAvailability"
                    />
                    <label for="sun">Domingo</label>
                  </div>
                </div>
              </div>
              <div class="is-divider"></div>
            </div>
            <!-- SCHEDULE END -->
            <!-- EXPERIENCE START -->
            <div class="field" v-if="showExperience">
              <label class="label pb-3">Experiencia con animales</label>
              <div class="control">
                <input
                  id="experience"
                  type="checkbox"
                  name="experience"
                  class="switch"
                  :checked="step.experience"
                  @input="updateStep(keys.experience, $event)"
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
                  :checked="step.hasTransportBox"
                  @input="updateStep(keys.hasTransportBox, $event)"
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
</template>

<script>
// keys to match exactly in RegisterForm
const keys = Object.freeze({
  houseType: "houseType",
  hoursAway: "hoursAway",
  houseProtection: "houseProtection",
  hasAdults: "hasAdults",
  adults: "adults",
  hasChildren: "hasChildren",
  children: "children",
  hasPets: "hasPets",
  otherPets: "otherPets",
  availability: "availability",
  experience: "experience",
  hasTransportBox: "hasTransportBox"
});

export default {
  name: "ThirdStep",
  data: () => ({
    keys
  }),
  props: {
    isActive: Boolean,
    step: Object,
    showHouseInfo: Boolean,
    showExperience: Boolean,
    showAvailability: Boolean
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
    updateAvailability($event) {
      const { checked, value: day } = $event.target;
      this.$emit("update:step", {
        ...this.step,
        [this.keys.availability]: {
          ...this.step.availability,
          [day]: checked
        }
      });
    },
    isAvailable(day) {
      return Boolean(this.step.availability[day]);
    }
  }
};
</script>
