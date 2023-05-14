<script>
export default {
  name: "Main",
};
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/general" as *;
@use "../style/partials/variables" as *;

main {
  margin-top: 100px;
  padding: 0 20px;
  background-color: $background;
  overflow: hidden;
  overflow-y: auto;
}
</style>
