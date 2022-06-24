import { createRouter, createWebHistory } from "vue-router";
import TitleView from '@/views/TitleView.vue';
import ProjectOne from '@/views/ProjectOne.vue';
import ProjectTwo from '@/views/ProjectTwo.vue';
import ProjectOneInfo from '@/views/ProjectOneInfo';
import ProjectTwoInfo from '@/views/ProjectTwoInfo';

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
    }, {
        path: '/projectone/info',
        name: 'projoneinfo',
        component: ProjectOneInfo
    }, {
        path: '/projecttwo/info',
        name: 'projtwoinfo',
        component: ProjectTwoInfo
    }]
})

export default router;