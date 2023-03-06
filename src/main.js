import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLinkedin as fasLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub as fasGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram as fasInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHomeUser as fasHomeUser } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard as fasAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faFile as fasFile } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase as fasBrieffaBriefcase } from '@fortawesome/free-solid-svg-icons'

library.add(fasInstagram, fasGithub, fasLinkedin, fasHomeUser, fasAddressCard, fasFile, fasBrieffaBriefcase)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
