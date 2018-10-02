import Vue from 'vue'
import App from './App.vue'

// export const eventBus = new Vue({
//   methods: {
//     changeAge(age){
//       this.$emit('ageWasEdited', age);
//     },
//     changeStatus(status){
//       this.$emit('statusWasEdited', status);
//     }
//   }
// });

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
