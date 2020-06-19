<template>
  <div class="white pa-4">
    <header class="d-flex justify-space-between align-center">
      <h4>{{ action | capitalize }}</h4>

      <v-btn
        small
        color="#5D737E"
        rounded
        text
        v-if="mode === 'text'"
        @click="toogle_mode()"
      >
        Text
        <v-icon right>{{ icons.mdiText }}</v-icon>
      </v-btn>

      <v-btn small color="#5D737E" rounded text v-else @click="toogle_mode()">
        Files
        <v-icon right>{{ icons.mdiFile }}</v-icon>
      </v-btn>
    </header>

    <v-textarea
      v-if="mode === 'text'"
      background-color="#F1F0EF"
      color="#7FC6A4"
      outlined
      clearable
      auto-grow
      class="mt-2 rounded-lg"
      :hide-details="hideDetails"
      hint="Hello World"
    />

    <file-pond
      v-else
      class="mt-2 filepond--panel-root"
      ref="pond"
      allow-multiple
      v-model="fileRecords"
      dropOnPage="true"
      dropOnElement="false"
    />

    <v-radio-group row mandatory v-model="encryptionMethod">
      <v-radio label="Checksum" value="checksum" color="#5D737E" />
      <v-radio label="By Words" value="bywords" color="#5D737E" />
    </v-radio-group>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { mdiText, mdiFile } from "@mdi/js";
import FilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";

export default {
  name: "EncryptionForm",

  components: { FilePond: FilePond() },

  data() {
    return {
      encryptionMethod: "checksum",

      fileRecords: [],

      hideDetails: true,

      icons: { mdiText, mdiFile }
    };
  },

  computed: {
    ...mapState(["action", "mode"])
  },

  methods: {
    ...mapActions(["toogle_mode"])
  }
};
</script>

<style lang="sass" scoped>
.filepond--panel-root
  background-color: #F1F0EF
  border: 1px dashed #959594
  min-height: 130px
</style>
