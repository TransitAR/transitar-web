import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/explorar",
    name: "explore",
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/Explore.vue")
  },
  {
    path: "/nosotros",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/Logout.vue")
  },
  {
    path: "/registro",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/perfil",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
  },
  {
    path: "/mascota/:id",
    name: "pet",
    component: () => import(/* webpackChunkName: "pet" */ "../views/Pet.vue")
  },
  {
    path: "/info",
    name: "info",
    component: () =>
      import(/* webpackChunkName: "info" */ "../views/InfoProfiles.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
