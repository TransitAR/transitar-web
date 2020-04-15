module.exports = {
  devServer: {
    proxy: {
      "/api": {
        ws: true,
        changeOrigin: true,
        target:
          process.env.POINT_PROD || process.env.NODE_ENV === "production"
            ? "https://api.refugiar.org"
            : "http://localhost:3000"
      }
    }
  }
};
