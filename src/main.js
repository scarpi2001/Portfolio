import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLinkedin as fasLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub as fasGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram as fasInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHomeUser as fasHomeUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard as fasAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faFile as fasFile } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase as fasBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook as fasAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp as fasAngleUp } from "@fortawesome/free-solid-svg-icons";

library.add(
  fasInstagram,
  fasGithub,
  fasLinkedin,
  fasHomeUser,
  fasAddressCard,
  fasFile,
  fasBriefcase,
  fasAddressBook,
  fasAngleUp
);
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
