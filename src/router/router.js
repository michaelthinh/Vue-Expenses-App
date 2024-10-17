import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import SetGoal from "../pages/SetGoal.vue";

const routes = [
    { path: "/", component: MainPage },
    { path: "/set-goal", component: SetGoal },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
