<template>
  <div>
    <button @click="handleShow">message</button>
  </div>
</template>
<script>
import Message from "../components/message/message";
export default {
  data() {
    return {};
  },
  methods: {
    handleShow() {
      // console.log("messagemessagemessage");

      Message.success({ message: "handleShow message message message" });
    }
  }
};
</script>
