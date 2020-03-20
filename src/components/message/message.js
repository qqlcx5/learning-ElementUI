import Vue from "vue";
import messageComp from "./message.vue";
let MessageConstructor = Vue.extend(messageComp);
const Message = options => {
  let instance = new MessageConstructor({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
};
["success", "error", "warning"].forEach(type => {
  Message[type] = function(options) {
    options.type = type;
    return Message(options);
  };
});
export default Message;
