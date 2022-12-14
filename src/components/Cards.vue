<script>
import { mapActions } from "pinia";
import { useFoodStore } from "../stores/food";

export default {
  name: "Cards",
  props: ["data", "name"],
  methods: {
    ...mapActions(useFoodStore, ["readFoodById", "addFavorite"]),
    rupiah() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.data.price);
    },
  },
};
</script>

<template>
  <!-- MENU CARD -->
  <div
    v-if="name === 'food'"
    class="card shadow-sm"
    style="width: 16rem; height: auto"
    data-aos="fade-up"
  >
    <img :src="data.imgUrl" class="bd-placeholder-img card-img-top" alt="..." />
    <div class="card-body">
      <i @click="addFavorite(data.id)" class="bi bi-heart-fill pe-auto"></i>
      <h5 class="card-title mb-4">{{ data.name }}</h5>
      <p class="card-text mb-3">
        {{ rupiah() }}
      </p>
      <button
        type="button"
        class="btn btn-light"
        style="background-color: #d1c4e9"
        @click.prevent="readFoodById(data.id)"
      >
        Detail
      </button>
    </div>
  </div>
  <!-- MENU CARD END -->

  <!-- FAVORITE CARD -->
  <div
    v-if="name === 'favorites'"
    class="card"
    style="width: 14rem; height: auto"
  >
    <img
      :src="data.Food.imgUrl"
      class="w-full h-full object-center object-cover opacity-90 group-hover:opacity-100"
    />
    <div class="card-body">
      <h5>{{ data.Food.name }}</h5>
      <p>{{ data.Food.description }}</p>
    </div>
  </div>
  <!-- FAVORITE CARD END -->
</template>

<style>
.bi-heart-fill:hover {
  color: #9575cd;
}
</style>
