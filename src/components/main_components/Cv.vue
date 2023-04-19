<script>
export default {
    name: "Cv",
}
</script>

<template>

    <div class="container">
        <a href="Marco_Scarpelli_CV.pdf">
            Scarica il mio CV
        </a>

        <img src="Marco_Scarpelli_CV.png" alt="CV">
        
        <a href="Marco_Scarpelli_CV.pdf">
            Scarica il mio CV
        </a>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../../style/general" as*;
@use "../../style/partials/variables" as*;

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 80px 0;

    img {
        border-radius: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    a {
        background-color: $secondary;
        color: $primary;
        border-radius: 20px;
        padding: 10px 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
}
</style>