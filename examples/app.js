import Vue from 'vue'
import VuePlayer from 'vue-player'
import Example from './pages/example.vue'

Vue.use(VuePlayer)

// if (module.hot) {
//   module.hot.accept()
// }

new Vue({
  render: h => h(Example)
}).$mount('#app')
