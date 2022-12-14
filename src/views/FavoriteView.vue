<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import { useUserStore } from "../stores/user";
import NavBar from "../components/NavBar.vue";
import Cards from "../components/Cards.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "FavoriteView",
  methods: {
    ...mapActions(useFoodStore, ["readAllFavorites"]),
    ...mapActions(useUserStore, ["checkLogin"]),
  },
  computed: {
    ...mapState(useFoodStore, ["allFavorite"]),
  },
  created() {
    this.readAllFavorites();
    this.checkLogin();
  },
  components: { NavBar, Cards, Footer },
};
</script>

<template>
  <div class="row">
    <NavBar />
  </div>
  <div class="container mt-5" style="min-height: 100vh">
    <h2>My Favorite Menu</h2>
    <p class="page-title__small-type">Total: {{ allFavorite.length }} Items</p>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-sm-3"
          v-for="favorite in allFavorite"
          :key="favorite.id"
        >
          <div class="col-12 mt-4" data-aos="flip-right">
            <Cards v-bind:data="favorite" name="favorites" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style></style>
