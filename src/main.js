import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

// vue-scrollSpy
import Scrollspy from 'vue2-scrollspy'
Vue.use(Scrollspy)

new Vue({
  render: h => h(App),
}).$mount('#app')
