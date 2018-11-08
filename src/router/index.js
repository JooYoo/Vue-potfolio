import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/home/HomePage.vue";
import ProjectPage from "../pages/project/ProjectPage.vue";

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
    }],
});