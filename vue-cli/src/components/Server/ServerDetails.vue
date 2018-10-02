<template>
    <div class="col-zs-12 col-sm-6">
        <p v-if="firstMessage">Please select a Server</p>
        <p v-else>You choose the server number: {{ serverStatus.id }}, status: {{ serverStatus.status }}</p>
        <hr>
        <button @click="changeToNormal">Change to Normal</button>
    </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data: () => {
    return {
      serverStatus: Object,
      firstMessage: true
    };
  },
  methods: {
    changeToNormal() {
      this.serverStatus.status = "Normal";
    }
  },
  created() {
    eventBus.$on("mesCouilles", server => {
      this.serverStatus = server;
      this.firstMessage = false;
    });
  }
};
</script>

<style scoped>
</style>
