<template>
  <v-container class="white--text text-center px-4">
    <h6 class="text-h6">RESULTS</h6>

    <v-text-field
      v-if="results.data.length > 1"
      rounded
      dense
      clearable
      filled
      :prepend-inner-icon="icons.mdiMagnify"
      color="#7FC6A4"
      class="white mt-2"
      hide-details
      v-model="filter"
    />

    <div v-if="filteredResults.length" class="results mt-3">
      <h4 class="text-right" v-if="results.data.length > 1">
        {{
          `${this.action}ed ${results.completed} of ${results.data.length}`
            | capitalize
        }}
      </h4>

      <ol class="pa-0">
        <li
          v-for="(item, i) in filteredResults"
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

      <span>You don't have any result</span>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { mdiBorderNone, mdiMagnify } from "@mdi/js";
import { limitCharacters } from "../../filters/textFilters";

export default {
  name: "ResultsPanel",

  filters: { limitCharacters },

  data() {
    return {
      icons: { mdiBorderNone, mdiMagnify },

      filter: null
    };
  },

  computed: {
    ...mapState(["action", "results"]),
    filteredResults() {
      if (this.filter) {
        return [...this.results.data].filter(result => {
          const text = result.text.toLowerCase();
          const hash = result.hash.toLowerCase();
          const filter = this.filter.toLowerCase();

          return text.includes(filter) || hash.includes(filter);
        });
      }
      return this.results.data;
    }
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
