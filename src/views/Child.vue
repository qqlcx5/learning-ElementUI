<template>
  <div>
    ChildChildChild
    <div @click="test = !test">
     {{test}}
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      test: false
    }
  },
  beforeCreate() {
    console.log('beforeCreate Child')
  },
  beforeMount() {
    console.log('beforeMount Child')
  },
  beforeUpdate() {
    console.log('beforeUpdate Child')
  },
  beforeDestroy() {
    console.log('beforeDestroy Child')
  },
  created(){
    console.log('Create Child')
  },
  mounted(){
   console.log('mounted Child')
  },
  updated(){
    console.log('updated Child')
    this.$emit('listen', this.test)
  },
  destroyed(){
    console.log('destroyed Child')
  }
}
</script>