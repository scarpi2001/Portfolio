import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/main_components/Home.vue";
import About from "../components/main_components/About.vue";
import Cv from "../components/main_components/Cv.vue";
import Projects from "../components/main_components/Projects.vue";
import Contacts from "../components/main_components/Contacts.vue";
import Success from "../components/main_components/Success.vue";
import Fail from "../components/main_components/Fail.vue";

//rotte
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/cv", component: Cv },
  { path: "/projects", component: Projects },
  { path: "/contacts", component: Contacts },
  { path: "/success", component: Success },
  { path: "/404", component: Fail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "selected",
});

export default router;
