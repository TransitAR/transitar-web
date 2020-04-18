<template>
  <section>
    <div class="container is-fullhd p-16">
      <p class="subtitle is-4 has-text-centered pb-10">
        Somos una organización sin fines de lucro que buscar visibilizar y
        ayudar a refugios, hogares de tránsito y adoptantes facilitando la
        comunicación entre todos los involucrados en el proceso de encontrarle a
        cada mascota el hogar que está esperando.
      </p>

      <div class="level pb-5">
        <div class="level-item has-text-centered">
          <p class="title is-4 has-text-weight-light">Estamos conectando</p>
        </div>
      </div>

      <div class="level pb-10">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Animales</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Voluntarios</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Adoptantes</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Refugios</p>
            <p class="title">789</p>
          </div>
        </div>
      </div>

      <p class="title is-5 has-text-weight-light has-text-centered mx-5">
        Si formas parte de un
        <span class="has-text-weight-semibold">refugio</span>, si podes dar
        <span class="has-text-weight-semibold">tránsito</span> o
        <span class="has-text-weight-semibold">adoptar</span>, si podés
        <span class="has-text-weight-semibold">donar</span>, si podes ofrecer
        <span class="has-text-weight-semibold">traslados</span> voluntarios o si
        sos parte de una
        <span class="has-text-weight-semibold">veterinaria</span> podés
        involucrarte y además ganar visibilidad.
      </p>

      <div class="level">
        <div class="level-item has-text-centered">
          <p class="title is-4 has-text-weight-light py-5">
            ¡Conocé nuestros tipos de cuentas y empezá a ayudar!
          </p>
        </div>
      </div>

      <UsersTable />
    </div>
    <Footer />
  </section>
</template>

<script>
import UsersTable from "../components/UsersTable";
import Footer from "../components/Footer";

export default {
  name: "home",
  components: { UsersTable, Footer }
};
</script>
