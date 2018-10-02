<template>
    <div class="component">
        <h3>You may edit the User Details here</h3>
        <p>Many Details</p>
        <p>Uaer Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      //   this.$emit('ageWasEdited', this.userAge);
      // eventBus.$emit('ageWasEdited', this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
