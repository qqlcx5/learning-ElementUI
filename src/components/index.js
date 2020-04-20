// import Vue from 'vue'
import Button from '@/components/button/button.vue';
import Icon from '@/components/icon/icon.vue';
import Input from '@/components/input/input.vue';
import Popover from '@/components/popover/popover.vue';

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(Input.name, Input)
  Vue.component(Popover.name, Popover)
}

export default{
  install
}