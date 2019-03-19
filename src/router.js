import VueRouter from 'vue-router';
import Login from './pages/login/Login.vue';
import Pricing from './pages/pricing/Pricing.vue';
import ContactUs from './pages/contact-us/ContactUs.vue';
import Books from './pages/books/Books.vue';
import NotAuthorized from './pages/not-authorized/NotAuthorized.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/pricing',
      component: Pricing
    },
    {
      path: '/contact',
      component: ContactUs
    },
    {
      path: '/books',
      component: Books,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('username') !== null) {
          next();
        } else {
          next('/notauthorized');
        }
      },
    },
    {
      path: '/notauthorized',
      component: NotAuthorized,
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
});

// router.beforeEach(() => {
//   if (localStorage.getItem('username') === null) {
//     console.log('this is atest guard');
//   }
// });

export default router;
