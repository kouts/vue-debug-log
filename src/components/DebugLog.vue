<template>
  <div>
    <div class="debug-console-trigger" @click="openPopup">
      Log
    </div>
    <modal v-model="popupShow" title="Debug Log" modal-class="debug-console-popup">
      <div v-for="(entry, index) in entries" :key="index" class="debug-console-entry">
        <label>{{ entry.name }}</label>
        <json-viewer :value="entry.data" :expand-depth="5" copyable boxed sort></json-viewer>
      </div>
      <div v-if="entries.length === 0">
        Log is empty
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from '@kouts/vue-modal';
import JsonViewer from 'vue-json-viewer';
import '@kouts/vue-modal/dist/vue-modal.css';

export default {
  components: {
    Modal,
    JsonViewer
  },
  props: {
    log: {
      type: [Array, String],
      default: () => []
    }
  },
  data() {
    return {
      popupShow: false
    };
  },
  computed: {
    entries() {
      const res = this.log;
      return res;
    }
  },
  methods: {
    openPopup() {
      this.popupShow = true;
    }
  }
};
</script>

<style>
.vm.debug-console-popup {
  width: 1024px;
  max-width: 1024px;
}

.debug-console-trigger {
    background: #fa5838;
    padding: 12px 12px;
    color: #fff;
    position: absolute;
    top: 30%;
    right: 0px;
    cursor: pointer;
}

.debug-console-entry {
  margin-bottom: 10px;
}
</style>
