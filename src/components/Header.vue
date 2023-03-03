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
                {
                    text: "Projects"
                }
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

    <header>
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
    </header>

</template>

<style lang="scss" scoped>
@use "../style/general" as*;
@use "../style/partials/variables" as*;

header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: $primary;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

    nav {
        
        ul {
            display: flex;
            gap: 100px;

            li {
                &:hover {
                    cursor: pointer;
                    color: $secondary;
                }
            }
        }

        .selected {
            color: $secondary;
        }

    }
}

</style>