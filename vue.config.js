const apiProxy = {
  ws: true,
  changeOrigin: true,
  target:
    process.env.POINT_PROD || process.env.NODE_ENV === "production"
      ? "https://api.refugiar.org"
      : "http://localhost:3000"
};

if (process.env.POINT_PROD || process.env.NODE_ENV === "production") {
  apiProxy.pathRewrite = {
    "^/api": "https://api.refugiar.org/api"
  };
}

const config = {
  devServer: {
    proxy: {
      "/api": apiProxy
    }
  }
};

module.exports = config;
