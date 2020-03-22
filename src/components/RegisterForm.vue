<template>
  <div>
    <div class="field">
      <label class="label">Tipo</label>
      <div class="control">
        <div class="field">
          <div class="field">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess1"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess1"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess1">Puedo adoptar</label>
          </div>
          <div class="field">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess2"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess2"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess2">Puedo dar tránsito</label>
          </div>
          <div class="field">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess3"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess3"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess3">Puedo hacer viajes</label>
          </div>
        </div>
      </div>
    </div>
    <div class="is-divider"></div>
    <div class="field">
      <label class="label">Voluntariado</label>
      <div class="control">
        <input
          id="switchExample"
          type="checkbox"
          name="switchExample"
          class="switch"
          checked="checked"
        />
        <label for="switchExample">Quiero ser voluntario en refugios cercanos</label>
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
          checked="checked"
        />
        <label for="switchExample">Quiero recibir alertas sobre casos de riesgo cercanos</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form"
};
</script>