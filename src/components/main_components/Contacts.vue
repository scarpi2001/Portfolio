<script>
export default {
  name: "Contacts",
  data() {
    return {
      links: [
        {
          text: "Email : ",
          link: "mailto:marco.scarpelli2001@gmail.com",
          name: "marco.scarpelli2001@gmail.com",
        },
        {
          text: "GitHub : ",
          link: "https://github.com/scarpi2001",
          name: "Scarpi2001",
        },
        {
          text: "Linkedin : ",
          link: "https://www.linkedin.com/in/marco-scarpelli/",
          name: "marco-scarpelli",
        },
        {
          text: "Fiverr : ",
          link: "https://it.fiverr.com/scarpi2001",
          name: "Marco Scarpelli",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div id="contacts">
      <h1>Contatti</h1>
      <div class="card">
        <ul>
          <li v-for="link in links">
            <h3>{{ link.text }}</h3>
            <a :href="link.link">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- <div id="form">
      <h1>Form</h1>
      <div class="card">
        <form
          class="contact-form"
          action="/thanks"
          name="contacts"
          method="POST"
          netlify="true"
        >
          <input type="hidden" name="form-name" value="contacts" />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Inserisci la tua email"
            required
          />

          <label for="message">Messaggio</label>
          <textarea
            id="message"
            name="message"
            placeholder="Scrivi il tuo messaggio"
            required
          ></textarea>

          <button type="submit">Invia</button>
        </form>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/general" as *;
@use "../../style/partials/variables" as *;

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 180px);
  text-align: center;

  div {
    padding: 20px;

    h1 {
      color: $secondary;
      margin-bottom: 10px;
    }

    ul {
      li {
        margin-bottom: 5px;

        h3 {
          display: inline;
        }

        a {
          font-size: 20px;
        }
      }
    }
  }

  #contacts {
    margin-bottom: 30px;
  }

  //   .contact-form {
  //     width: 600px;

  //     label {
  //       display: block;
  //       text-align: left;
  //       font-size: 20px;
  //       font-weight: bold;
  //     }

  //     input,
  //     textarea {
  //       width: 100%;
  //       padding: 8px;
  //       border: 1px solid #ccc;
  //       border-radius: 4px;
  //       margin-bottom: 10px;
  //     }

  //     button {
  //       padding: 10px 20px;
  //       background-color: $secondary;
  //       color: $primary;
  //       border: none;
  //       border-radius: 4px;
  //       cursor: pointer;
  //       transition: all 0.2s;

  //       &:hover {
  //         background-color: #2233f0;
  //         scale: 1.1;
  //       }
  //     }
  //   }
}

// @media screen and (max-width: 700px) {
//   .container {
//     .contact-form {
//       width: 400px;
//     }
//   }
// }

@media screen and (max-width: 500px) {
  .container {
    // .contact-form {
    //   width: 200px;
    // }

    div {
      padding: 10px;
      //   background-color: $background;
      //   padding: 0px;
      //   border-radius: 0px;
      //   box-shadow: 0 0 0 0;
      ul {
        li {
          h3 {
            display: block;
          }

          a {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
