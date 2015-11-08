import 'babel-polyfill';
import Vue from 'vue';

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

router.beforeEach(function () {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/gallery',
});

// Components
import App from './pages/';
import Gallery from './pages/gallery';
import About from './pages/about';
import './index.css';

router.map({
  '/gallery': {
    component: Gallery,
  },
  '/about': {
    component: About,
  },
});

router.start(App, '#IrinaGoremykina')
