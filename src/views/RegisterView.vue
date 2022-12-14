<script>
import Buttons from "../components/Buttons.vue";
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "RegisterView",
  data() {
    return {
      registerData: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, [`submitRegister`]),
  },
  components: { Buttons },
};
</script>

<template>
  <section
    class="vh-100"
    style="background-color: #d1c4e9; min-height: 100vh"
    id="register-section"
  >
    <div
      class="container h-50 align-items-center justify-content-center;"
      style="transform: scale(80%)"
    >
      <div class="row d-flex h-50 justify-content-center align-items-center">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-15">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign Up
                  </p>
                  <p class="text-center h4 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Enter your personal details and start your journey with us
                  </p>
                  <form
                    @submit.prevent="submitRegister(registerData)"
                    class="mx-1 mx-md-4"
                    id="signup-form"
                  >
                    <!-- USERNAME -->
                    <div class="mb-3">
                      <div class="d-flex justify-content-between">
                        <label for="register-username">Username</label>
                        <label class="text-danger text-end fw-bold">*</label>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="register-username"
                        v-model="registerData.username"
                        placeholder="Enter your username ..."
                        autocomplete="off"
                        required
                      />
                    </div>
                    <!-- USERNAME END -->

                    <!-- EMAIL -->
                    <div class="mb-3">
                      <div class="d-flex justify-content-between">
                        <label for="register-email">Email</label>
                        <label class="text-danger text-end fw-bold">*</label>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        id="register-email"
                        v-model="registerData.email"
                        placeholder="Enter email address ..."
                        autocomplete="off"
                        required
                      />
                    </div>
                    <!-- EMAIL END -->

                    <!-- PASSWORD -->
                    <div class="mb-3">
                      <div class="d-flex justify-content-between">
                        <label for="register-password">Password</label>
                        <label class="text-danger text-end fw-bold">*</label>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        id="register-password"
                        v-model="registerData.password"
                        placeholder="Enter your password ..."
                        autocomplete="off"
                        required
                      />
                    </div>
                    <!-- PASSWORD END -->

                    <!-- PHONE NUMBER -->
                    <div class="mb-3">
                      <label for="register-phone">Phone Number</label>
                      <input
                        type="number"
                        class="form-control"
                        id="register-phone"
                        v-model="registerData.phoneNumber"
                        placeholder="Enter phone number (optional) ..."
                        autocomplete="off"
                      />
                    </div>
                    <!-- PHONE NUMBER END -->

                    <!-- ADDRESS -->
                    <div class="mb-3">
                      <label for="register-address">Address</label>
                      <textarea
                        class="form-control"
                        id="register-address"
                        v-model="registerData.address"
                        rows="3"
                        placeholder="Enter your address (optional) ..."
                        autocomplete="off"
                      ></textarea>
                    </div>
                    <!-- ADDRESS END -->

                    <!-- Register Button -->

                    <!-- BUTTON COMPONENTS -->
                    <Buttons
                      class="btn btn-md btn-primary rounded-pill w-100 p-2 mt-3"
                      type="submit"
                      title="Sign Up"
                      style="background-color: #6a1b9a"
                      @click="submitRegister"
                    />
                    <!-- BUTTON COMPONENTS END -->
                    <div>
                      <p class="text-center text-muted mt-5 mb-0">
                        I already have an account!
                        <a
                          @click.prevent="$router.push('/login')"
                          href="#!"
                          class="fw-bold text-body"
                          ><u>Sign In</u></a
                        >
                      </p>
                    </div>
                    <!-- Register Form End -->
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="../assets/images/Register.jpeg"
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
