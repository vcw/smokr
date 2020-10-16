import Vue from 'vue';
import vueBemCn from 'vue-bem-cn';

// default delimiters settings
const bemConfig = {
  delimiters: {
    ns: '', // namespace
    el: '__', // element delimeter
    mod: '_', // modifier delimeter
    modVal: '_', // value delimeter for modifier
  },
  hyphenate: true,
};

Vue.use(vueBemCn, bemConfig);
