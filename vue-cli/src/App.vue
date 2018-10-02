<template>
<div class="container">
 <!-- <app-user></app-user> -->
   <app-header></app-header>
   <hr>
   <div class="row">
     <app-servers></app-servers>
     <app-server-details></app-server-details>
   </div>
   <hr>
   <app-footer></app-footer>
</div>
</template>

<script>
import User from "./components/User.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
import Footer from "./components/Shared/Footer.vue";
import Header from "./components/Shared/Header.vue";

export default {
  data: () => {
    return {
        firstMessage: true
    }
  },
  components: {
    "app-user": User,
    "app-servers": Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer,
    "app-header": Header
  },
  methods:{
    
  }
};
</script>

<style>
</style>
