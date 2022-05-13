import Vue from 'vue'
import App from './App.vue'
// - Import Font
import "@fontsource/poppins"
import "@fontsource/poppins/100.css" // - Thin
import "@fontsource/poppins/400.css" // - Regular
import "@fontsource/poppins/500.css" // - Medium
import "@fontsource/poppins/600.css" // - SemiBold
import "@fontsource/poppins/700.css" // - Bold

Vue.config.productionTip = false

/* Bootstrap */
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

new Vue({
    render: h => h(App),
}).$mount('#app')