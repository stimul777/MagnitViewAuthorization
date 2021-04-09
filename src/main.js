import Vue from "vue";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from "vuelidate";


Vue.use(Vuetify)
Vue.use(Vuelidate);


import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
