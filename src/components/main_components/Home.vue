<script>
export default {
    name: "Home",
}
</script>

<template>

    <div class="container">
        <div>
            <h1>Marco Scarpelli</h1>
            <h2>Junior Full Stack Web Developer</h2>
        </div>
        
        <div>
            <h2>
                Benvenuti nel mio sito! 
            </h2>
            <p>
                Sono Marco Scarpelli, un giovane sviluppatore web appassionato di informatica,<br> 
                sentitevi liberi di navigare questo sito per avere qualche informazione su di me,<br>
                se volete potete dare un occhiata al mio cv e ai miei progetti!
            </p>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../../style/general" as*;
@use "../../style/partials/variables" as*;

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 50px;

    h1 {
        font-size: 70px;
        color: $secondary;
    }

    p {
        font-size: 18px;
    }
}

</style>