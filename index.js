import Sample from './components/Sample.vue'
import vuetify from './plugins/vuetify.js'

export default {
  install: (Vue) => {
    Vue.component('Sample', Sample)
    Vue.use(vuetify)
  }
}