<template>
  <div>
    <div class="debug-console-trigger" @click="openPopup">
      Log
    </div>
    <modal v-model="popupShow" title="Debug Log" modal-class="debug-console-popup">
      <div class="row">
        <div class="col-sm-12">
          <div v-for="(entry, index) in log" :key="index">
            <json-viewer :value="entry" :expand-depth="5" copyable boxed sort></json-viewer>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';
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
      type: Array,
      default: () => []
    }
  },
  setup() {
    const state = reactive({
      popupShow: false
    });

    const openPopup = () => {
      state.popupShow = true;
    };

    return {
      ...toRefs(state),
      openPopup
    };
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
    padding: 12px 20px;
    color: #fff;
    position: absolute;
    top: 30%;
    right: 0px;
    cursor: pointer;
}
</style>
