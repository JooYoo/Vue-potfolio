import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/home/HomePage.vue";
import ProjectPage from "../pages/project/ProjectPage.vue";
import ProjectContent1 from "../pages/project/contents/project.content.1.vue";
import ProjectContent8 from "../pages/project/contents/project.content.8.vue";

Vue.use(Router);

export default new Router({
    routes:[{
        path: '/',
        name:'Home',
        component: HomePage,
    },{
        path: '/project',
        name:'Project',
        component: ProjectPage,
    },{
        path:'/project-1',
        name:'project-id-1',
        component: ProjectContent1,
    },{
       path:'/project-8',
       name:'project-id-8',
       component: ProjectContent8, 
    }],
});