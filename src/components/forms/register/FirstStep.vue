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
                      :checked="step.userType === 'refuge'"
                      @input="updateUserType"
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
                      :checked="step.userType === 'adoptant'"
                      @input="updateUserType"
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
                      :checked="step.userType === 'volunteer'"
                      @input="updateUserType"
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
                      :checked="step.userType === 'vet'"
                      @input="updateUserType"
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
</template>

<script>
export default {
  name: "FirstStep",
  props: {
    isActive: Boolean,
    step: Object
  },
  methods: {
    updateUserType(e) {
      this.$emit("update:step", { userType: event.target.value });
    }
  }
};
</script>
