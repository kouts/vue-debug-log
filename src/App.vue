<template>
  <div id="app">
    <div class="container">
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies gravida rutrum. Vivamus id porta est. Morbi gravida aliquet sem, at sagittis est tempus et. Aliquam bibendum accumsan eros sed mollis. Donec venenatis nibh quis nulla viverra ultrices. Fusce euismod aliquet lectus et tristique. Donec at aliquam est. Morbi nibh urna, consectetur rutrum hendrerit nec, sollicitudin at neque. Fusce sit amet libero et turpis viverra sollicitudin. Praesent viverra risus vel libero pretium posuere vel non magna. Praesent molestie tincidunt vulputate. Nunc accumsan nisi viverra, luctus tellus quis, porta ex. Etiam id malesuada nisl.
      </p>
    </div>
  </div>
</template>

<script>
import '@/scss/app.scss';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { dataset1 } from '@/data/data';

export default {
  setup(props, context) {
    const test = reactive({
      name: 'George'
    });
    const test2 = reactive({
      name: 'Giannis'
    });
    onMounted(() => {
      debugLog('mpla');
      setTimeout(() => {
        debugLog(test2);
      }, 2000);
      setTimeout(() => {
        debugLog('Dataset:', dataset1);
      }, 3000);
    });
    return {
      test: toRefs(test),
      test2: toRefs(test2)
    };
  }
};
</script>
