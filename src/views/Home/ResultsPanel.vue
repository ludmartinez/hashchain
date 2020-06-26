<template>
  <v-container class="white--text text-center px-4">
    <h6 class="text-h6">RESULTS</h6>

    <div v-if="results.data.length" class="results mt-3">
      <h4 class="text-right" v-if="results.data.length > 1">
        {{
          `${this.action}ed ${results.completed} of ${results.data.length}`
            | capitalize
        }}
      </h4>

      <ol class="pa-0">
        <li
          v-for="(item, i) in results.data"
          :key="i"
          three-line
          class="text-left results-list"
        >
          <h4 class="text-wrapper">
            {{ `${i + 1}. ${item.text}` | limitCharacters(60) }}
          </h4>

          <p class="text-wrapper subtitle-1">
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
import { mapState } from "vuex";
import { mdiBorderNone } from "@mdi/js";
import { limitCharacters } from "../../filters/textFilters";

export default {
  name: "ResultsPanel",

  filters: { limitCharacters },

  data() {
    return {
      icons: { mdiBorderNone }
    };
  },

  computed: {
    ...mapState(["action", "results"])
  }
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;1,300&display=swap')

.results
  font-family: 'Roboto Mono', monospace
  font-weight: regular

.text-wrapper
  word-wrap: break-word

.results-list
  list-style: none
</style>
