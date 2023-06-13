<script>
export default {
  name: "Fail",
};
</script>

<template>
  <div class="container">
    <div class="card">
      <h1>Purtroppo c'è stato un errore nell'invio del messaggio</h1>
      <router-link to="/contacts">
        <button>Back to form</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/general" as *;
@use "../../style/partials/variables" as *;

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 180px);
  text-align: center;

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
}
</style>
