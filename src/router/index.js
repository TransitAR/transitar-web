import Vue from "vue";
import VueRouter from "vue-router";
import { authGuard } from "../utils/auth/authRouteGuard";

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
      import(/* webpackChunkName: "logout" */ "../views/callbacks/Logout.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/callbacks/Login.vue")
  },
  {
    path: "/formulario-registro",
    name: "register-form",
    beforeEnter: authGuard,
    component: () =>
      import(/* webpackChunkName: "registerForm" */ "../views/Register.vue")
  },
  {
    path: "/formulario-mascota",
    name: "pet-form",
    component: () =>
      import(
        /* webpackChunkName: "registerForm" */ "../components/forms/PetForm.vue"
      )
  },
  {
    path: "/perfil",
    name: "profile",
    beforeEnter: authGuard,
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
  },
  {
    path: "/mascota/:id",
    name: "pet",
    component: () => import(/* webpackChunkName: "pet" */ "../views/Pet.vue")
  },
  {
    path: "/refugio/:identifier",
    name: "refuge",
    component: () => import(/* webpackChunkName: "pet" */ "../views/Refuge.vue")
  },
  {
    path: "/info",
    name: "info",
    component: () => import(/* webpackChunkName: "info" */ "../views/Info.vue")
  },
  {
    path: "/noticias",
    name: "news",
    component: () => import(/* webpackChunkName: "info" */ "../views/News.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
