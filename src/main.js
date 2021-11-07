import { createApp, h } from 'vue'
import './index.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Auth from './components/Auth.vue'
import Home from './components/Home.vue'

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = {
  '/': Home,
  '/auth': Auth
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}

library.add(faCopy);

createApp(SimpleRouter)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
