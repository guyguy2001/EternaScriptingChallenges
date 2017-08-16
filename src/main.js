import Vue from 'vue'
import App from './App.vue'
import Node from './Node.vue'

Vue.component('eterna-node', Node);

new Vue({
  el: '#app',
  render: h => h(App)
})
