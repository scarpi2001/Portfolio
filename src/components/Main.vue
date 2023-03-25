<script>
import { store } from '../store';

import Home from './main_components/Home.vue';
import About from './main_components/About.vue';
import Cv from './main_components/Cv.vue';
import Projects from './main_components/Projects.vue';

export default {
    name: "Main",

    components: {
        Home,
        About,
        Cv,
        Projects,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <main>
        <section v-show="store.active === 0">
            <Home />
        </section>

        <section v-show="store.active === 1">
            <About />
        </section>

        <section v-show="store.active === 2">
            <Cv />
        </section>

        <section v-show="store.active === 3">
            <Projects />
        </section>
    </main>
    
</template>

<style lang="scss" scoped>
@use "../style/general" as*;
@use "../style/partials/variables" as*;

main {
    height: 100vh;
    margin-top: 80px;
    background-color: $background;

    section {
        height: 100%;
    }
}

</style>