import { createRouter, createWebHistory } from "vue-router";
import TitleView from '@/views/TitleView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'title',
        component: TitleView
    }]
})

export default router;