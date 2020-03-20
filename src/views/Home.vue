<template>
  <div class="box">
    <header>header</header>
    <main>
      <div class="left">
        <h2>1111</h2>
        <h2>1111</h2>
        <h2>1111</h2>
        <h2>1111</h2>
      </div>
      <div class="right">
        <div>
          <h2>1111</h2>
          <h2>1111</h2>
          <h2>1111</h2>
        </div>
        <div>
          <h2>1111</h2>
          <h2>1111</h2>
          <h2>1111</h2>
        </div>
        <div>
          <h2>1111</h2>
          <h2>1111</h2>
          <h2>1111</h2>
        </div>
        <div>
          <h2>2222</h2>
          <h2>1111</h2>
          <h2>1111</h2>
        </div>
      </div>
    </main>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
}
main {
  // min-height: 300px;
  width: 100%;
  display: flex;
  .left {
    // height: 100%;
    width: 100%;
    background-color: rgb(160, 48, 48);
  }
  .right {
    // height: 300px;
    width: 100%;
    // height: 100%;
    background-color: rgb(70, 189, 143);
  }
}
</style>
