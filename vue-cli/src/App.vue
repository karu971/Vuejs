<template>
<div class="container">
  <app-header></app-header>
  <hr>
  <div class="row">
    <app-servers></app-servers>
    <app-serverDetails></app-serverDetails>
  </div>
  <hr>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-servers': Servers,
    'app-serverDetails': ServerDetails,
  }
};
</script>

<style>
</style>
