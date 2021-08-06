import { createRouter, createWebHistory } from "vue-router"
//import HelloWorld from "../components/HelloWorld.vue"
import About from "../components/About.vue"
import Contact from "../components/Contact.vue"

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () =>
      import("../components/HelloWorld.vue")
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
