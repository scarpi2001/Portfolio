<script>
import { store } from '../store';

import Home from './main_components/Home.vue';
import About from './main_components/About.vue';
import Cv from './main_components/Cv.vue';

export default {
    name: "Main",

    components: {
        Home,
        About,
        Cv,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <section v-show="store.active === 0">
        <Home />
    </section>

    <section v-show="store.active === 1">
        <About />
    </section>

    <section v-show="store.active === 2">
        <Cv />
    </section>
    
</template>

<style lang="scss" scoped>
@use "../style/general" as*;

</style>