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
          <div class="image is-24x24 inline-block pt-1 m-1">
            <img :src="UserImage" />
          </div>
          {{ UserType }}
          <br />
          <div class="image is-24x24 inline-block pt-1 m-1">
            <img src="../assets/png/celebrate.png" />
          </div>
          Se unió el {{ createdAt }}
          <br />
          <div class="image is-24x24 inline-block pt-1 m-1">
            <img src="../assets/png/email.png" />
          </div>
          {{ User.email }}
        </div>
      </div>
    </div>
    <ProfileContent :user="User" :userType="this.$auth.mongoUser.userType" />
  </section>
</template>

<script>
import ProfileContent from "../components/ProfileContent";
export default {
  name: "profile",
  components: { ProfileContent },
  computed: {
    User() {
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
      else if (type == "adoptant") return "Adoptante";
      else if (type == "vet") return "Veterinaria";
      else if (type == "founder") return "Fundador";
      else return null;
    },
    createdAt() {
      const DateObj = new Date(Date.parse(this.$auth.mongoUser.createdAt));
      let parsedDate = `${DateObj.getDate()}/${DateObj.getMonth()}/${DateObj.getFullYear()}`;
      return parsedDate;
    }
  }
};
</script>
