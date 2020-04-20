<template>
  <div>
    <div v-if="visible" ref="popover">
      <h3>{{ title }}</h3>
      {{ content }}
    </div>
    <slot name="reference"></slot>
  </div>
</template>
<script>
const on = (element, event, handle) =>{
  element.addEventListener(event, handle, false)
}
// const off = (element, event, handle) =>{
//   element.removeEventListener(event, handle, false)
// }
export default {
  name: 'lcx-popover',
  data() {
    return {
      visible: false,
    };
  },
  props: {
    title: {
      type: String,
    },
    trigger: {
      type: String,
    },
    width: {
      type: String,
    },
    content: {
      type: String,
    },
    placement: {
      type: String,
      validator(type) {
        if (!['top', 'left', 'right', 'botton'].includes(type)) {
          throw new Error(
            '属性必须是' + ['top', 'left', 'right', 'botton'].join('、')
          );
        }
        return true;
      },
    },
  },
  methods: {
    handleToggle(){
      this.visible = !this.visible
    },
    handleDocumentToggle(e){
      if(this.$el.contains(e.target)) return
      this.visible = false
    },
    // handleToggle(){
    //   this.visible = !this.visible
    // },
  },
  mounted() {
    let reference = this.$slots.reference;
    if (reference) {
      this.reference = reference[0].elm;
    }
    // if (this.trigger === 'hover') {

    // }
    if (this.trigger === 'click') {
      on(this.reference, 'click', this.handleToggle)
      on(document, 'click', this.handleDocumentToggle)
    }
  },
};
</script>
