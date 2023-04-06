<script>
export default {
    name: "About",
}
</script>

<template>

    <div class="container">
        <h1>Work in progress...</h1>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../../style/general" as*;
@use "../../style/partials/variables" as*;

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 100%;
    margin: 0 auto;

    h1 {
        font-size: 40px;
        color: $secondary;
    }
}
</style>