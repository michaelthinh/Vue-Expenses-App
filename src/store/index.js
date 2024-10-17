import { createStore } from "vuex";

import rootMutations from "./mutations";
import rootActions from "./actions";
import rootGetters from "./getters";

const store = createStore({
    state() {
        return {
            chosenCategory: "",
            histories: JSON.parse(localStorage.getItem("histories")) || [],
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters,
});

export default store;
