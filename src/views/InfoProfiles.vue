<template>
  <section class="container is-fullhd p-16">
    <div class="container mt-8" id="refugio">
      <h1 class="title is-1">Refugio</h1>
      <!-- Vision -->
      <div class="grid grid-cols-1">
        <div>
          <p>
            El perfil de Refugio está pensado para ayudar a organizaciones
            proteccionistas a difundir su trabajo, publicar los perfiles de cada
            rescatado, poder comunicarse directamente con adoptantes, ver su
            ficha personal de forma sencilla y consultar si alguno de sus
            animales se adapta a su perfil para formar una familia. Además
            pueden contactar a voluntarios cercanos en caso de necesitar ayuda
            ante alguna emergencia o necesidad de traslado. Cada refugio cuenta
            con su propio perfil donde pueden publicar a cada uno de sus
            rescatados, especificar dónde y cómo recibir donaciones y
            centralizar todas su redes de contacto.
          </p>
          <br />
          <h5 class="subtitle is-5">Entre otras cosas, este perfil puede:</h5>
          <div class="content">
            <ul>
              <li>Publicar animales en adopción</li>
              <li>Publicar animales que necesiten tránsito</li>
              <li>Contactar adoptartes y ver su perfil</li>
              <li>Contactar a voluntarios</li>
              <li>Recibir donaciones</li>
            </ul>
          </div>
          <h1 class="title is-5 mt-8">Refugios registrados</h1>
          <div class="inline-flex align-center">
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <button class="button is-text mt-3 mx-1">Ver todos</button>
          </div>
          <div class="py-5">
            <div v-if="$auth.loading">Loading auth...</div>
            <div v-else-if="!$auth.user" class="buttons">
              <router-link to="/registro" class="button is-info">
                <strong>Registrarme</strong>
              </router-link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div class="container mt-8" id="adoptante">
      <h1 class="title is-1 mt-8">Adoptante</h1>
      <!-- Vision -->
      <div class="grid grid-cols-1">
        <div>
          <p>
            El perfil de Adoptante está pensado para que las personas que buscan
            agrandar la familia puedan encontrar a uno de los tantos refugiados
            que estan esperando un hogar. Para nosotros lo mas importante es
            asegurar una adopción responsable y por lo tanto ofrecemos una forma
            secilla de postularte como adoptante antes los refugios para que
            puedan evaluarte y orientarte en el proceso de adopción.
          </p>
          <br />
          <h5 class="subtitle is-5">Entre otras cosas, este perfil puede:</h5>
          <div class="content">
            <ul>
              <li>Buscar animales en adopción</li>
              <li>Buscar animales que necesiten tránsito</li>
            </ul>
          </div>
          <h1 class="title is-3 mt-8">137</h1>
          <h1 class="title is-5 mt-2">Adopciones exitosas</h1>
          <div class="py-5">
            <div v-if="$auth.loading">Loading auth...</div>
            <div v-else-if="!$auth.user" class="buttons">
              <router-link to="/registro" class="button is-primary">
                <strong>Registrarme</strong>
              </router-link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div class="container mt-8" id="voluntario">
      <h1 class="title is-1 mt-8">Voluntario</h1>
      <!-- Vision -->
      <div class="grid grid-cols-1">
        <div>
          <p>
            El perfil de Voluntario está pensado para todos los que quieran
            colaborar con nuestra comunidad, no necesariamente adoptanto o dando
            tránsito, sino con cualquier actividad que puedas realizar, como
            haciendo traslados en tu tiempo libre, prestando caniles o jaulas
            trasnportadoras, haciendo donaciones o ayudando a miembros de la
            comunidad en emergencias y casos de riesgo.
          </p>
          <br />
          <h5 class="subtitle is-5">Entre otras cosas, este perfil puede:</h5>
          <div class="content">
            <ul>
              <li>Ofrecer traslados de mascotas</li>
              <li>Realizar donaciones a refugios</li>
              <li>Ayudar ante emergencias</li>
              <li>Recibir alertas de casos de riesgo</li>
            </ul>
          </div>
          <h1 class="title is-3 mt-8">172</h1>
          <h1 class="title is-5 mt-2">Voluntarios dispuestos a ayudar</h1>
          <div class="py-5">
            <div v-if="$auth.loading">Loading auth...</div>
            <div v-else-if="!$auth.user" class="buttons">
              <router-link to="/registro" class="button is-warning">
                <strong>Registrarme</strong>
              </router-link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <div class="container mt-8" id="veterinaria">
      <h1 class="title is-1 mt-8">Clínica Veterinaria</h1>
      <!-- Vision -->
      <div class="grid grid-cols-1">
        <div>
          <p>
            El perfil de Clínica Veterinaria está pensado para todas las
            clínicas que quieran ganar visibilidad, pueden publicar todos los
            servicios que ofrezcan. Al igual que el perfil de Refugio podrán
            difundir su trabajo, publicar los perfiles de cada animal si
            tuvieran, comunicarse directamente con adoptantes, ver su ficha
            personal de forma sencilla y consultar si alguno de sus animales se
            adapta a su perfil para formar una familia. Ademas pueden colaborar
            donando o funcionando como intermediarios recibiendo donaciones para
            refugios.
          </p>
          <br />
          <h5 class="subtitle is-5">Entre otras cosas, este perfil puede:</h5>
          <div class="content">
            <ul>
              <li>Publicar servicios</li>
              <li>Recibir donaciones para refugios</li>
              <li>Publicar animales en adopción</li>
              <li>Publicar animales que necesiten tránsito</li>
            </ul>
          </div>
          <h1 class="title is-5 mt-8">Veterinarias registradas</h1>
          <div class="inline-flex align-center">
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <figure class="image is-64x64 mx-1">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/64x64.png"
              />
            </figure>
            <button class="button is-text mt-3 mx-1">Ver todos</button>
          </div>
          <div class="py-5">
            <div v-if="$auth.loading">Loading auth...</div>
            <div v-else-if="!$auth.user" class="buttons">
              <router-link to="/registro" class="button is-danger">
                <strong>Registrarme</strong>
              </router-link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoProfiles",
  methods: {
    login() {}
  },
  mounted() {
    // TODO: hacer esto mas prolijo o evitarlo, quizas hacer plugin
    // ahora hay que hacerlo sino no scrollea con hash
    const hash = this.$route.hash?.replace("#", "");
    if (hash) {
      const elem = document.getElementById(hash);
      elem?.scrollIntoView();
    }
  }
};
</script>
