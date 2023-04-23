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

    <header :class="{ 'dropdown_header': showMobileMenu }">

        <nav :class="{ 'dropdown_nav': showMobileMenu }">

            <figure class="logo" :class="{ 'hidden': showMobileMenu }">
                <img src="/logo.svg" alt="logo">
            </figure>

            <div class="hamburger-menu" :class="{ 'open': showMobileMenu }" @click="toggleMobileMenu()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>

            <div class="menu" :class="{ 'active': showMobileMenu }">
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
            </div>

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
    height: 100px;
    padding: 0 20px;
    background-color: $primary;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1200px;

        .logo {
            display: flex;
            align-items: center;
            width: 70px;

            img {
                border-radius: 50%;
            }
        }

        .hamburger-menu {
            display: none;
        }

        .menu {
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
        transition: all 0.5s ease;

        nav {
            .logo {
                color: $secondary;
                font-size: 18px;
            }
            .hamburger-menu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 43px;
                right: 20px;
                gap: 5px;
                cursor: pointer;
                transition: all 0.5s ease-out;

                .bar {
                    width: 30px;
                    height: 3px;
                    background-color: $secondary;
                    transition: all 0.5s ease-out;
                }

                .bar:nth-child(3) {
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }
            }

            .hamburger-menu.open {  
                transform: rotate(180deg);
                .bar:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }

                .bar:nth-child(2) {
                    opacity: 0;
                }

                .bar:nth-child(3) {
                    transform: rotate(-45deg) translate(6px, -6px);
                }
            }

            .menu {
                display: none;
                padding: 100px 0;

                ul {
                    flex-direction: column;

                    li {
                        padding-bottom: 15px;
                        border-bottom: 1px solid;
                    }
                    
                }
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .menu.active ul {
                animation: fadeIn 1.8s ease forwards;
            }

            .active {
                display: block;
            }

            .hidden {
                display: none;
            }
        }
    }

    .dropdown_header {
        display: block;
        height: 100vh;
    }

    .dropdown_nav {
        display: block;
        width: auto;
    }

}

</style>