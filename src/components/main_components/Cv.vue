<script>
import Anchor from "./Anchor.vue";

export default {
  name: "Cv",
  components: {
    Anchor,
  },
};
</script>

<template>
  <div class="container">
    <a href="/cv.pdf" class="cv_button" target="_blank"> Scarica il mio CV </a>

    <div class="image-container">
      <img src="/cv.png" alt="CV" />
    </div>

    <a href="/cv.pdf" class="cv_button" target="_blank"> Scarica il mio CV </a>
    <!-- anchor top -->
    <Anchor class="anchor" />
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/general" as *;
@use "../../style/partials/variables" as *;

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 80px 0;

  .image-container {
    max-width: 950px;

    img {
      border-radius: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  .cv_button {
    background-color: $secondary;
    color: $primary;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}

@media screen and (max-width: 600px) {
  .container {
    .anchor {
      display: none;
    }
  }
}
</style>
