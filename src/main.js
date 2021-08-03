import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// Owner components
import Home from './components/Home'
import ListArticles from './components/ListArticles'

// Create components
Vue.component('Home', Home);
Vue.component('ListArticles', ListArticles);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
