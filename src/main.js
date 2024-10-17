import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faDumbbell } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown, faPlus, faDumbbell);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

router.beforeEach((to, from, next) => {
    console.log(`Navigating to ${to.path}`);
    next();
});

app.use(router);

app.mount("#app");
