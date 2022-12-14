import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = "https://moon-chicken.herokuapp.com";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLogin: false,
      password: "",
      email: "",
    };
  },
  actions: {
    checkLogin() {
      if (localStorage.access_token) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    async submitLogin(payload) {
      try {
        const { email, password } = payload;
        const dataLogin = await axios({
          method: "POST",
          url: baseUrl + `/pub/login`,
          data: {
            email,
            password,
          },
        });
        localStorage.setItem("access_token", dataLogin.data.access_token);
        localStorage.setItem("id", dataLogin.data.id);
        localStorage.setItem("email", dataLogin.data.email);
        localStorage.setItem("username", dataLogin.data.username);
        localStorage.setItem("role", dataLogin.data.role);
        Swal.fire(
          "Signing in success",
          `Welcome to Moon Chicken, ${dataLogin.data.username}!`,
          "success"
        );
        this.$router.push("/");
        this.isLogin = true;
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
    async submitRegister(payload) {
      try {
        const { username, email, password, phoneNumber, address } = payload;
        await axios({
          method: `POST`,
          url: baseUrl + `/pub/register`,
          data: {
            username,
            email,
            password,
            phoneNumber,
            address,
          },
        });
        Swal.fire({
          icon: "success",
          title: `You have been registered!`,
          text: "Now you may sign in to use our services",
          confirmButtonText: "Sign in now",
        });
        this.$router.push("/login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
    async handleLogOut() {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be missed!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#7b1fa2",
        cancelButtonColor: "#c2185b",
        confirmButtonText: "Signing out!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLogin = false;
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signed out",
            text: "See you later, Moonlander!",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.clear();
          this.$router.push(`/`);
        }
      });
    },
    async handleCredentialResponse(response) {
      try {
        console.log("Encoded JWT ID token: " + response.credential);
        const { credential } = response;
        const data = await axios({
          method: "POST",
          url: baseUrl + `/pub/google-sign-in`,
          headers: {
            access_token_google: credential,
          },
        });
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("id", data.data.id);
        localStorage.setItem("role", data.data.role);
        this.isLogin = true;
        this.$router.push("/");
        Swal.fire(
          "Signing in success",
          `Welcome to Moon Chicken, ${data.data.username}!`,
          "success"
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Signing in failed",
          text: "Please try again!",
          confirmButtonText: "Try Again",
        });
      }
    },
  },
});
