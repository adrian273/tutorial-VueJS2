Vue.component('template-kdr', {
    props: ['users-one'],
    template: `<div><ul><li v-for="u in users">{{u.gender}} <img :src="u.picture.medium" style='display:in-line;'></li></ul></div>`,
    mounted() {
        axios.get('https://randomuser.me/api/?results=50')
            .then((response) => {
                this.users = response.data.results;
            });
    },
    data() {
        return {
            users: []
        }
    }
});
const vm = new Vue({
    el: '#content'
});
