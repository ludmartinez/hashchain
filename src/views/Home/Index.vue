<template>
  <v-container class="blue-grey darken-1 rounded-t-xl px-4 viewport-height">
    <v-toolbar
      flat
      tile
      dark
      dense
      outlined
      color="transparent"
      v-touch="{
        down: () => toogle_selection_panel()
      }"
    >
      <v-toolbar-title
        class="text-center mx-auto mt-1"
        @click="toogle_selection_panel()"
      >
        <h4 v-if="algorithms.length">
          {{ selectedAlgorithmType.toUpperCase() }}
        </h4>

        <v-icon v-if="selectionPanel">
          {{ icons.mdiChevronUp }}
        </v-icon>

        <v-icon v-else>
          {{ icons.mdiChevronDown }}
        </v-icon>
      </v-toolbar-title>

      <div class="lock-unlock-btn">
        <v-btn icon @click="toogle_action()">
          <v-icon v-if="action === 'encrypt'">
            {{ icons.mdiLockOpenVariant }}
          </v-icon>

          <v-icon v-else>
            {{ icons.mdiLock }}
          </v-icon>
        </v-btn>
      </div>
    </v-toolbar>

    <div v-if="selectionPanel" class="mx-n4 rounded-xl bk-opacity mt-5">
      <selection-panel />
    </div>

    <div class="mx-n4 mt-5" v-if="algorithms.length">
      <encryption-form class="rounded-xl" />
    </div>

    <div class="mx-n4 rounded-xl bk-opacity mt-5" v-if="algorithms.length">
      <results-panel />
    </div>
  </v-container>
</template>

<script>
import {
  mdiLock,
  mdiLockOpenVariant,
  mdiChevronDown,
  mdiChevronUp
} from "@mdi/js";
import SelectionPanel from "./SelectionPanel.vue";
import EncryptionForm from "./EncryptionForm.vue";
import ResultsPanel from "./ResultsPanel.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Home",

  components: { SelectionPanel, EncryptionForm, ResultsPanel },

  data() {
    return {
      icons: { mdiLock, mdiLockOpenVariant, mdiChevronDown, mdiChevronUp },

      selectionPanel: false
    };
  },

  beforeCreate() {
    this.$store.dispatch("retrive_algorithms");
  },

  computed: {
    ...mapState(["algorithms", "action"]),
    ...mapGetters(["selectedAlgorithmType"])
  },

  methods: {
    ...mapActions(["toogle_action"]),

    toogle_selection_panel() {
      this.selectionPanel = !this.selectionPanel;
    }
  }
};
</script>

<style lang="sass" scoped>
.lock-unlock-btn
  position: absolute
  right: 0

.bk-opacity
  background-color: rgba(255, 255, 255, 0.2)

.viewport-height
  min-height: calc( 100vh - 56px )
</style>
