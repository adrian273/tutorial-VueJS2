// Generated by CoffeeScript 1.11.1
(function() {
  var vm;

  vm = new Vue({
    el: 'main',
    data: {
      newWork: null,
      items: []
    },
    methods: {
      addNewWork: function() {
        if (this.newWork != null) {
          this.items.push(this.newWork);
          return this.newWork = null;
        } else {
          alert("No ahi nada que agregar");
          return false;
        }
      }
    }
  });

}).call(this);
