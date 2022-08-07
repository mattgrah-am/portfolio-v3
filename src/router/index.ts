import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ThoughtsView from "@/views/ThoughtsView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/projects", name: "projects", component: ProjectsView },
  { path: "/thoughts", name: "thoughts", component: ThoughtsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router