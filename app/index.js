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
import App from 'components/app';
import GalleryPage from 'components/gallery-page';
import AboutPage from 'components/about-page';
import './index.css';

router.map({
  '/': {
    component: GalleryPage,
  },
  '/about': {
    component: AboutPage,
  },
});

router.start(App, '#IrinaGoremykina')
