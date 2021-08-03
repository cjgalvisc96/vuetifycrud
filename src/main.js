import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// External packages
import VueRouter from 'vue-router'
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
// Use vue-router
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    alias: ['/home'],
    component: Home
  },
  {
    path: '/articles',
    component: ListArticles
  },
  {
    path: '/create-article',
    component: CreateArticle
  },
  {
    path: '/update-article/:id',
    component: UpdateArticle
  },
  {
    path: '/contact',
    component: Contact
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
