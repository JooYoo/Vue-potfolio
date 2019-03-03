import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/home/HomePage.vue";
import ProjectPage from "../pages/project/ProjectPage.vue";
import ProjectContent1 from "../pages/project/contents/project.content.1.vue";
import ProjectContent2 from "../pages/project/contents/project.content.2.vue";
import ProjectContent3 from "../pages/project/contents/project.content.3.vue";
import ProjectContent4 from "../pages/project/contents/project.content.4.vue";
import ProjectContent5 from "../pages/project/contents/project.content.5.vue";
import ProjectContent6 from "../pages/project/contents/project.content.6.vue";
import ProjectContent7 from "../pages/project/contents/project.content.7.vue";
import ProjectContent8 from "../pages/project/contents/project.content.8.vue";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    }, {
        path: '/project',
        name: 'Project',
        component: ProjectPage,
    }, {
        path: '/project-1',
        name: 'project-id-1',
        component: ProjectContent1,
    }, {
        path: '/project-2',
        name: 'project-id-2',
        component: ProjectContent2,
    }, {
        path: '/project-3',
        name: 'project-id-3',
        component: ProjectContent3,
    }, {
        path: '/project-4',
        name: 'project-id-4',
        component: ProjectContent4
    }, {
        path: '/project-5',
        name:'project-id-5',
        component: ProjectContent5
    },{
        path: '/project-6',
        name: 'project-id-6',
        component: ProjectContent6,
    },{
        path:'/project-7',
        name:'project-id-7',
        component: ProjectContent7
    },{
        path:'/project-8',
        name:'project-id-8',
        component: ProjectContent8
    }],
});