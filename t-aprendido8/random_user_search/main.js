Vue.component("users", {
    template: "#users-template",
    mounted() {
        axios.get('https://randomuser.me/api/?results=500')
            .then((response) => {
                const list = response.data.results.map((data) => {
                    return {
                        name: `${data.name.title} ${data.name.first} ${data.name.last}`,
                        image: data.picture.medium,
                        email: data.email

                    }
                });
                this.users_list = list;
            });
    },
    data() {
        return {
            users_list: [],
            search_user: ''
        }
    },
    computed: {
        filterUser() {
            return this.users_list.filter((user) => {
                return user.name.includes(this.search_user);
            });
        }
    }
});

Vue.component("user", {
    props: ['data'],
    template: "#user-template"
});

new Vue({
    el: 'main'
});
