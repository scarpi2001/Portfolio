<script>
import Anchor from "./Anchor.vue";

export default {
  name: "About",
  components: {
    Anchor,
  },
  data() {
    return {
      birthdate: "2001-11-29",
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
          name: "laravel",
          img: "/laravel-icon.svg",
        },
        {
          name: "ASP.NET",
          img: "/aspnet-svgrepo-com.svg",
        },
        {
          name: "VB.NET",
          img: "/VB.NET_Logo.svg",
        },
        {
          name: "Python",
          img: "/python-svgrepo-com.svg",
        },
        {
          name: "Java",
          img: "/java-icon.svg",
        },
        {
          name: "mysql",
          img: "/mysql-icon.svg",
        },
      ],
    };
  },
  computed: {
    age() {
      const today = new Date();
      const birthDate = new Date(this.birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>About Me</h1>
    <p class="card">
      Mi chiamo Marco Scarpelli ed ho {{ age }} anni.<br />
      Sono da sempre un appassionato di informatica,<br />
      amo programmare, restare aggiornato sulle ultime novità del mondo tech<br />
      e mettermi continuamente alla prova.
      <br /><br />
      Il mio obiettivo è crescere come sviluppatore<br />
      e contribuire alla creazione e manutenzione di progetti innovativi e
      stimolanti.
      <br /><br />
      Attualmente lavoro come web developer per
      <a href="https://www.codiceclick.it/">CodiceClick</a>,<br />
      e sono studente di informatica all'università "La Sapienza" di Roma
    </p>

    <h1>Tecnologie Frontend</h1>

    <div class="cards_box">
      <div class="skill card" v-for="frontSkill in frontSkills">
        <img :src="frontSkill.img" :alt="frontSkill.name" />
      </div>
    </div>

    <h1>Tecnologie Backend</h1>

    <div class="cards_box">
      <div class="card" v-for="backSkill in backSkills">
        <img :src="backSkill.img" :alt="backSkill.name" />
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
    text-align: left;
    font-size: 22px;
    margin-bottom: 40px;

    a {
      color: $secondary;
    }
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
