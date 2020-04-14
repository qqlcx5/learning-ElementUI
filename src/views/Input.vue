<template>
  <div>
    <lcx-input v-model="input" clearable></lcx-input>
    <lcx-input v-model="input" :disabled="true"></lcx-input>
    <lcx-input v-model="input" show-password></lcx-input>
    <br>
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

</style>
