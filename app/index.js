import Vue from 'vue';
import Router from 'vue-router'
import marked from './filters/marked';
import App from 'components/app';
import GalleryPage from 'components/gallery-page';
import AboutPage from 'components/about-page';

Vue.config.debug = (process.env.NODE_ENV !== 'production');
Vue.filter('marked', marked);
Vue.use(Router);

const router = new Router({
  history: true,
  linkActiveClass: 'is-active',
  transitionOnLoad: true,
});

router.redirect({
  '*': '/',
});

router.map({
  '/gallery': {
    name: 'gallery',
    component: GalleryPage,
  },
  '/about': {
    name: 'about',
    component: AboutPage,
  },
});

router.alias({
  '/': '/home',
  '/home': '/gallery',
});

router.start(App, '#IrinaGoremykina')

export { router };
