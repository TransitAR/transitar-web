<template>
  <section class="container is-fullhd p-16">
    <p class="subtitle is-4 has-text-centered pb-10">
      Somos una organización sin fines de lucro que buscar visibilizar y ayudar
      a refugios, hogares de tránsito y adoptantes facilitando la comunicación
      entre todos los involucrados en el proceso de encontrarle a cada mascota
      el hogar que se merece.
    </p>

    <div class="level pb-5">
      <div class="level-item has-text-centered">
        <p class="title is-4 has-text-weight-light">Cerca tuyo hay</p>
      </div>
    </div>

    <div class="level pb-16">
      <!-- Refugios -->
      <div class="level-item has-text-centered">
        <div>
          <div class="mb-8">
            <div class="inline-flex align-center">
              <p class="title is-3 inline-block mr-2">5</p>
              <figure class="image is-24x24 inline-block m-auto">
                <img src="../assets/png/016-veterinarian-1.png" />
              </figure>
            </div>
          </div>
          <p class="subtitle is-5">Refugios</p>
        </div>
      </div>
      <div class="is-divider-vertical"></div>
      <!-- Perros -->
      <div class="level-item has-text-centered">
        <div>
          <div class="mb-8">
            <div class="inline-flex align-center">
              <p class="title is-3 inline-block mr-2">2</p>
              <figure class="image is-24x24 inline-block m-auto">
                <img src="../assets/png/032-dog.png" />
              </figure>
            </div>
          </div>
          <p class="subtitle is-5">Perros</p>
        </div>
      </div>
      <div class="is-divider-vertical"></div>
      <!-- Gatos -->
      <div class="level-item has-text-centered">
        <div>
          <div class="mb-8">
            <div class="inline-flex align-center">
              <p class="title is-3 inline-block mr-2">5</p>
              <figure class="image is-24x24 inline-block m-auto">
                <img src="../assets/png/036-cat.png" />
              </figure>
            </div>
          </div>
          <p class="subtitle is-5">Gatos</p>
        </div>
      </div>
      <div class="is-divider-vertical"></div>
      <!-- Veterinarias -->
      <div class="level-item has-text-centered">
        <div>
          <div class="mb-8">
            <div class="inline-flex align-center">
              <p class="title is-3 inline-block mr-2">2</p>
              <figure class="image is-24x24 inline-block m-auto">
                <img src="../assets/png/002-veterinarian-2.png" />
              </figure>
            </div>
          </div>
          <p class="subtitle is-5">Veterinarias</p>
        </div>
      </div>
    </div>

    <p class="title is-5 has-text-weight-light has-text-centered mx-5">
      Si formas parte de un
      <span class="has-text-weight-semibold">refugio</span>, si podes dar
      <span class="has-text-weight-semibold">tránsito</span> o
      <span class="has-text-weight-semibold">adoptar</span>, si podés
      <span class="has-text-weight-semibold">donar,</span> si podes ofrecer
      <span class="has-text-weight-semibold">traslados</span> voluntarios o si
      sos parte de una
      <span class="has-text-weight-semibold">veterinaria</span> podés
      involucrarte y además ganar visibilidad.
    </p>

    <div class="level">
      <div class="level-item has-text-centered">
        <p class="title is-4 has-text-weight-light py-5">
          ¡Registrate y empezá a ayudar!
        </p>
      </div>
    </div>

    <UsersTable />
  </section>
</template>

<script>
import UsersTable from "../components/UsersTable";

export default {
  name: "home",
  components: { UsersTable }
};
</script>
