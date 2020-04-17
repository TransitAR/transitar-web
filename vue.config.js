const pointProd = process.env.VUE_APP_POINT_PROD;

const config = {
  devServer: {
    proxy: {
      "/api": {
        ws: true,
        changeOrigin: true,
        target: pointProd ? "https://api.refugiar.org" : "http://localhost:3000"
      }
    }
  },
  pwa: {
    name: "RefugiAR",
    themeColor: "#fafafa",
    assetsVersion: "v1" // subir esta version para cambios en assets como iconos/imagenes
  }
};

module.exports = config;
