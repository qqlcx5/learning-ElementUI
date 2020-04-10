<template>
  <div>
    <lcx-input v-model="input"></lcx-input>
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
      input: 'input',
    };
  },
  methods: {
    handleShow() {},
  },
  components: {
    lcxInput,
  },
};
</script>
