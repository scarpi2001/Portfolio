<script>
export default {
  name: "Anchor",
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;

      // Verifica se si ha scrollato più di un tot
      this.isScrolled = scrollPosition >= 250;
    },
    scrollToTop() {
      const startPosition = window.scrollY;
      const duration = 500; // Durata dell'animazione in millisecondi
      const startTime = performance.now();

      function scrollStep(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeOutQuart(progress);
        const distance = startPosition * (1 - easeProgress);

        window.scrollTo(0, distance);

        if (elapsed < duration) {
          requestAnimationFrame(scrollStep);
        }
      }

      function easeOutQuart(t) {
        return 1 - --t * t * t * t;
      }

      requestAnimationFrame(scrollStep);
    },
  },
};
</script>

<template>
  <a class="top_anchor" v-show="isScrolled" @click="scrollToTop"
    ><font-awesome-icon :icon="['fas', 'angle-up']"
  /></a>
</template>

<style lang="scss" scoped>
@use "../../style/general" as *;
@use "../../style/partials/variables" as *;

.top_anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: fixed;
  bottom: 120px;
  right: 60px;
  background-color: $secondary;
  color: $primary;
  cursor: pointer;
  animation: fadeIn 1s ease forwards;

  &:hover {
    animation: bounce 0.5s infinite;
    color: $primary;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
}

//s version
@media screen and (max-width: 600px) {
  .top_anchor {
    width: 40px;
    height: 40px;
    bottom: 100px;
    right: 30px;
  }
}
</style>
