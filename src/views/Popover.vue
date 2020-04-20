<template>
  <div>
    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
    <!--   -->
    <lcx-popover
      class="test"
      placement="top"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <lcx-button slot="reference">hover 激活</lcx-button>
    </lcx-popover>
    <lcx-popover
      placement="top"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <lcx-button slot="reference">click 激活</lcx-button>
    </lcx-popover>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
<style lang="scss" scoped>
  // .test{
  //   height: 30px;
  //   overflow: hidden;
  // }
</style>
