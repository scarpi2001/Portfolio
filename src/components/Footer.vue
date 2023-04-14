<script>
export default {
    name: "Footer",
    data() {
        return {
            contacts: [
                {
                    icon: "fa-brands fa-linkedin",
                    link: "https://www.linkedin.com/in/marco-scarpelli/",
                },
                {
                    icon : "fa-brands fa-github",
                    link: "https://github.com/scarpi2001",
                },
                {   
                    icon: "fa-brands fa-instagram",
                    link: "https://www.instagram.com/scarpi_dhc/",
                },
            ]
        }
    },
}
</script>

<template>
    <footer>
        <nav>
            <div class="contacts_box">
                <ul>
                    <li v-for="(contact, index) in contacts" :key="index">
                        <a :href="contact.link">
                            <font-awesome-icon :icon=contact.icon />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
@use "../style/general" as*;
@use "../style/partials/variables" as*;

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    background-color: $primary;
    box-shadow: 8px 0 8px 8px rgba(0, 0, 0, 0.1);

    nav {
        width: 1200px;
        .contacts_box {
        font-size: 30px;

            ul {
                display: flex;
                gap: 80px;

                li {
                    text-align: center;

                    a {
                        color: black;
                        transition: all 0.3s;
                        &:hover {
                            color: $secondary;
                        }
                    }
                }
            }
        }
    }
}
    
/* smartphone version */
@media screen and (max-width: 400px) {
    footer {
        justify-content: center;
    }
}
</style>