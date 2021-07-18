import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
      metaTags: ["tmdb, free ratings, movie ratings, series, tanzania"]
    }
  },
  {
    path: "/categories",
    name: "Movies",
    component: () => import("../views/Categories.vue"),
    meta: {
      title: 'Categories',
      metaTags: ["popular movies, new movies, series, toprated, now playing, upcoming"]
    }
  },
  {
    path: "/categories/:listType",
    name: "MoviesList",
    component: () => import("../components/movies/MoviesList.vue"),
    meta: {
      title: "Movies",
      metaTags: ["popular movies, new movies, series, toprated, now playing, upcoming"]
    }
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: () => import("../views/Movie.vue"),
    meta: {
      title: "Movie",
      metaTags: []
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
