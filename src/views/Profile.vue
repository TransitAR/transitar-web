<template>
  <section class="container is-fullhd">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Refugio de Prueba</p>
            <p class="subtitle is-6">@refugio_prueba123</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <a>@bulmaio</a>.
          <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    <div class="tabs is-centered">
      <ul>
        <li class="is-active">
          <a>En adopción</a>
        </li>
        <li>
          <a>En tránsito</a>
        </li>
        <li>
          <a>Viajes</a>
        </li>
        <li>
          <a>Configuración</a>
        </li>
      </ul>
    </div>
    <div class="columns">
      <div class="column" v-for="n in 4" v-bind:key="n">
        <PetCard />
      </div>
    </div>
  </section>
</template>

<script>
import PetCard from "../components/PetCard";

export default {
  name: "profile",
  components: { PetCard }
};
</script>
