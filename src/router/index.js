import { createWebHistory, createRouter } from "vue-router"
import HomePlaning from "@/components/HomePlaning.vue"
import PageNotFound from '@/components/PageNotFound.vue'
import GamePlaning from '@/components/GamePlaning.vue'

const routes = [
    {
        path: "/planing-poker-app",
        name: "Home",
        component: HomePlaning,
    },
    {
        path: "/planing-poker-app/planing",
        name: "GamePlaning",
        component: GamePlaning,
    },
    {
        path: '/:pathMatch(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router