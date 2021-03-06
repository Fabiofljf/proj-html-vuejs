import Vue from 'vue'
import App from './App.vue'
// - Import Font
// poppins
import "@fontsource/poppins"
import "@fontsource/poppins/100.css" // - Thin
import "@fontsource/poppins/400.css" // - Regular
import "@fontsource/poppins/500.css" // - Medium
import "@fontsource/poppins/600.css" // - SemiBold
import "@fontsource/poppins/700.css" // - Bold
// dancing
import "@fontsource/dancing-script"
import "@fontsource/dancing-script/400.css" // - Regular

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faUserSecret, faMagnifyingGlass)
library.add(faUserSecret, faChevronLeft)
library.add(faUserSecret, faChevronRight)
library.add(faUserSecret, faUser)
library.add(faUserSecret, faFolder)
library.add(faUserSecret, faComments)
library.add(faUserSecret, faTwitter)
library.add(faUserSecret, faChevronUp)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

new Vue({
    render: h => h(App),
}).$mount('#app')