<template>
  <v-container class="px-0">
    <v-row no-gutters class="white--text">
      <v-col class="separation-line">
        <v-list dark color="transparent" dense>
          <v-subheader class="px-4">Algorithms</v-subheader>

          <v-list-item-group v-model="selectedAlgorithm.name" mandatory>
            <v-list-item
              v-for="(algorithm, i) in algorithms"
              :key="i"
              class="mb-2"
            >
              {{ algorithm.name }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col>
        <v-list dark color="transparent" dense>
          <v-subheader class="px-4">Types</v-subheader>

          <v-list-item-group v-model="selectedAlgorithm.type" mandatory>
            <v-list-item
              v-for="(type, i) in algorithms[selectedAlgorithm.name].types"
              :key="i"
              class="mb-2"
            >
              {{ type }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SelectionPanel",

  props: {
    algorithms: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selectedAlgorithm: {
        name: 1,
        type: 0
      }
    };
  }
};
</script>

<style lang="sass" scoped>
.separation-line
  border-right: solid 1px white
</style>
