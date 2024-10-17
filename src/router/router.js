import { createWebHistory, createRouter } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import SetGoal from "../pages/SetGoal.vue";
import ChooseCategory from "../pages/ChooseCategory.vue";
import ExpenseInfo from "../pages/ExpenseInfo.vue";
import EditExpense from "../pages/EditExpense.vue";

const routes = [
    { path: "/", component: MainPage },
    { path: "/set-goal", component: SetGoal },
    { path: "/set-goal/choose-category", component: ChooseCategory },
    { path: "/detail/:expenseId", component: ExpenseInfo },
    { path: "/edit/:expenseId", component: EditExpense },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
