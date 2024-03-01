import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/HomePage/index.vue'),
        },
        {
            path: '/beer/:beerId',
            name: 'Beer',
            component: () => import('./views/BeerDetailsPage/index.vue'),
        },
        {
            path: '/favorites',
            name: 'Favorites',
            component: () => import('./views/FavoritesPage/index.vue'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/LoginPage/index.vue'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('./views/RegisterPage/index.vue'),
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('./views/ProfilePage/index.vue'),
        },
    ],
});
