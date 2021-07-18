import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { charactersLimiter, imdbLink } from "./filter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import VueClazyLoad from "vue-clazy-load";

import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))
import "@fontsource/jost"; // Defaults to weight 400.

Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-5358676928061541' })

Vue.use(VueClazyLoad);

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import "@/assets/css/tailwind.css";
import "@/assets/css/custom.css";

Vue.config.productionTip = false;

import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

Vue.filter("charactersLimiter", charactersLimiter);
Vue.filter("imdbLink", imdbLink);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
