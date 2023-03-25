<script>
import { store } from '../store';

export default {
    name: "Header",
    data() {
        return {
            store,
            menu: [
                {
                    icon: "fa-solid fa-house-user",
                    text: "HOME",
                },
                {
                    icon : "fa-solid fa-address-card",
                    text: "ABOUT",
                },
                {   
                    icon: "fa-solid fa-file",
                    text: "CV",
                },
                {
                    icon: "fa-solid fa-briefcase",
                    text: "PROJECTS",
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
                    <div>
                        <font-awesome-icon :icon=menuVoice.icon />
                    </div>
                    <h4>
                        {{ menuVoice.text }}
                    </h4>
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
    height: 80px;
    background-color: $primary;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

    nav {
        
        ul {
            display: flex;
            gap: 100px;

            li {
                text-align: center;
                transition: all 0.2s;

                div {
                    font-size: 20px;
                }

                &:hover {
                    cursor: pointer;
                    color: $secondary;
                    scale: 1.2;
                }
            }
        }

        .selected {
            color: $secondary;
            scale: 1.2;
        }

    }
}

/* smartphone version */
@media screen and (max-width: 400px) {
    
}

</style>