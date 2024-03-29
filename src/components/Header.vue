<script>
export default {
  name: "Header",
  data() {
    return {
      showMobileMenu: false,
      menu: [
        {
          icon: "fa-solid fa-house-user",
          text: "HOME",
          route: "/",
        },
        {
          icon: "fa-solid fa-address-card",
          text: "ABOUT",
          route: "/about",
        },
        {
          icon: "fa-solid fa-file",
          text: "CV",
          route: "/cv",
        },
        {
          icon: "fa-solid fa-briefcase",
          text: "PROJECTS",
          route: "/projects",
        },
        {
          icon: "fa-solid fa-address-book",
          text: "CONTACTS",
          route: "/contacts",
        },
      ],
    };
  },

  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },

    closeMobileMenu() {
      this.showMobileMenu = false;
    },
  },
};
</script>

<template>
  <header :class="{ dropdown_header: showMobileMenu }">
    <nav :class="{ dropdown_nav: showMobileMenu }">
      <figure class="logo" :class="{ hidden: showMobileMenu }">
        <router-link to="/">
          <img src="/logo.svg" alt="logo" />
        </router-link>
      </figure>

      <div
        class="hamburger-menu"
        :class="{ open: showMobileMenu }"
        @click="toggleMobileMenu()"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <div class="menu" :class="{ active: showMobileMenu }">
        <ul>
          <li
            v-for="(menuVoice, index) in menu"
            :key="index"
            @click="closeMobileMenu()"
          >
            <router-link :to="menuVoice.route">
              <div class="menu_link">
                <div>
                  <font-awesome-icon :icon="menuVoice.icon" />
                </div>
                <h4>
                  {{ menuVoice.text }}
                </h4>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/general" as *;
@use "../style/partials/variables" as *;

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
  z-index: 999;

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
        cursor: pointer;
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
            scale: 1.2;
          }
        }
      }
    }

    .selected {
      color: $secondary;
    }
  }
}

/* mobile version */
@media screen and (max-width: 900px) {
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
        padding: 160px 0;

        ul {
          flex-direction: column;
          align-items: center;
          gap: 50px;
          transition: all 0.5s ease;

          li {
            width: 100px;

            .menu_link {
              padding-bottom: 10px;
              border-bottom: 1px solid;
            }
          }
        }
      }

      .menu.active ul {
        animation: fadeIn 1s ease-in forwards;
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
