//ref identificador de compoenentes
Vue.component("contrasena", {
    props: ['contrasena'],
    template: `<input :value="contrasena" @input="comprobar_contrasena($event.target.value)" ref="pass">`,
    methods: {
        comprobar_contrasena(pass1) {
            if (this.noValidas.includes(pass1)) {
                this.$refs.pass.value = pass1 = '';
            }
            this.$emit('input', pass1);
        }

    },
    data() {
        return {
            noValidas: ['abc', 'admin', '123456', 'root']
        }
    }
});

const vm = new Vue({
    el: 'main',
    data: {
        contrasena: "",
    }
})
