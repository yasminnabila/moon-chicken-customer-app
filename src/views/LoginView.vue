<script>
import Buttons from "../components/Buttons.vue";
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "LoginView",
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useUserStore, ["email", "password"]),
  },
  methods: {
    ...mapActions(useUserStore, ["submitLogin", "handleCredentialResponse"]),
    callback(response) {
      this.handleCredentialResponse(response);
      console.log("Handle the response", response);
    },
  },
  components: { Buttons },
};
</script>

<template>
  <section
    class="vh-100"
    style="background-color: #d1c4e9; min-height: 100vh"
    id="login-section"
  >
    <div
      class="container h-50 justify-content-center align-items-center"
      style="transform: scale(90%)"
    >
      <div class="row d-flex h-50 justify-content-center align-items-center">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Welcome Back!
                  </p>
                  <p class="text-center h4 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    To access your account, <br />
                    please sign in here
                  </p>
                  <form
                    class="mx-1 mx-md-4"
                    id="login-form"
                    @submit.prevent="submitLogin(loginData)"
                    method="post"
                  >
                    <!-- Email -->
                    <div class="mb-3 mt-3">
                      <div class="d-flex justify-content-between">
                        <label for="login-email">E-mail</label>
                        <label class="text-danger text-end fw-bold">*</label>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        id="login-email"
                        v-model="loginData.email"
                        placeholder="Enter email address ..."
                        autocomplete="off"
                        required
                      />
                    </div>
                    <!-- Email End -->

                    <!-- Password -->
                    <div class="mb-4">
                      <div class="d-flex justify-content-between">
                        <label for="login-password">Password</label>
                        <label class="text-danger text-end fw-bold">*</label>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        id="login-password"
                        v-model="loginData.password"
                        placeholder="Enter your password ..."
                        autocomplete="off"
                        required
                      />
                    </div>
                    <!-- Password End -->

                    <!-- Register Button -->
                    <Buttons
                      class="btn btn-md btn-primary rounded-pill w-100 p-2 mt-3"
                      style="background-color: #6a1b9a"
                      type="submit"
                      title="Sign In"
                      @click="submitLogin"
                    />
                    <!-- Register Button End -->

                    <!-- Register Form End -->
                  </form>

                  <p class="text-center text-muted mt-5 mb-0">
                    Or sign in with:
                  </p>
                  <br />
                  <!-- Google Login Button -->
                  <GoogleLogin :callback="callback" />
                  <!-- Google Login Button End -->
                  <p class="text-center text-muted mt-5 mb-0">
                    Not registered?
                    <a
                      @click.prevent="$router.push(`/register`)"
                      href="#!"
                      class="fw-bold text-body"
                      ><u>Sign Up</u></a
                    >
                  </p>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="../assets/images/Login.jpeg"
                    class="img-fluid"
                    alt="Session Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
