import Vue from 'vue'
import App from './App.vue'
import Node from './Node.vue'
import Launcher from './Launcher.vue'

Vue.component('eterna-node', Node);
Vue.component('eterna-launcher', Launcher);
new Vue({
  el: '#app',
  render: h => h(App)
})
