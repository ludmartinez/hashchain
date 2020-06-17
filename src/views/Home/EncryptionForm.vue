<template>
  <v-container class="white px-4 text-center">
    <h5>{{ action | capitalize }}</h5>

    <v-textarea
      background-color="#CBC5EA"
      color="#5D737E"
      filled
      clearable
      outlined
      auto-grow
      height="170px"
      class="mt-2 rounded-lg"
    />
  </v-container>
</template>

<script>
export default {
  name: "EncryptionForm",

  computed: {
    action() {
      return this.$store.state.action;
    }
  }
};
</script>

<style></style>
