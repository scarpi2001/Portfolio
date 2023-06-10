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
          icon: "fa-brands fa-github",
          link: "https://github.com/scarpi2001",
        },
        {
          icon: "fa-brands fa-instagram",
          link: "https://www.instagram.com/scarpi_dhc/",
        },
      ],
    };
  },
};
</script>

<template>
  <footer>
    <nav>
      <div class="contacts_box">
        <ul>
          <li v-for="(contact, index) in contacts" :key="index">
            <a :href="contact.link" target="_blank">
              <font-awesome-icon :icon="contact.icon" />
            </a>
          </li>
        </ul>
      </div>

      <h4>
        <span>Copyright © 2023</span>
        <span id="copyright_2nd">- All rights reserved</span>
      </h4>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/general" as *;
@use "../style/partials/variables" as *;

footer {
  display: flex;
  justify-content: center;
  height: 80px;
  padding: 0 20px;
  background-color: $primary;
  box-shadow: 8px 0 8px 8px rgba(0, 0, 0, 0.1);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    width: 1200px;

    .contacts_box {
      font-size: 30px;

      ul {
        display: flex;
        gap: 80px;

        li {
          text-align: center;
        }
      }
    }

    h4 {
      text-align: center;
    }
  }
}

//s version
@media screen and (max-width: 600px) {
  nav {
    .contacts_box {
      ul {
        gap: 30px !important;
      }
    }
  }

  span:nth-child(2) {
    display: none;
  }
}
</style>
