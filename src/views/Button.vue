<template>
  <div>
    <!-- <lcx-button type="default">default</lcx-button>
    <lcx-button type="primary">primary</lcx-button>
    <lcx-button type="info">info</lcx-button>
    <lcx-button type="danger">danger</lcx-button>
    <lcx-button type="success">success</lcx-button>
    <lcx-button type="warning" icon='icon-chuangzuo'>warning</lcx-button> -->
    <Child @listen="parentmethods"></Child>

    <h2>parentData</h2>
    {{parentData}}
  </div>
</template>

<script>
import Child from './Child'
export default {
  data() {
    return {
      parentData:false
    }
  },
  components:{
    Child
  },
  methods:{
    parentmethods(v){
      this.parentData = v
    }
  },
  beforeCreate() {
    console.log('beforeCreate parent')
  },
  beforeMount() {
    console.log('beforeMount parent')
  },
  beforeUpdate() {
    console.log('beforeUpdate parent')
  },
  beforeDestroy() {
    console.log('beforeDestroy parent')
  },
  created(){
    console.log('Create parent')
  },
  mounted(){
   console.log('mounted parent')
  },
  updated(){
    console.log('updated parent')
  },
  destroyed(){
    console.log('destroyed parent')
  }
}
</script>