<template>
  <div class="bg">
    <lcx-input v-model="input" clearable></lcx-input>
    <lcx-input v-model="input" :disabled="true"></lcx-input>
    <lcx-input v-model="input" show-password></lcx-input>
    {{ input }}
  </div>
</template>
<script>
import lcxInput from '../components/input/input';
export default {
  data() {
    return {
      input: 'input'
    };
  },
  methods: {
    handleShow() {}
  },
  components: {
    lcxInput,
  }
};
</script>
<style lang="scss" scoped>
.bg {
  font-size: 30px;
  &::v-deep .icon{

  // width: 15px;
  // height: 30px;
  // transform:scaleX(1.5);
  color: #000;
  }
}
</style>
