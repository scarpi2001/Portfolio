<script>
import Anchor from "./Anchor.vue";
export default {
  name: "Projects",
  components: {
    Anchor,
  },
  data() {
    return {
      projects: [
        {
          img: "/spotify.png",
          title: "Spotify Web",
          skills: [
            {
              name: "html",
              img: "/html.svg",
            },
            {
              name: "css",
              img: "/css-icon.svg",
            },
            {
              name: "sass",
              img: "/sass-icon.svg",
            },
            {
              name: "js",
              img: "/js-icon.svg",
            },
            {
              name: "vue",
              img: "/vue-icon.svg",
            },
          ],
          description:
            "Una replica di Spotify Web full responsive che utilizza delle chiamate API per la visualizzazione e la ricerca dei brani più famosi",
          livePrev: "https://scarpi2001.github.io/vue-spotifyweb/",
          gitHub: "https://github.com/scarpi2001/vue-spotifyweb",
        },
        {
          img: "/boolzapp.png",
          title: "Whatsapp Web",
          skills: [
            {
              name: "html",
              img: "/html.svg",
            },
            {
              name: "css",
              img: "/css-icon.svg",
            },
            {
              name: "js",
              img: "/js-icon.svg",
            },
            {
              name: "vue",
              img: "/vue-icon.svg",
            },
          ],
          description:
            "Una replica di Whatsapp Web full responsive con la possibilità di inviare e ricevere messaggi dai vari contatti e di ricercarli tramite apposita barra di ricerca",
          livePrev: "https://boolzappweb.netlify.app",
          gitHub: "https://github.com/scarpi2001/vue-boolzapp",
        },
        {
          img: "/boolflix.png",
          title: "Netflix",
          skills: [
            {
              name: "html",
              img: "/html.svg",
            },
            {
              name: "css",
              img: "/css-icon.svg",
            },
            {
              name: "sass",
              img: "/sass-icon.svg",
            },
            {
              name: "js",
              img: "/js-icon.svg",
            },
            {
              name: "vue",
              img: "/vue-icon.svg",
            },
          ],
          description:
            "Una replica di Netflix full responsive che utilizza delle chiamate API per la visualizzazione e la ricerca di film",
          livePrev: "https://scarpi2001.github.io/vite-boolflix/",
          gitHub: "https://github.com/scarpi2001/vite-boolflix",
        },
        {
          img: "/dashboard.png",
          title: "Bootstrap Dashboard",
          skills: [
            {
              name: "html",
              img: "/html.svg",
            },
            {
              name: "css",
              img: "/css-icon.svg",
            },
            {
              name: "bootstrap",
              img: "/bootstrap-icon.svg",
            },
          ],
          description:
            "Una dashboard completamente responsive creata utilizzando bootstrap",
          livePrev:
            "https://scarpi2001.github.io/html-css-bootstrap-dashboard/",
          gitHub: "https://github.com/scarpi2001/html-css-bootstrap-dashboard",
        },
        {
          img: "/minefield.png",
          title: "MineField.js",
          skills: [
            {
              name: "html",
              img: "/html.svg",
            },
            {
              name: "css",
              img: "/css-icon.svg",
            },
            {
              name: "js",
              img: "/js-icon.svg",
            },
          ],
          description:
            "versione web del gioco campo minato creata con html, css e javascript, il gioco è completamente godibile anche da smartphone, essendo completamente responsive",
          livePrev: "https://scarpi2001.github.io/js-campominato-dom/",
          gitHub: "https://github.com/scarpi2001/js-campominato-dom",
        },
        // {
        //   img: "/personal.png",
        //   title: "AvadaSEO",
        //   skills: [
        //     {
        //       name: "html",
        //       img: "/html.svg",
        //     },
        //     {
        //       name: "css",
        //       img: "/css-icon.svg",
        //     },
        //     {
        //       name: "sass",
        //       img: "/sass-icon.svg",
        //     },
        //     {
        //       name: "js",
        //       img: "/js-icon.svg",
        //     },
        //     {
        //       name: "vue",
        //       img: "/vue-icon.svg",
        //     },
        //   ],
        //   description: "Home page di un sito creata con Vue3",
        //   livePrev: "https://scarpi2001.github.io/proj-html-vuejs/",
        //   gitHub: "https://github.com/scarpi2001/proj-html-vuejs",
        // },
        {
          img: "/dropbox.png",
          title: "Dropbox",
          skills: [
            {
              name: "html",
              img: "/html.svg",
            },
            {
              name: "css",
              img: "/css-icon.svg",
            },
          ],
          description:
            "Uno dei miei primi progetti, una pagina ispirata alla homepage di Dropbox",
          livePrev: "https://dropboxms.netlify.app",
          gitHub: "https://github.com/scarpi2001/htmlcss-dropbox",
        },
        {
          img: "/discord.png",
          title: "Discord",
          skills: [
            {
              name: "html",
              img: "/html.svg",
            },
            {
              name: "css",
              img: "/css-icon.svg",
            },
          ],
          description:
            "Uno dei miei primi progetti, una pagina ispirata alla homepage di Discord",
          livePrev: "https://scarpi2001.github.io/htmlcss-discord/",
          gitHub: "https://github.com/scarpi2001/htmlcss-discord",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="cards_box">
      <!-- card -->
      <div class="card" v-for="project in projects">
        <!-- img -->
        <a :href="project.livePrev" target="_blank">
          <img class="project_img" :src="project.img" :alt="project.title" />
        </a>
        <!-- titolo -->
        <h2>
          <a :href="project.livePrev" target="_blank">{{ project.title }}</a>
        </h2>
        <!-- skills -->
        <ul>
          <li v-for="skill in project.skills">
            <img :src="skill.img" :alt="skill.name" />
          </li>
        </ul>
        <!-- descrizione -->
        <p>{{ project.description }}</p>
        <!-- links -->
        <div>
          <h3>
            <a :href="project.livePrev" target="_blank">Live Preview</a>
          </h3>
          <h3>
            <a :href="project.gitHub" target="_blank">GitHub</a>
          </h3>
        </div>
      </div>
    </div>
    <!-- anchor top -->
    <Anchor />
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/general" as *;
@use "../../style/partials/variables" as *;

.container {
  padding: 100px 0;
  .cards_box {
    gap: 50px;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: calc(100% / 3 - 50px);
      height: 480px;
      padding: 0;

      .project_img {
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
      }

      h2 {
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
        font-size: 18px;
        padding: 0 10px;
      }

      div {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        border-top: 1px solid rgb(177, 177, 177);

        h3 {
          padding: 15px 20px;
        }
      }
    }
  }

  #top-anchor {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: fixed;
    bottom: 120px;
    right: 60px;
    background-color: $secondary;
    color: $primary;
    cursor: pointer;
    animation: fadeIn 1s ease forwards;

    &:hover {
      animation: bounce 0.5s infinite;
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  }
}

//md version
@media screen and (max-width: 980px) {
  .container {
    .cards_box {
      .card {
        width: calc(50% - 50px);
      }
    }
  }
}

//s version
@media screen and (max-width: 650px) {
  .container {
    .cards_box {
      .card {
        width: 100%;
        height: 500px;
      }
    }

    #top-anchor {
      width: 40px;
      height: 40px;
      bottom: 100px;
      right: 30px;
    }
  }
}
</style>
