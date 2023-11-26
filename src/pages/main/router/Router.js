import {createWebHistory,createRouter} from "vue-router";
import Login from "@/pages/login/Login.vue";
import Home from "@/pages/main/Home.vue";
import Analysis from "@/pages/main/components/Analysis.vue";
import Articles from "@/pages/main/components/Articles.vue";
import Intake from "@/pages/main/components/Intake.vue"
import Resource from "@/pages/main/components/Resource.vue";
const Router= createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/home/articles',
            component:Articles,
        },
        {
            path:'/home/analysis',
            component:Analysis
        },
        {
            path:'/home/intake',
            component:Intake
        },
        {
            path:'/home/resource',
            component:Resource
        }
    ]
})

export default Router