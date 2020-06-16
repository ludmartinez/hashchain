<template>
  <v-container class="blue-grey darken-1 rounded-t-xl px-4">
    <v-toolbar flat tile dark dense outlined color="transparent">
      <v-toolbar-title
        class="text-center mx-auto mt-1"
        @click="toogle_selection_panel()"
      >
        <h4>MD5</h4>

        <v-icon v-if="selectionPanel">
          {{ icons.mdiChevronDown }}
        </v-icon>

        <v-icon v-else>
          {{ icons.mdiChevronUp }}
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

    <!-- <div v-if="selectionPanel" class="mx-n4 rounded-xl bk-opacity mt-5">
      <selection-panel :algorithms="algorithms" />
    </div> -->
  </v-container>
</template>

<script>
import {
  mdiLock,
  mdiLockOpenVariant,
  mdiChevronDown,
  mdiChevronUp
} from "@mdi/js";
// import SelectionPanel from "./SelectionPanel.vue";

export default {
  name: "Home",

  // components: { SelectionPanel },

  data() {
    return {
      action: "encrypt",

      algorithms: [
        {
          name: "Message Diggest",
          types: ["md2", "md4", "md5"]
        },
        {
          name: "Secure Hash Algorithm",
          types: ["sha-1", "sha-2", "sha-3"]
        },
        {
          name: "Data Encryption Standar",
          types: ["des"]
        }
      ],

      icons: { mdiLock, mdiLockOpenVariant, mdiChevronDown, mdiChevronUp },

      selectionPanel: false
    };
  },

  methods: {
    toogle_action() {
      this.action === "encrypt"
        ? (this.action = "decrypt")
        : (this.action = "encrypt");
    },

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
</style>
