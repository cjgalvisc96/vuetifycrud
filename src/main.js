import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// Owner components
import Home from './components/Home'
import ListArticles from './components/ListArticles'
import CreateArticle from './components/CreateArticle'
import UpdateArticle from './components/UpdateArticle'
import Contact from './components/Contact'

// Create owner components
Vue.component('Home', Home);
Vue.component('ListArticles', ListArticles);
Vue.component('CreateArticle', CreateArticle);
Vue.component('UpdateArticle', UpdateArticle);
Vue.component('Contact', Contact);


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
