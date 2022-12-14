import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = "https://moon-chicken.herokuapp.com";
const baseQRUrl = "https://moon-chicken-customer.web.app";

export const useFoodStore = defineStore("food", {
  state: () => {
    return {
      allFood: [],
      allFavorite: [],
      foodDetail: [],
      QRCode: {},
      totalPage: 0,
      currentPage: 1,
      search: "",
    };
  },
  actions: {
    async readFood(page) {
      try {
        if (!page) {
          page = 1;
        }
        let dataFood = await axios({
          url: baseUrl + `/pub/food?search=${this.search}&&page=${page}`,
          method: "GET",
        });
        this.allFood = dataFood.data.data;
        this.totalPage = dataFood.data.totalPage;
        this.currentPage = dataFood.data.currentPage;
      } catch (error) {
        console.log(error);
      }
    },
    async readFoodById(id) {
      console.log(id);
      try {
        let dataFood = await axios({
          method: `GET`,
          url: baseUrl + `/pub/food/${id}`,
          headers: {
            access_token: localStorage.getItem(`access_token`),
          },
        });
        this.foodDetail = dataFood.data;
        this.$router.push(`/food/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
    async readAllFavorites() {
      try {
        let dataFavorite = await axios({
          method: `GET`,
          url: baseUrl + `/pub/favorites`,
          headers: {
            access_token: localStorage.getItem(`access_token`),
          },
        });
        this.allFavorite = dataFavorite.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops, something's not right!",
          text: `${error.response.data.message}`,
        });
        this.$router.push("/");
      }
    },
    async addFavorite(id) {
      console.log(id);
      try {
        await axios({
          method: "POST",
          url: baseUrl + `/pub/favorites/${id}`,
          headers: {
            access_token: localStorage.getItem(`access_token`),
          },
        });
        Swal.fire("Yeay!", "Menu has been added to your favorite", "success");
        this.readAllFavorites();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Sorry, add menu failed!",
          text: `${error.response.data.message}`,
        });
        this.$router.push("/");
      }
    },
    async showQR(id) {
      try {
        let { data } = await axios({
          method: "GET",
          url: `https://api.happi.dev/v1/qrcode?data=${baseQRUrl}/food/${id}`,
          headers: {
            "x-happi-key": `ce2575uqw5pW4Mz6UFQ1p7u6pW3t4rF5kTIGI1HElu1mEfHBJH01OdEP`,
          },
        });
        this.QRCode = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
