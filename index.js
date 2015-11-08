import Vue from 'vue';
import Router from 'vue-router'
import App from './pages/';
import Gallery from './pages/gallery';
import About from './pages/about';
import './index.css';

Vue.use(Router);

const router = new Router();

router.map({
  '/': {
    component: Gallery,
  },
  '/about': {
    component: About,
  },
})

router.beforeEach(function () {
  window.scrollTo(0, 0);
})

router.redirect({
  '*': '/',
})

router.start(App, '#IrinaGoremykina')
