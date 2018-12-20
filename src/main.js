import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

//flagIcon
import FlagIcon from 'vue-flag-icon-2'
Vue.use(FlagIcon)

// vue-scrollSpy
import Scrollspy from 'vue2-scrollspy'
Vue.use(Scrollspy)

// vue-particles
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
