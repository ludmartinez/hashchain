<template>
  <v-app>
    <header-bar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";

export default {
  components: { HeaderBar }
};
</script>
