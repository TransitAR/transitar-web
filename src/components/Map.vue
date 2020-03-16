<template>
  <div ref="map" class="map"></div>
</template>

<script>
import catSilhouetteImg from "../assets/home.png";
import { getHosts } from "../utils/http";
import { initMap } from "../utils/map";

export default {
  name: "Map",
  props: {
    hosts: Object,
    clientPos: GeolocationPosition
  },
  computed: {
    hostsPoints() {
      if (!this.hosts) return [];
      return this.hosts.data.map(host => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: host.location.coordinates
          },
          properties: {
            host: host.hostId,
            icon: "host"
          }
        };
      });
    }
  },
  async mounted() {
    console.info(`Creando mapa con ${this.hosts?.count || 0} Hosts`);
    const map = initMap(this.$refs.map, this.clientPos.coords);
    map.on("load", () => {
      map.loadImage(catSilhouetteImg, (error, image) => {
        if (error) throw error;
        map.addImage("cat", image);
      });
      map.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: this.hostsPoints
          }
        },
        layout: {
          "icon-image": "cat",
          "icon-size": 0.09,
          "text-field": "{ hostId }",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.9],
          "text-anchor": "top"
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
/* Capaz hay una manera mas elegante */
@import "../../node_modules/mapbox-gl/dist/mapbox-gl.css";

.map {
  width: 100%;
  height: 600px;
}
</style>
