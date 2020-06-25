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
      persistent-hint
      :hide-details="hideDetails"
      :hint="`Total Words: ${this.inputWords.length}`"
      v-model="textinput"
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

    <v-btn color="#7FC6A4" depressed block @click="executeAction()">
      {{ action }}
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { mdiText, mdiFile } from "@mdi/js";
import FilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import cryptojs from "crypto-js";

export default {
  name: "EncryptionForm",

  components: { FilePond: FilePond() },

  data() {
    return {
      encryptionMethod: "checksum",

      fileRecords: [],

      hideDetails: true,

      icons: { mdiText, mdiFile },

      mode: "text",

      textinput: ""
    };
  },

  computed: {
    ...mapState(["action", "results"]),
    ...mapGetters(["selectedAlgorithmType"]),

    inputWords() {
      if (this.textinput) {
        if (!this.textinput.trim()) return [];
        const words = this.textinput.trim().split(/\s|\n/);
        const norepeatWords = [...new Set(words)];
        return norepeatWords;
      }
      return [];
    },

    hashMd5() {
      switch (this.mode) {
        case "text": {
          if (this.textinput) {
            if (!this.textinput.trim()) return [];

            switch (this.encryptionMethod) {
              case "checksum": {
                return [
                  {
                    text: this.textinput.trim(),
                    hash: cryptojs.MD5(this.textinput.trim()).toString()
                  }
                ];
              }

              case "bywords": {
                const words = [];
                this.inputWords.forEach(word => {
                  words.push({
                    text: word,
                    hash: cryptojs.MD5(word).toString()
                  });
                });
                return words;
              }

              default:
                break;
            }
          }
          return [];
        }

        case "files": {
          return "Not supported yet";
        }
      }

      return [];
    },

    hashSha1() {
      switch (this.mode) {
        case "text": {
          if (this.textinput) {
            if (!this.textinput.trim()) return [];

            switch (this.encryptionMethod) {
              case "checksum": {
                return [
                  {
                    text: this.textinput.trim(),
                    hash: cryptojs.SHA1(this.textinput.trim()).toString()
                  }
                ];
              }

              case "bywords": {
                const words = [];
                this.inputWords.forEach(word => {
                  words.push({
                    text: word,
                    hash: cryptojs.SHA1(word).toString()
                  });
                });
                return words;
              }

              default:
                break;
            }
          }
          return [];
        }

        case "files": {
          return "Not supported yet";
        }
      }

      return [];
    },

    hashSha224() {
      switch (this.mode) {
        case "text": {
          if (this.textinput) {
            if (!this.textinput.trim()) return [];

            switch (this.encryptionMethod) {
              case "checksum": {
                return [
                  {
                    text: this.textinput.trim(),
                    hash: cryptojs.SHA224(this.textinput.trim()).toString()
                  }
                ];
              }

              case "bywords": {
                const words = [];
                this.inputWords.forEach(word => {
                  words.push({
                    text: word,
                    hash: cryptojs.SHA224(word).toString()
                  });
                });
                return words;
              }

              default:
                break;
            }
          }
          return [];
        }

        case "files": {
          return "Not supported yet";
        }
      }

      return [];
    },

    hashSha256() {
      switch (this.mode) {
        case "text": {
          if (this.textinput) {
            if (!this.textinput.trim()) return [];

            switch (this.encryptionMethod) {
              case "checksum": {
                return [
                  {
                    text: this.textinput.trim(),
                    hash: cryptojs.SHA256(this.textinput.trim()).toString()
                  }
                ];
              }

              case "bywords": {
                const words = [];
                this.inputWords.forEach(word => {
                  words.push({
                    text: word,
                    hash: cryptojs.SHA256(word).toString()
                  });
                });
                return words;
              }

              default:
                break;
            }
          }
          return [];
        }

        case "files": {
          return "Not supported yet";
        }
      }

      return [];
    },

    hashSha384() {
      switch (this.mode) {
        case "text": {
          if (this.textinput) {
            if (!this.textinput.trim()) return [];

            switch (this.encryptionMethod) {
              case "checksum": {
                return [
                  {
                    text: this.textinput.trim(),
                    hash: cryptojs.SHA384(this.textinput.trim()).toString()
                  }
                ];
              }

              case "bywords": {
                const words = [];
                this.inputWords.forEach(word => {
                  words.push({
                    text: word,
                    hash: cryptojs.SHA384(word).toString()
                  });
                });
                return words;
              }

              default:
                break;
            }
          }
          return [];
        }

        case "files": {
          return "Not supported yet";
        }
      }

      return [];
    },

    hashSha512() {
      switch (this.mode) {
        case "text": {
          if (this.textinput) {
            if (!this.textinput.trim()) return [];

            switch (this.encryptionMethod) {
              case "checksum": {
                return [
                  {
                    text: this.textinput.trim(),
                    hash: cryptojs.SHA512(this.textinput.trim()).toString()
                  }
                ];
              }

              case "bywords": {
                const words = [];
                this.inputWords.forEach(word => {
                  words.push({
                    text: word,
                    hash: cryptojs.SHA512(word).toString()
                  });
                });
                return words;
              }

              default:
                break;
            }
          }
          return [];
        }

        case "files": {
          return "Not supported yet";
        }
      }

      return [];
    },

    hashSha3() {
      switch (this.mode) {
        case "text": {
          if (this.textinput) {
            if (!this.textinput.trim()) return [];

            switch (this.encryptionMethod) {
              case "checksum": {
                return [
                  {
                    text: this.textinput.trim(),
                    hash: cryptojs.SHA3(this.textinput.trim()).toString()
                  }
                ];
              }

              case "bywords": {
                const words = [];
                this.inputWords.forEach(word => {
                  words.push({
                    text: word,
                    hash: cryptojs.SHA3(word).toString()
                  });
                });
                return words;
              }

              default:
                break;
            }
          }
          return [];
        }

        case "files": {
          return "Not supported yet";
        }
      }

      return [];
    }
  },

  watch: {
    encryptionMethod(newval) {
      newval === "bywords"
        ? (this.hideDetails = false)
        : (this.hideDetails = true);
    }
  },

  methods: {
    toogle_mode() {
      this.mode === "text" ? (this.mode = "files") : (this.mode = "text");
    },

    encrypt() {
      switch (this.selectedAlgorithmType) {
        case "md5":
          this.results.data = this.hashMd5;
          this.results.completed = this.hashMd5.length;
          break;

        case "sha1":
          this.results.data = this.hashSha1;
          this.results.completed = this.hashSha1.length;
          break;

        case "sha224":
          this.results.data = this.hashSha224;
          this.results.completed = this.hashSha224.length;
          break;

        case "sha256":
          this.results.data = this.hashSha256;
          this.results.completed = this.hashSha256.length;
          break;

        case "sha384":
          this.results.data = this.hashSha384;
          this.results.completed = this.hashSha384.length;
          break;

        case "sha512":
          this.results.data = this.hashSha512;
          this.results.completed = this.hashSha512.length;
          break;

        case "sha3":
          this.results.data = this.hashSha3;
          this.results.completed = this.hashSha3.length;
          break;

        default:
          break;
      }
    },

    executeAction() {
      this.action === "encrypt" ? this.encrypt() : this.decrypt();
    }
  }
};
</script>

<style lang="sass" scoped>
.filepond--panel-root
  background-color: #F1F0EF
  border: 1px dashed #959594
  min-height: 130px
</style>
