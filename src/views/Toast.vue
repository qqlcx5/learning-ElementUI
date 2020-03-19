<template>
  <div @click="toast()">toast</div>
</template>
<script>
import { showToast } from "../components/toast/Toast";
export default {
  methods: {
    toast() {
      // this.$toast("请输入密码");
      showToast("请输入密码");
    }
  }
  // created() {
  //   registryToast();
  // }
};
</script>
