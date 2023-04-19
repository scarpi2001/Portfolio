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
        <component :is="components[store.active]" />
    </main>

    <!-- in questo modo i componenti vengano renderizzati dal principio e mostrati o nascosti in base alla variabile visible (ottimizza il toggle delle voci di menu) -->
    <!-- <main>
        <component :is="components[store.active]" v-show="store.visible" />
    </main> -->
</template>

<style lang="scss" scoped>
@use "../style/general" as*;
@use "../style/partials/variables" as*;

main {
    margin-top: 100px;
    padding: 0 20px;
    background-color: $background;
    overflow: hidden;
    overflow-y: auto;
}

</style>