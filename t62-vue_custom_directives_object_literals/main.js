Vue.directive('fijar', {
  bind(el, binding){
    console.log(binding.value);
  /*  el.style.position = 'fixed';
    if(binding.expression){
        el.style.top = binding.expression + 'px';
    }

    // para conprobar los argumnetos
    if(binding.arg){
      let color = 'goldenrod';
      // acceder al modificador
      let modificadores = Object.keys(binding.modifiers);
      if(modificadores.length > 0){
        color = modificadores[0];
      }
      el.style.backgroundColor = color;
    } */
  }
});

new Vue({
  el: '#app',
});
