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
    <!--  -->
    <lcx-popover
      placement="top"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">click 激活</el-button>
    </lcx-popover>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
<style lang="scss" scoped></style>
