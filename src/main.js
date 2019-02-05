import Vue from 'vue'
import toastr from 'toastr'
import VueFire from 'vuefire'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFootballBall } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { faChess } from '@fortawesome/free-solid-svg-icons'
import { faFutbol} from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import VueTinySlider from 'vue-tiny-slider'
import store from './store'

library.add(faCoffee,faBook,faFootballBall,faCalculator,faChess,faHandHoldingHeart,faFutbol,faPhone,faEnvelope,faLocationArrow,faGlobe)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueFire);
Vue.use(toastr);
Vue.use(BootstrapVue);




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,

  components: {
    'tiny-slider': VueTinySlider,
   
  }
}).$mount('#app')
