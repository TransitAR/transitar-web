<template>
  <section class="container is-fullhd p-16">
    <div class="columns is-centered is-vcentered">
      <div class="column is-two-thirds">
        <div>
          <h2 class="title is-1 mt-8 has-text-centered">Sobre nosotros</h2>
        </div>
        <!-- Vision -->
        <div class="columns mt-5">
          <div class="column is-full">
            <figure class="image is-32x32 mx-auto">
              <img src="../assets/png/perception.png" />
            </figure>
            <div class="column has-text-centered is-full">
              <h2 class="title">Visión</h2>
            </div>
          </div>
        </div>
        <p>
<<<<<<< HEAD
          Los animales no nos pertenecen, adoptarlos es sumarlos a nuestra familia y por lo tanto nuestro foco de atención está siempre sobre ellos que son quienes más nos necesitan.
          Cada uno de ellos tiene su familia ideal y para toda la vida, solo hace falta que se encuentren y nosotros vamos a trabajar para acercarlos.
=======
          Los aminales no nos pertenecen, adoptarlos es sumarlos a nuestra
          familia y por lo tanto nuestro foco de atención está siempre sobre
          ellos que son quienes más nos necesitan. Cada uno de ellos tiene su
          familia ideal y para toda la vida, solo hace falta que se encuentren y
          nosotros vamos a trabajar para acercarlos.
>>>>>>> f117e9bcce36deafc5fc47f93d9a271a39919257
        </p>
        <hr />
        <!-- Mision -->
        <div class="columns mt-5">
          <div class="column is-full">
            <figure class="image is-32x32 mx-auto">
              <img src="../assets/png/fist.png" />
            </figure>
            <div class="column has-text-centered is-full">
              <h2 class="title">Misión</h2>
            </div>
          </div>
        </div>
        <p>
          El fin de Refugiar es formar una comunidad donde todos sus integrantes
          cuenten con las herramientas para ayudar a los que no tienen voz.
          Queremos conectar de forma práctica y fácil a todas las personas y
          organizaciones que actualmente sostienen refugios ocupandose del
          rescate, cuidado, adopción y posterior seguimiento.
        </p>
        <hr />
        <!-- Valores -->
        <div class="columns mt-5">
          <div class="column is-full">
            <figure class="image is-32x32 mx-auto">
              <img src="../assets/png/scroll.png" />
            </figure>
            <div class="column has-text-centered is-full">
              <h2 class="title">Valores</h2>
            </div>
          </div>
        </div>
        <p>
          La premisa bajo la cual nació RefugiAR es la de brindar herramientas
          de forma totalmente gratuita, transparente y pensadas para ahorrarle
          tiempo y energía a todo aquel que quiera ayudar de alguna manera a
          mejorar la vida de nuestros amigos peludos.
        </p>
        <hr />

        <h2 class="title is-1 pt-16 has-text-centered">Quiénes somos</h2>
        <div class="level mb-5">
          <div
            class="level-item has-text-centered"
            v-for="member in team"
            :key="member.name"
          >
            <div class="card-content">
              <figure class="image is-128x128 m-auto">
                <img
                  class="is-rounded"
                  v-bind:src="member.img"
                  :alt="member.name + ' foto'"
                />
              </figure>
              <div class="media-content pt-10 has-text-centered">
                <p class="title is-4 pb-8">{{ member.name }}</p>
                <p class="subtitle is-6">
                  {{ member.instagram }} -
                  <a :href="member.website" target="_blank">{{
                    member.website
                  }}</a>
                </p>
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
        instagram: "@gmaiolo",
        img: require("../assets/us/will.png")
      },
      {
        name: "Julieta Juarez",
        website: "https://julietaflux.dev/",
        instagram: "@julietaflux",
        img: require("../assets/us/jules.png")
      }
    ]
  })
};
</script>
