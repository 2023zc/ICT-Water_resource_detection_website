import {createWebHistory,createRouter} from "vue-router";
import Login from "@/pages/login/Login.vue"
import Home from "@/pages/main/Home.vue";
import Articles from "@/pages/main/components/Articles.vue";
import Analysis from "@/pages/main/components/Analysis.vue";
import Intake from "@/pages/main/components/Intake.vue";
import Resource from "@/pages/main/components/Resource.vue";
import Info from "@/pages/main/components/Info.vue";
import History_data from "@/pages/main/components/History_data.vue";
import Start_Analysis from "@/pages/main/components/Start_Analysis.vue";

const router= createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/login',
            component:Login
        },
        {
            path:'/',
            component:Login
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path: 'articles',
                    component: Articles,
                },
                {
                    path: 'analysis',
                    component: Analysis
                },
                {
                    path: 'intake',
                    component: Intake
                },
                {
                    path: 'resource',
                    component: Resource
                },
                {
                    path: 'info',
                    component: Info
                },
                {
                    path: 'historydata',
                    component:History_data
                },
                {
                    path:'start',
                    component:Start_Analysis
                }
            ],
        },
    ],


})



export default router