import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import SetGoal from "../pages/SetGoal.vue";
import ChooseCategory from "../pages/ChooseCategory.vue";
import ExpenseInfo from "../pages/ExpenseInfo.vue";

const routes = [
    { path: "/", component: MainPage },
    { path: "/set-goal", component: SetGoal },
    { path: "/set-goal/choose-category", component: ChooseCategory },
    { path: "/detail/:expenseId", component: ExpenseInfo },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
