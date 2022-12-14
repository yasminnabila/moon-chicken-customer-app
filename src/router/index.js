import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import FavoriteView from "../views/FavoriteView.vue";
import MenuDetailView from "../views/MenuDetailView.vue";
import foodJson from "../assets/db/food.json";
import FavoriteNotFound from "../views/FavoriteNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoriteView,
    },
    {
      path: "/food/:id",
      name: "fooddetail",
      component: MenuDetailView,
      beforeEnter(to) {
        const id = parseInt(to.params.id);
        const localFood = foodJson;
        const exists = localFood.some((food) => food.id === id);

        if (!exists) {
          return {
            name: "not-found",
            params: { pathMatch: to.path.substring(1).split("/") },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: FavoriteNotFound,
    },
  ],
});

router.beforeEach((to, from) => {
  if (!localStorage.getItem("access_token") && to.name === "favorites") {
    return { path: "/login" };
  } else if (
    localStorage.getItem("access_token") && to.name === "login" ||
    localStorage.getItem("access_token") && to.name === "register"
  ) {
    return { path: "/" };
  }
});

export default router;
