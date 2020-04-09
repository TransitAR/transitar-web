<template>
  <div>
    <div class="field">
      <label class="label">Tipo</label>
      <div class="select">
        <select>
          <option>Tipo de vivienda</option>
          <option>Casa</option>
          <option>Departamento</option>
          <option>Quinta</option>
        </select>
      </div>
    </div>
    <div class="is-divider"></div>
    <div class="field">
      <label class="label">Horas fuera de casa</label>

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
              >Menos de 8</label
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
            <label for="exampleCheckboxBackgroundColorSuccess2">Más de 8</label>
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
              >Más de 16, pero hay gente en casa</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="is-divider"></div>
    <div class="field">
      <label class="label">Protección</label>
      <input
        class="is-checkradio has-background-color is-primary"
        id="exampleCheckboxBackgroundColorSuccess1"
        type="checkbox"
        name="exampleCheckboxBackgroundColorSuccess1"
        checked="checked"
      />
      <label for="exampleCheckboxBackgroundColorSuccess1"
        >Cuento con protección en balcones y/o medianeras</label
      >
    </div>

    <article class="message is-primary mt-5">
      <div class="message-header">
        <p>Primary</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Las protecciones en balcones y medianeras son
        <strong
          >muy importantes para evitar escapes y posibles accidentes</strong
        >, si no contás con protecciones podés ver los servicios recomendados
        por miembros de la comunidad <a>acá</a>.
      </div>
    </article>

    <div class="is-divider"></div>
    <div class="field">
      <label class="label">Integrantes del grupo familiar</label>
      <div class="control">
        <div class="field">
          <div class="field pt-6">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess1"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess1"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess1"
              >Hay más adultos en mi grupo familiar</label
            >
          </div>
          <input class="input" type="number" placeholder="¿Cuántos?" />
        </div>
      </div>
      <div class="control">
        <div class="field">
          <div class="field pt-6">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess1"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess1"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess1"
              >Hay menores de 18 años en mi grupo familiar</label
            >
          </div>
          <input class="input" type="number" placeholder="¿Cuántos?" />
        </div>
      </div>
      <div class="control">
        <div class="field">
          <div class="field pt-6">
            <input
              class="is-checkradio has-background-color is-primary"
              id="exampleCheckboxBackgroundColorSuccess1"
              type="checkbox"
              name="exampleCheckboxBackgroundColorSuccess1"
              checked="checked"
            />
            <label for="exampleCheckboxBackgroundColorSuccess1"
              >Hay animales en mi grupo familiar</label
            >
          </div>
          <input class="input" type="number" placeholder="¿Cuántos?" />
        </div>
      </div>
    </div>
    <div class="is-divider"></div>
    <div class="field">
      <label class="label">Experiencia</label>
      <div class="control pt-6">
        <input
          id="switchExample"
          type="checkbox"
          name="switchExample"
          class="switch"
          checked="checked"
        />
        <label for="switchExample"
          >Tengo experiencia con perros y/o gatos</label
        >
      </div>
      <div class="control pt-6">
        <input
          id="switchExample"
          type="checkbox"
          name="switchExample"
          class="switch"
          checked="checked"
        />
        <label for="switchExample">Tengo caja transportadora o canil</label>
      </div>
    </div>
  </div>
</template>
