<script>
import { store } from '../store';

export default {
    name: "Header",
    data() {
        return {
            store,
            menu: [
                {
                    text: "Home",
                },
                {
                    text: "About",
                },
                {
                    text: "CV",
                },
            ]
        }
    },

    methods: {
        currentVoice(index) {
            this.store.active = index;
        },
    }
}
</script>

<template>

    <nav>
        <ul>
            <li v-for="(menuVoice, index) in menu" :key="index" @click="currentVoice(index)"
                :class="{ selected: store.active === index }">
                <span>
                    {{ menuVoice.text }}
                </span>
            </li>
        </ul>
    </nav>

</template>

<style lang="scss" scoped>
@use "../style/general" as*;

nav {

    li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        // img {
        //     width: 25px;
        //     margin-right: 5px;
        //     filter: brightness(50%);
        //     transition: all 0.3s;
        // }

        // &:hover img {
        //     filter: brightness(100%);
        //     scale: 1.2;
        // }
    }

    .selected {
        color: red;

        // img {
        //     filter: brightness(100%);
        //     scale: 1.2;
        // }
    }

}
</style>