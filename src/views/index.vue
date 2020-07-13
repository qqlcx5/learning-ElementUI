<template>
  <div>
    <lcx-button @click.native="$router.push({name:'Button'})">button</lcx-button>
    <lcx-button @click.native="$router.push({name:'Input'})">input</lcx-button>
    <lcx-button @click.native="$router.push({name:'Message'})">message</lcx-button>
    <lcx-button @click.native="$router.push({name:'Toast'})">toast</lcx-button>
    <lcx-button @click.native="handleRouter('Popover')">popover</lcx-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleRouter(name){
      this.$router.push({name})
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
