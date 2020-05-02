<template>
  <section class="container is-fullhd">
    <div class="card mt-5">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              {{ User.name }}
            </p>
            <p class="subtitle is-6">@{{ User.nickname }}</p>
          </div>
        </div>

        <div class="content">
          <div class="image is-24x24 inline-block">
            <img :src="UserImage" />
          </div>
          {{ UserType }}
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
    <div class="tabs is-centered">
      <ul>
        <li class="is-active">
          <a>Adopciones</a>
        </li>
        <li>
          <a>Tránsito</a>
        </li>
        <li>
          <a>Donaciones</a>
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
import PetCard from "../components/cards/PetCard";

export default {
  name: "profile",
  components: { PetCard },
  computed: {
    User() {
      console.log(this.$auth.mongoUser);
      return this.$auth.mongoUser;
    },
    UserImage() {
      let img = require(`../assets/png/${this.$auth.mongoUser.userType}.png`);
      return img;
    },
    UserType() {
      let type = this.$auth.mongoUser.userType;

      if (type == "refuge") return "Refugio";
      else if (type == "volunteer") return "Voluntario";
      else return "Veterinaria";
    }
  }
};
</script>
