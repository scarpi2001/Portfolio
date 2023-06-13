<script>
import axios from "axios";
export default {
  name: "Contacts",
  data() {
    return {
      form: {
        email: "",
        message: "",
      },
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
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": "contacts",
            ...this.form,
          }),
          axiosConfig
        )
        .then(() => {
          this.$router.push("success");
        })
        .catch(() => {
          this.$router.push("404");
        });
    },
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

    <div id="form">
      <h1>Form</h1>
      <div class="card">
        <form
          class="contact-form"
          name="contacts"
          method="POST"
          netlify
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contacts" />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Inserisci la tua email"
            v-model="form.email"
            required
          />

          <label for="message">Messaggio</label>
          <textarea
            id="message"
            name="message"
            placeholder="Scrivi il tuo messaggio"
            v-model="form.message"
            required
          ></textarea>

          <button type="submit">Invia</button>
        </form>
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
  align-items: center;
  justify-content: center;
  height: calc(100vh - 180px);
  text-align: center;

  div {
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

  .contact-form {
    width: 600px;

    label {
      display: block;
      text-align: left;
      font-size: 20px;
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }
}

@media screen and (max-width: 700px) {
  .container {
    .contact-form {
      width: 400px;
    }
  }
}

@media screen and (max-width: 500px) {
  .container {
    .contact-form {
      width: 200px;

      label {
        font-size: 18px;
      }

      input,
      textarea {
        padding: 6px;
      }
    }

    div {
      padding: 15px;

      ul {
        li {
          h3 {
            display: block;
          }

          a {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
