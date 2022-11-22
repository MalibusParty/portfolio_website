import { createRouter, createWebHashHistory } from "vue-router";
import TitleView from '@/views/TitleView.vue';
import ProjectOne from '@/views/ProjectOne.vue';
import ProjectTwo from '@/views/ProjectTwo.vue';
import ProjectOneInfo from '@/views/ProjectOneInfo.vue';
import ProjectTwoInfo from '@/views/ProjectTwoInfo.vue';
import ImpressumView from '@/views/ImpressumView.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
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
    }, {
        path: '/impressum',
        name: 'impressum',
        component: ImpressumView
    }]
})


export default router;