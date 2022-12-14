<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useFoodStore } from "../stores/food";
import { useUserStore } from "../stores/user";
import NavBar from "../components/NavBar.vue";
import Carousel from "../components/Carousel.vue";
import Cards from "../components/Cards.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HomeView",
  components: { NavBar, Carousel, Cards, Footer },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useFoodStore, ["readFood"]),
    ...mapActions(useUserStore, ["checkLogin"]),
    submitSearch() {
      this.readFood();
      this.search = "";
    },
  },
  computed: {
    ...mapState(useFoodStore, ["allFood", "totalPage", "currentPage"]),
    ...mapState(useUserStore, ["isLogin"]),
    ...mapWritableState(useFoodStore, ["search"]),
  },
  created() {
    this.readFood();
    this.checkLogin();
  },
};
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh">
    <!-- SECTION NAVBAR -->
    <div class="row">
      <NavBar />
      <!-- SECTION NAVBAR END -->
    </div>
    <!-- SECTION CAROUSEL -->
    <Carousel v-if="!isLogin" />
    <!-- CAROUSEL END -->
    <!-- HEADINGS -->
    <div class="container-sm text-center mt-5" data-aos="zoom-in">
      <h1 class="display-4 justify-content-center">Flavors of The Galaxy</h1>
      <p class="h4 text-muted justify-content-center">
        Like the first time humans ever reached the moon: exciting, thrilling,
        and eye - opening.
      </p>
      <p class="h4 text-muted justify-content-center">
        Taste the galaxy at your fingertips with Moon Chicken.
      </p>
    </div>

    <!-- HEADINGS END -->
    <div class="container-fluid">
      <!-- SECTION FORM SEARCH -->
      <div class="container w-50 mt-5">
        <form @submit.prevent="submitSearch">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search menu here..."
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <!-- SECTION FORM SEARCH END-->

      <!-- MENU CARD -->
      <div class="row mt-5">
        <div
          v-for="(food, index) in allFood"
          :key="index"
          class="col-3 mb-3"
          style="display: flex; justify-content: center"
        >
          <Cards :data="food" name="food" />
        </div>
      </div>
      <!-- MENU CARD END -->
      <!-- PAGINATION  -->
      <nav aria-label="..." class="mt-5">
        <ul class="pagination" style="display: flex; justify-content: center">
          <li class="page-item disabled"></li>

          <li v-for="index in totalPage" class="page-item">
            <a
              style="background-color: #d1c4e9"
              @click.prevent="readFood(index)"
              href=""
              class="page-link link-dark"
              >{{ index }}</a
            >
          </li>
          <li class="page-item"></li>
        </ul>
      </nav>
      <!-- PAGINATION END -->
    </div>
  </div>
  <Footer />
</template>
