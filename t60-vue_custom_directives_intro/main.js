Vue.directive('destacar', {
  bind(el, binding, vnode){
    el.style.color = 'red';
    el.style.fontSize = binding.value + 'px';
  }
});

new Vue({
  el: '#app',
  data:{
    msg: 'Custom directives'
  }
});
