<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { useUserStore } from "../stores/user";

export default {
  name: "MenuDetailView",
  methods: {
    ...mapActions(useFoodStore, ["readFoodById", "showQR"]),
    ...mapActions(useUserStore, ["checkLogin"]),
    rupiah() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.foodDetail.price);
    },
  },
  computed: {
    ...mapState(useFoodStore, ["foodDetail", "QRCode"]),
  },
  created() {
    this.checkLogin();
    this.readFoodById(this.$route.params.id);
    this.showQR(this.$route.params.id);
  },
  components: { NavBar, Footer },
};
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh">
    <div class="row">
      <NavBar />
    </div>
    <div class="container mt-3 mb-3">
      <div class="card">
        <div class="row mt-5">
          <!-- LEFT COLUMN-->
          <div class="col-7">
            <!-- Image -->
            <div class="text-center mb-5">
              <img id="food-image" :src="foodDetail.imgUrl" />
            </div>
            <!-- Image End -->
          </div>
          <!-- LEFT COLUMN END -->
          <!-- RIGHT COLUMN -->
          <div class="col-5">
            <h2>{{ foodDetail.name }}</h2>
            <p>{{ foodDetail.description }}</p>
            <p class="card-text">
              <small class="text-muted">Price: {{ rupiah() }}</small>
            </p>
            <!-- QR CODE -->
            <div class="row mt-5" style="justify-content: center">
              <div class="card" id="qr-image">
                <p class="m-2" style="text-align: center">Share QR Code</p>
                <img :src="QRCode.qrcode" alt="" />
              </div>
            </div>
            <!-- QR CODE END -->
          </div>
        </div>
        <!-- RIGHT COLUMN END -->
      </div>
    </div>
  </div>
  <Footer />
</template>

<style>
#food-image {
  width: 450px;
}
#qr-image {
  width: 200px;
}
</style>
