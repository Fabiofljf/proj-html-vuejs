import Vue from 'vue'
import App from './App.vue'
// - Import Font
import "@fontsource/poppins"
import "@fontsource/poppins/100.css" // - Thin
import "@fontsource/poppins/400.css" // - Regular
import "@fontsource/poppins/500.css" // - Medium
import "@fontsource/poppins/600.css" // - SemiBold
import "@fontsource/poppins/700.css" // - Bold

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faUserSecret, faMagnifyingGlass)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

new Vue({
    render: h => h(App),
}).$mount('#app')