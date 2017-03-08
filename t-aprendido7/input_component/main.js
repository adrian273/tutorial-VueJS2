Vue.component("password", {
    props: ['pass'],
    template: "#password-template",
    methods: {
        validarPass(pass_one) {
            if (this.noValido.includes(pass_one)) {
                this.msj_error = true;
            } else {
                this.msj_error = false;
                this.$emit('input', pass_one);
            }

        }
    },
    data() {
        return {
            noValido: ['admin', 'root', 'abcd'],
            msj_error: false
        }
    }
});

new Vue({
    el: 'main',
    data: {
        password_data: ''
    }
});
