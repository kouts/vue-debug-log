<template>
  <div id="app">
    <debug-log />
  </div>
</template>

<script>
import '@/scss/app.scss';
import DebugLog from '@/components/DebugLog.vue';

export default {
  components: {
    DebugLog
  }
};
</script>
