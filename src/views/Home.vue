<template>
  <section class="section">
    <div class="container is-fluid">
      <!-- Map -->
      <div v-if="!loadedMapInfo">Loading map...</div>
      <Map v-else :client-pos="clientPos" :hosts="hosts" />

      <br />

      <!-- Inner nav -->
      <div class="level">
        <div class="level-item has-text-centered">
          <div class="content">
            <fa-icon icon="paw" size="2x" class="has-text-link" />
            <p class="title is-5">Buscar tránsito</p>
            <p class="subtitle is-6">Buscar hogares de tránsito disponibles</p>
            <button class="button is-link">Buscar</button>
          </div>
        </div>
        <div class="divider vertical" data-content="O"></div>
        <div class="level-item has-text-centered">
          <div class="content">
            <fa-icon icon="home" size="2x" class="has-text-link" />
            <p class="title is-5">Dar tránsito</p>
            <p class="subtitle is-6">Ofrecer espacio para tránsito</p>
            <button class="button is-link">Registrarme</button>
          </div>
        </div>
        <div class="divider vertical" data-content="O"></div>
        <div class="level-item has-text-centered">
          <div class="content">
            <fa-icon icon="car" size="2x" class="has-text-link" />
            <p class="title is-5">Ver viajes voluntarios</p>
            <p class="subtitle is-6">
              Viajes ofrecidos por voluntarios en su tiempo libre
            </p>
            <button class="button is-link">Ver viajes</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Map from "../components/Map";
import { getCurrentPosition } from "../utils/navigator";
import { getHosts } from "../utils/http";

export default {
  name: "home",
  components: { Map },
  data: () => ({
    loadedMapInfo: false,
    clientPos: null,
    hosts: null
  }),
  async mounted() {
    // Fetch client position
    try {
      this.clientPos = await getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    } catch (err) {
      console.warn("There was an error getting the current pos", err);
    }

    // Fetch hosts
    try {
      const { data: hosts } = await getHosts();
      this.hosts = hosts;
    } catch {
      console.warn("There was an error getting the hosts", err);
    }

    this.loadedMapInfo = true;
  }
};
</script>

<style lang="scss" scoped>
.divider {
  display: block;
  position: relative;
  border-top: 0.1rem solid #dbdbdb;
  height: 0.1rem;
  margin: 2rem 0;
  text-align: center;
  &::after {
    background: #fff;
    color: #b5b5b5;
    content: attr(data-content);
    display: inline-block;
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    -webkit-transform: translateY(-1.1rem);
    -ms-transform: translateY(-1.1rem);
    transform: translateY(-1.1rem);
    text-align: center;
  }
  &.vertical {
    display: block;
    flex: none;
    width: auto;
    height: auto;
    padding: 2rem;
    margin: 0;
    position: relative;
    border-top: none;
    min-height: 2rem;
    &::before {
      border-left: 0.1rem solid #dbdbdb;
      bottom: 0;
      content: "";
      display: block;
      left: 50%;
      position: absolute;
      top: 0;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      padding: 0.1rem;
      -webkit-transform: translateY(-50%) translateX(-50%);
      -ms-transform: translateY(-50%) translateX(-50%);
      transform: translateY(-50%) translateX(-50%);
    }
  }
}
</style>
