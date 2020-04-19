<template>
  <div
    :class="
      `step-content has-text-centered is-primary ${isActive ? 'is-active' : ''}`
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
                      v-model="step.type"
                      @input="updateStep(keys.type, $event)"
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
                      v-model="step.type"
                      @input="updateStep(keys.type, $event)"
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
                      v-model="step.sex"
                      @input="updateStep(keys.sex, $event)"
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
                      v-model="step.sex"
                      @input="updateStep(keys.sex, $event)"
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
                @input="updateStep(keys.name, $event)"
              />
            </div>

            <div class="field">
              <input
                class="input"
                type="number"
                min="0"
                placeholder="Años"
                @input="updateStep(keys.age, $event)"
              />
            </div>
            <div class="field">
              <input
                class="input"
                type="number"
                min="0"
                placeholder="Peso"
                @input="updateStep(keys.weight, $event)"
              />
            </div>

            <div class="field is-grouped">
              <p class="control is-expanded">
                <input
                  class="input"
                  type="text"
                  placeholder="Seleccionar imagen"
                  @input="updateStep(keys.image, $event)"
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
                  placeholder="Tamaño"
                  @input="updateStep(keys.size, $event)"
                >
                  <option v-for="size in sizes" :key="size">{{ size }}</option>
                </select>
              </div>
            </div>
          </div>
          <!-- SIZE END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// keys to match exactly in RegisterForm
const keys = Object.freeze({
  type: "type",
  sex: "sex",
  name: "name",
  age: "age",
  weight: "weight",
  image: "image",
  size: "size"
});

export default {
  name: "FirstStep",
  props: {
    isActive: Boolean,
    step: Object
  },
  data: () => ({
    keys,
    sizes: ["Seleccionar", "Pequeño", "Mediano", "Grande"]
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
    }
  }
};
</script>
