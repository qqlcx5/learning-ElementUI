<template>
  <div class="bg">
    <lcx-input v-model="input"></lcx-input>
    <lcx-input v-model="input" :disabled="true"></lcx-input>
    <lcx-input v-model="input" show-password></lcx-input>
    <div style="display:flex;">
      <lcx-icon icon="up" />
       <lcx-icon icon="down" />
    </div>
    {{ input }}
  </div>
</template>
<script>
import lcxInput from '../components/input/input';
import lcxIcon from '../components/icon/icon';
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
    lcxIcon
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
