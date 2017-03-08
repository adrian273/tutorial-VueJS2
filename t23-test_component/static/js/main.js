Vue.component("users", {
    template: "#users-template",
    mounted() {
        axios.get("https://randomuser.me/api/?results=500")
            .then((response) => {
                const list_users = response.data.results.map((user) => {
                    return {
                        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
                        email: user.email,
                        image: user.picture.medium
                    }

                });
                this.users = list_users;
            });
    },
    data() {
        return {
            users: [],
            search_user: ''
        }
    },
    computed: {
        filtrarUsers() {
            return this.users.filter((u) => {
                return u.name.includes(this.search_user);
            });
        }
    }
});

Vue.component("user", {
    props: ['data'],
    template: "#user-template",
})

new Vue({
    el: 'main'
});
