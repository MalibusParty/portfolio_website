import { createRouter, createWebHistory } from "vue-router";
import TitleView from '@/views/TitleView.vue';
import ProjectOne from '@/views/ProjectOne.vue';
import ProjectTwo from '@/views/ProjectTwo.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'title',
        component: TitleView
    }, {
        path: '/projectone',
        name: 'projectOne',
        component: ProjectOne
    }, {
        path: '/projecttwo',
        name: 'projectTwo',
        component: ProjectTwo
    }]
})

export default router;