<script>
export default {
  name: "About",
  data() {
    return {
      frontSkills: [
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
          name: "sass",
          img: "/sass-icon.svg",
        },
        {
          name: "bootstrap",
          img: "/bootstrap-icon.svg",
        },
        {
          name: "tailwind",
          img: "/tailwind.svg",
        },
        {
          name: "vue",
          img: "/vue-icon.svg",
        },
      ],
      backSkills: [
        {
          name: "php",
          img: "/php-icon.svg",
        },
        {
          name: "mysql",
          img: "/mysql-icon.svg",
        },
        {
          name: "laravel",
          img: "/laravel-icon.svg",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>About Me</h1>
    <p class="card">
      Mi chiamo Marco Scarpelli ed ho 21 anni.<br />
      Fin da quando ero bambino sono sempre stato uno smanettone appassionato di
      informatica,<br />
      Mi piace programmare, rimanere sempre aggiornato su nuove tecnologie e
      mettermi costantemente alla prova,<br />
      Il mio obiettivo è continuare a crescere come sviluppatore e contribuire
      alla realizzazione e al mantenimento di progetti innovativi.
    </p>
  </div>

  <div class="container">
    <h1>Teconologie Frontend</h1>

    <div class="cards_box">
      <div class="skill card" v-for="frontSkill in frontSkills">
        <img :src="frontSkill.img" :alt="frontSkill.name" />
      </div>
    </div>

    <h1>Teconologie Backend</h1>

    <div class="cards_box">
      <div class="card" v-for="backSkill in backSkills">
        <img :src="backSkill.img" :alt="backSkill.name" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/general" as *;
@use "../../style/partials/variables" as *;

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0;

  h1 {
    font-size: 40px;
    color: $secondary;
    margin-bottom: 40px;
  }

  p {
    font-size: 22px;
  }

  .cards_box {
    gap: 20px;
    max-width: 800px;
    padding-bottom: 80px;

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(25% - 20px);
    }
  }
}

//md version
@media screen and (max-width: 900px) {
  .container {
    .cards_box {
      .card {
        width: calc(100% / 3 - 50px);
      }
    }
  }
}

//s version
@media screen and (max-width: 730px) {
  .container {
    .cards_box {
      .card {
        width: calc(50% - 50px);
      }
    }
  }
}

//xs version
@media screen and (max-width: 360px) {
  .container {
    .cards_box {
      .card {
        width: 100%;
      }
    }
  }
}
</style>
