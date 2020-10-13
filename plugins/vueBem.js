import Vue from 'vue';
import vueBem from '@verstaerker/vue-bem';

Vue.use(vueBem, {
  namespace: '',
  blockSource: 'name',
  method: '$bem',
  hyphenate: {
    blockAndElement: true,
    modifier: true,
  },
  delimiters: {
    element: '__',
    modifier: '_',
    value: '_',
  },
});
