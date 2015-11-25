import 'babel-polyfill';
import Vue from 'vue';

Vue.config.debug = true;

// Filters
import marked from './filters/marked';
Vue.filter('marked', marked);

// Register router
import Router from 'vue-router'
Vue.use(Router);

const router = new Router({
  history: true,
  linkActiveClass: 'is-active',
  transitionOnLoad: true,
});

router.redirect({
  '*': '/',
});

// Components
import App from './pages/';
import Gallery from './pages/gallery';
import About from './pages/about';
import './index.css';

router.map({
  '/': {
    component: Gallery,
  },
  '/about': {
    component: About,
  },
});

router.start(App, '#IrinaGoremykina')
