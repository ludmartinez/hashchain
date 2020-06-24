<template>
  <v-container class="white--text text-center px-4">
    <h6 class="text-h6">RESULTS</h6>

    <div v-if="results.data.length" class="results mt-3">
      <h4 class="text-right">
        {{ `Completed ${results.completed} of ${results.data.length}` }}
      </h4>

      <ol>
        <li
          v-for="(item, i) in results.data"
          :key="i"
          three-line
          class="text-left"
        >
          <h4>{{ item.text }}</h4>

          <p class="text-wrapper">
            {{ item.hash }}
          </p>
        </li>
      </ol>
    </div>

    <div v-else class="d-flex flex-column align-center mt-3">
      <v-icon class="white--text">
        {{ icons.mdiBorderNone }}
      </v-icon>

      <span>You still no have results</span>
    </div>
  </v-container>
</template>

<script>
import { mdiBorderNone } from "@mdi/js";

export default {
  name: "ResultsPanel",

  props: {
    results: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      icons: { mdiBorderNone }
    };
  }
};
</script>

<style lang="sass" scoped>
.results
  font-family: 'Roboto Mono', monospace
  font-weight: regular

.text-wrapper
  word-wrap: break-word
</style>
