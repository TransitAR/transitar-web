<template>
  <div>
    <div class="field">
      <label class="label">Tipo</label>
      <div class="select">
        <select placeholder="Tipo de vivienda">
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
    </div>
    <div class="is-divider"></div>
    <div class="field">
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
    </div>

    <article class="message is-primary mt-5">
      <div class="message-header">
        <p>¡Atención!</p>
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
              id="adults"
              type="checkbox"
              name="adults"
              checked="checked"
            />
            <label for="adults">Hay más adultos en mi grupo familiar</label>
          </div>
          <input
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
              checked="checked"
            />
            <label for="children"
              >Hay menores de 18 años en mi grupo familiar</label
            >
          </div>
          <input
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
              checked="checked"
            />
            <label for="otherPets">Hay animales en mi grupo familiar</label>
          </div>
          <input
            class="input"
            type="number"
            v-model="otherPets"
            placeholder="¿Cuántos?"
          />
        </div>
      </div>
    </div>
    <div class="is-divider"></div>
    <div class="field">
      <label class="label">Experiencia</label>
      <div class="control pt-6">
        <input
          id="experience"
          type="checkbox"
          name="experience"
          class="switch"
          v-model="experience"
        />
        <label for="experience">Tengo experiencia con perros y/o gatos</label>
      </div>
      <div class="control pt-6">
        <input
          id="hasTransportBox"
          type="checkbox"
          name="hasTransportBox"
          class="switch"
          v-model="hasTransportBox"
        />
        <label for="hasTransportBox">Tengo caja transportadora o canil</label>
      </div>
    </div>
  </div>
</template>
