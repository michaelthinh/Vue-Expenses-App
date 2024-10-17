import { createStore } from "vuex";

import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";

const store = createStore({
    state() {
        return {
            chosenCategory: "",
            histories: [
                {
                    id: "1",
                    category: "gym",
                    budget: 20,
                    type: "outcome",
                    date: "2024/10/15",
                },
                {
                    id: "2",
                    category: "clothes",
                    budget: 20,
                    type: "income",
                    date: "2024/10/15",
                },
            ],
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters,
});

export default store;
