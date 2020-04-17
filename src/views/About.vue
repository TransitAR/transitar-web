<template>
  <section class="container is-fullhd p-16">
    <div class="columns is-centered is-vcentered">
      <div class="column is-two-thirds">
        <div class="grid">
          <div>
            <h2 class="title is-1 mt-8">Sobre nosotros</h2>
            <p
              class="mb-5"
            >Somos dos desarroladores trabajando de forma independiente para mejorar la vida de los animales, humanos y no humanos.</p>
          </div>
        </div>
        <!-- Vision -->
        <div class="grid mt-5">
          <div class="columns">
            <div class="column is-narrow">
              <figure class="image is-32x32 mx-auto">
                <img src="../assets/png/perception.png" />
              </figure>
            </div>
            <div class="column is-narrow">
              <h2 class="title">Visión</h2>
            </div>
          </div>
          <p>
            Los aminales no nos pertenecen, adoptarlos es sumarlos a nuestra familia y por lo tanto nuestro foco de atención está siempre sobre ellos que son quienes más nos necesitan.
            Cada uno de ellos tiene su familia ideal y para toda la vida, solo hace falta que se encuentren y nosotros vamos a trabajar para acercarlos.
          </p>
          <hr />
        </div>
        <!-- Mision -->
        <div class="grid mt-5">
          <div class="columns">
            <div class="column is-narrow">
              <figure class="image is-32x32 mx-auto">
                <img src="../assets/png/fist.png" />
              </figure>
            </div>
            <div class="column">
              <h2 class="title">Misión</h2>
            </div>
          </div>
          <p>
            El fin de Refugiar es formar una comunidad donde todos sus integrantes cuenten con las herramientas para ayudar a los que no tienen voz.
            Queremos conectar de forma práctica y fácil a todas las personas y organizaciones que actualmente sostienen refugios ocupandose del rescate, cuidado, adopción y posterior seguimiento.
          </p>
          <hr />
        </div>
        <!-- Valores -->
        <div class="grid mt-5">
          <div class="columns">
            <div class="column is-narrow">
              <figure class="image is-32x32 mx-auto">
                <img src="../assets/png/scroll.png" />
              </figure>
            </div>
            <div class="column">
              <h2 class="title">Valores</h2>
            </div>
          </div>
          <p>La premisa bajo la cual nació RefugiAR es la de brindar herramientas de forma totalmente gratuita, transparente y pensadas para ahorrarle tiempo y energía a todo aquel que quiera ayudar de alguna manera a mejorar la vida de nuestros amigos peludos.</p>
          <hr />
        </div>
        <div class="grid">
          <h2 class="title is-1 pt-16">Quienes somos</h2>
          <div class="mt-5" v-for="member in team" :key="member.name">
            <div class="card-content">
              <div class="media">
                <div class="media-bottom">
                  <figure class="image is-128x128">
                    <img
                      class="is-rounded"
                      src="https://bulma.io/images/placeholders/128x128.png"
                      :alt="member.name + ' foto'"
                    />
                  </figure>
                </div>
                <div class="media-content pt-10">
                  <p class="title is-4">{{ member.name }}</p>
                  <p class="subtitle is-6">
                    {{ member.instagram }} -
                    <a
                      :href="member.website"
                      target="_blank"
                    >{{ member.website }}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    team: [
      {
        name: "Guillermo Maiolo",
        website: "https://gmaiolo.com/",
        instagram: "@gmaiolo"
      },
      {
        name: "Julieta Juarez",
        website: "https://julietaflux.dev/",
        instagram: "@julietaflux"
      }
    ]
  })
};
</script>
