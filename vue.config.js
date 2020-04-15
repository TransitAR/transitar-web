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
  }
};

module.exports = config;
