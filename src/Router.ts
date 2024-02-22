import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/HomePage/index.vue')
        },
        {
            path: '/beer/:beerId',
            name: 'Beer',
            component: () => import('./views/BeerPage/index.vue')
        },
    ]
})
