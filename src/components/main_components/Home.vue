<script>
export default {
    name: "Home",
}
</script>

<template>

    <div class="container">
        <h1>Marco Scarpelli</h1>
        <h2>Junior Full Stack Web Developer</h2>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../../style/general" as*;
@use "../../style/partials/variables" as*;

.container {
    padding: 260px 100px;

    h1 {
        font-size: 80px;
        color: $secondary;
    }
}

</style>