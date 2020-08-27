import VuePlayer from './VuePlayer'

VuePlayer.install = Vue => Vue.component(VuePlayer.name, VuePlayer)

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VuePlayer.name, VuePlayer)
}

export default VuePlayer
