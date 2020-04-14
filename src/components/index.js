// import Vue from 'vue'
import Button from '@/components/button/button.vue';
import Icon from '@/components/icon/icon.vue';

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
}

export default{
  install
}