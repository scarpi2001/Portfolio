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
            components: [Home, About, Cv, Projects]
        }
    },
}
</script>

<template>
    <!-- in questo modo con il componente dinamico i componenti vengono renderizzati e distrutti ogni volta che active cambia (questo ottimizza il rendering iniziale) -->
    <main>
        <section>
            <component :is="components[store.active]" />
        </section>
    </main>

    <!-- in questo modo i componenti vengano renderizzati dal principio e mostrati o nascosti in base alla variabile visible (ottimizza il toggle delle voci di menu) -->
    <!-- <main>
        <section>
            <component :is="components[store.active]" v-show="store.visible" />
        </section>
    </main> -->
</template>

<style lang="scss" scoped>
@use "../style/general" as*;
@use "../style/partials/variables" as*;

main {
    height: calc( 100vh - 160px);
    margin-top: 100px;
    background-color: $background;

    section {
        height: 100%;
    }
}

</style>