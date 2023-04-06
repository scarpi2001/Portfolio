<script>
import { store } from '../store';

export default {
    name: "Header",
    data() {
        return {
            store,
            showMobileMenu : false,
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
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu; },

        currentVoice(index) {
            this.store.active = index;
            this.showMobileMenu = false;
        },
    }
}
</script>

<template>

    <header :class="{ 'mobile': showMobileMenu }">
        <div class="logo" :class="{ 'hidden': showMobileMenu }">
            Marco Scarpelli | Portfolio
        </div>

        <div class="hamburger-menu" :class="{ 'hidden': showMobileMenu }" @click="toggleMobileMenu">
        <!-- <font-awesome-icon icon="fa-solid fa-bars" /> -->
        X
        </div>

        <nav :class="{ 'active': showMobileMenu }">
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
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    padding: 0 100px;
    background-color: $primary;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

    .logo {
        color: $secondary;
        font-size: 30px;
    }

    .hamburger-menu {
        display: none;
    }

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

/* mobile version */
@media screen and (max-width: 700px) {
    header {
        padding: 0 20px;

        .logo {
            color: $secondary;
            font-size: 18px;
        }
        .hamburger-menu {
            display: block;
        }

        nav {
            display: none;
            padding: 50px 0;

            ul {
                flex-direction: column;
            }
        }

        .active {
            display: block;
        }

        .hidden {
            display: none;
        }

    }

    .mobile {
        display: block;
        height: auto;
    }
    
}

</style>