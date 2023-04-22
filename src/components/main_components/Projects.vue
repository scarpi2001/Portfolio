<script>
export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {   
                    img:"/spotify.png",
                    title:"Spotify Web",
                    skills:[
                        {
                            name:"html",
                            img:"/html.svg"
                        },
                        {
                            name:"css",
                            img:"/css-icon.svg"
                        },
                        {
                            name:"sass",
                            img:"/sass-icon.svg"
                        },
                        {
                            name:"js",
                            img:"/js-icon.svg"
                        },
                        {
                            name:"vue",
                            img:"/vue-icon.svg"
                        },
                    ],
                    description:"Una replica di Spotify Web full responsive che utilizza delle chiamate API per la visualizzazione e la ricerca dei brani più famosi",
                    livePrev:"https://scarpi2001.github.io/vue-spotifyweb/",
                    gitHub:"https://github.com/scarpi2001/vue-spotifyweb",
                },
                {   
                    img:"/boolzapp.png",
                    title:"Whatsapp Web",
                    skills:[
                        {
                            name:"html",
                            img:"/html.svg"
                        },
                        {
                            name:"css",
                            img:"/css-icon.svg"
                        },
                        {
                            name:"js",
                            img:"/js-icon.svg"
                        },
                        {
                            name:"vue",
                            img:"/vue-icon.svg"
                        },
                    ],
                    description:"Una replica di Whatsapp Web full responsive con la possibilità di inviare e ricevere messaggi dai vari contatti e di ricercarli tramite apposita barra di ricerca",
                    livePrev:"https://boolzappweb.netlify.app",
                    gitHub:"https://github.com/scarpi2001/vue-boolzapp",
                },
                {   
                    img:"/boolflix.png",
                    title:"Netflix",
                    skills:[
                        {
                            name:"html",
                            img:"/html.svg"
                        },
                        {
                            name:"css",
                            img:"/css-icon.svg"
                        },
                        {
                            name:"sass",
                            img:"/sass-icon.svg"
                        },
                        {
                            name:"js",
                            img:"/js-icon.svg"
                        },
                        {
                            name:"vue",
                            img:"/vue-icon.svg"
                        },
                    ],
                    description:"Una replica di Netflix full responsive che utilizza delle chiamate API per la visualizzazione e la ricerca di film",
                    livePrev:"https://scarpi2001.github.io/vite-boolflix/",
                    gitHub:"https://github.com/scarpi2001/vite-boolflix",
                },
                {   
                    img:"/personal.png",
                    title:"AvadaSEO",
                    skills:[
                        {
                            name:"html",
                            img:"/html.svg"
                        },
                        {
                            name:"css",
                            img:"/css-icon.svg"
                        },
                        {
                            name:"sass",
                            img:"/sass-icon.svg"
                        },
                        {
                            name:"js",
                            img:"/js-icon.svg"
                        },
                        {
                            name:"vue",
                            img:"/vue-icon.svg"
                        },
                    ],
                    description:"Un sito completo creato con Vue3",
                    livePrev:"https://scarpi2001.github.io/proj-html-vuejs/",
                    gitHub:"https://github.com/scarpi2001/proj-html-vuejs",
                },
            ]
        }
    }
}
</script>

<template>

    <div class="container">
        <div class="cards_box">
            <!-- card -->
            <div class="card" v-for="project in projects">
                <!-- img -->
                <img :src="project.img" :alt="project.title">
                <!-- titolo -->
                <h2>{{ project.title }}</h2>
                <!-- skills -->
                <ul>
                    <li v-for="skill in project.skills">
                        <img :src="skill.img" :alt="skill.name">
                    </li>
                </ul>
                <!-- descrizione -->
                <p>{{ project.description }}</p>
                <!-- links -->
                <div>
                    <a :href="project.livePrev">Live Preview</a>
                    <a :href="project.gitHub">GitHub</a>
                </div>

            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use "../../style/general" as*;
@use "../../style/partials/variables" as*;

.container {
    padding: 100px 0;
    .cards_box {
        gap: 50px;
        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc( 100% / 3 - 50px );
            height: 450px;
            padding: 0;

            img {
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
            }

            h2 {
                color: $secondary;
                padding: 0 10px;
            }

            ul {
                display: flex;
                gap: 5px;
                padding: 0 10px;

                li {
                    display: flex;
                    align-items: center;
                    width: 25px;
                }
            }

            p {
                padding: 0 10px;
            }

            div {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                border-top: 1px solid rgb(177, 177, 177);

                a {
                    padding: 10px 30px;
                }
            }
        }
    }
}
</style>