<script>
export default {
  name: "FavoriteNotFound",
};
</script>

<template>
  <div
    class="d-flex text-center align-items-sm-center justify-content-center"
    style="min-height: 100vh; background-color: #d1c4e9"
  >
    <div class="d-flex align-items-sm-center justify-content-center">
      <main class="px-3">
        <h1>
          Sorry, this page does not exist..
          <i class="bi bi-heartbreak-fill"></i>
        </h1>
        <p class="lead">
          But don't worry, you could find plenty of other things in our
          homepage!
        </p>
        <p class="lead">
          <button
            @click="$router.push('/')"
            type="button"
            class="btn btn-light"
          >
            Back to Homepage
          </button>
        </p>
        <img src="../assets/images/Logo_Moon_Chicken.png" width="300" />
      </main>
    </div>
  </div>
</template>
