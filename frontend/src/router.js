import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/login",
    name: "login",
    // component: () => import("./components/TutorialsList")
  },
  {
    path: "/register",
    name: "register",
    // component: () => import("./components/Tutorial")
  },
  {
    path: "/add",
    name: "add",
    // component: () => import("./components/AddTutorial")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;