<script>
export default {
  name: "Footer",
};
</script>

<template>
  <div class="container-fluid">
    <footer
      class="d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top"
    >
      <div class="col-md-6 d-flex justify-content-start align-items-center">
        <div class="d-flex justify-content-start">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              <use xlink:href="#bootstrap" />
            </svg>
          </a>
          <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Yasmin Nabila</span>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <span class="mb-3 mb-md-0 text-muted">Customer Web App Project</span>
      </div>
    </footer>
  </div>
</template>
