import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/main_components/Home.vue";
import About from "../components/main_components/About.vue";
import Cv from "../components/main_components/Cv.vue";
import Projects from "../components/main_components/Projects.vue";
import Contacts from "../components/main_components/Contacts.vue";

//rotte
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/cv", component: Cv },
  { path: "/projects", component: Projects },
  { path: "/contacts", component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "selected",
});

export default router;
