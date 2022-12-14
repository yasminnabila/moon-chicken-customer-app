<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "NavBar",
  methods: {
    ...mapActions(useUserStore, ["handleLogOut", "checkLogin"]),
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin"]),
    infoUser() {
      return {
        username: localStorage.getItem("username"),
      };
    },
  },
};
</script>

<template>
  <nav
    class="navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom"
    id="navbar-menu"
  >
    <div class="container-fluid" style="height: 90px">
      <div>
        <!-- COMPANY LOGO -->
        <a
          @click.prevent="$router.push('/')"
          class="navbar-brand flex me-30"
          href="#"
        >
          <img
            src="../assets/images/Logo_Moon_Chicken.png"
            alt="logo"
            width="70"
            class="m-auto"
          />
        </a>
      </div>
      <div class="justify-content-sm-center">
        <!-- COMPANY NAME -->
        <a class="navbar-brand display-4" href="#">Moon Chicken</a>
      </div>
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar-menu"
        aria-controls="sidebar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-login">
        <div class="navbar">
          <ul class="navbar-nav mr-auto">
            <!-- BUTTON FAVORITES -->
            <li v-if="isLogin" class="nav-item active">
              <a
                @click.prevent="$router.push(`/favorites`)"
                class="nav-link display-3"
                aria-current="page"
                href="#"
              >
                Favorites
              </a>
            </li>
            <!-- BUTTON FAVORITES END -->
          </ul>
        </div>
      </div>

      <div class="align-items-sm-center">
        <ul class="navbar-nav mr-auto align-items-sm-center">
          <!-- GREETING CUSTOMER -->
          <li v-if="isLogin" class="nav-item">
            <a class="nav-link text-dark display-3">
              <span class="icon material-symbols-outlined me-2 display-4"></span
              >Annyeong,
              <span id="nav-username">{{ infoUser.username }}!</span></a
            >
          </li>
          <!-- GREETING CUSTOMER END -->
          <!-- BUTTON LOGIN -->
          <li v-if="!isLogin" class="nav-item active">
            <div>
              <a
                @click="$router.push('/login')"
                class="nav-link display-3"
                href="#"
              >
                Login
              </a>
            </div>
          </li>
          <!-- BUTTON LOGIN END -->
          <!-- BUTTON REGISTER -->
          <li v-if="!isLogin" class="nav-item active">
            <div>
              <a
                @click="$router.push('/register')"
                class="nav-link display-5"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </li>
          <!-- BUTTON REGISTER END -->
          <!-- BUTTON LOGOUT -->
          <li class="nav-item active">
            <div v-if="isLogin === true">
              <a @click.prevent="handleLogOut" class="nav-link" href="#"
                >Logout</a
              >
            </div>
          </li>
          <!-- BUTTON LOGOUT END -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
