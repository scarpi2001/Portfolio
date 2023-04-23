<script>
export default {
    name: "Home",
}
</script>

<template>

    <div class="container">
        <div class="card">
            <h1>Marco Scarpelli</h1>
            <h2>Junior Full Stack Web Developer</h2>
        </div>
        
        <div class="card">
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
    height: calc(100vh - 180px);
    gap: 50px;

    h1 {
        font-size: 70px;
        color: $secondary;
    }

    p {
        font-size: 22px;
    }
}

//s version
@media screen and (max-width: 660px) {
    .container {
        flex-direction: column;
        justify-content: space-between;
        padding: 80px 0;
        height: auto;
    }
}

//xs version
@media screen and (max-width: 360px) {
    .container {
        h1 {
            font-size: 50px;
        }

        .card {
            h2 {
                font-size: 28px;
            }
        }

        p {
            font-size: 26px
        }
    }
    
}
</style>