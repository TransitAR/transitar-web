<template>
  <div>
    <div class="field">
      <label class="label">Datos personales</label>
      <input class="input" type="text" placeholder="Nombre" />
    </div>
    <div class="field">
      <input class="input" type="text" placeholder="Apellido" />
    </div>
    <div class="field">
      <input class="input" type="date" />
    </div>
    <div class="field">
      <input class="input" type="text" placeholder="Domicilio" />
    </div>
    <div class="is-divider"></div>
    <div class="field">
      <label class="label">¿Cómo podés ayudar?</label>
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
            <label for="exampleCheckboxBackgroundColorSuccess1"
              >Puedo adoptar</label
            >
          </div>
          <div class="field">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess2"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess2"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess2"
              >Puedo dar tránsito</label
            >
          </div>
          <div class="field">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess3"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess3"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess3"
              >Puedo hacer traslados</label
            >
          </div>
          <div class="field">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess4"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess4"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess4"
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
          checked="checked"
        />
        <label for="switchExample"
          >Quiero recibir alertas sobre casos de riesgo cercanos</label
        >
      </div>
    </div>
  </div>
</template>
