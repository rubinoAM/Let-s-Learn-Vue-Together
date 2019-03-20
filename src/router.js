import VueRouter from 'vue-router';
import LoginPage from './pages/login/LoginPage.vue';
import PricingPage from './pages/pricing/PricingPage.vue';
import ContactPage from './pages/contact/ContactPage.vue';
import BooksPage from './pages/books/BooksPage.vue';
import NotAuthorizedPage from './pages/error/NotAuthorizedPage.vue';
import BookListItemViewPage from './pages/books/BookListItemViewPage.vue';
import UnauthenticatedPages from './components/UnauthenticatedPages.vue';
import AuthenticatedPages from './components/AuthenticatedPages.vue';
import LandingPage from './pages/landing/LandingPage.vue';
import NotFoundPage from './pages/error/NotFoundPage.vue';
import NotFoundPageAuthenticated from './pages/error/NotFoundPageAuthenticated.vue';
import HomePage from './pages/home/HomePage.vue';
import ProfilePage from './pages/profile/ProfilePage.vue';

// lazy loading route
const UpgradePage = () => import('./pages/upgrade/UpgradePage.vue');

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: UnauthenticatedPages,
      // route guard to run logic before entering route
      beforeEnter: (to, from, next) => {
        // checking for item in local storage / user auth
        if (localStorage.getItem('username') !== null) {
          // route to proper authenticated pages if this value isn't null
          next('/app');
        } else {
          // continue to directed route of "/"
          next();
        }
      },
      // nested routes
      children: [
        {
          path: '',
          component: LandingPage,
        },
        {
          path: '/login',
          component: LoginPage,
        },
        {
          path: '/pricing',
          component: PricingPage,
        },
        {
          path: '/contact',
          component: ContactPage,
        },
      ]
    },
    {
      path: '/app',
      component: AuthenticatedPages,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('username') !== null) {
          next();
        } else {
          next('/notauthorized');
        }
      },
      children: [
        {
          path: '',
          component: HomePage,
        },
        {
          path: '/app/profile',
          component: ProfilePage,
        },
        {
          path: '/app/books',
          component: BooksPage,
        },
        {
          path: '/app/books/:id',
          component: BookListItemViewPage,
          props: true,
        },
        // lazy loaded route
        {
          path: '/app/upgrade',
          component: UpgradePage,
        },
        {
          path: '*',
          component: NotFoundPageAuthenticated,
        },
      ]
    },
    {
      path: '/notauthorized',
      component: NotAuthorizedPage,
    },
    {
      path: '*',
      component: NotFoundPage,
    },
  ],
});

// router.beforeEach(() => {
//   if (localStorage.getItem('username') === null) {
//     console.log('this is atest guard');
//   }
// });

export default router;
