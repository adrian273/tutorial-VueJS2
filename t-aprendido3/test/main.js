const vm = new Vue({
    el: '#content',
    data: {
        users: [],
        dataUSER: [],
        show_data: false,
        dataGENDER: [],
        classColor: '',
        dataIMG: []
    },
    mounted() {
        axios.get('https://randomuser.me/api/?results=60')
            .then((response) => {
                this.users = response.data.results;
            });
    },
    methods: {
        generatorName(_NAME) {
            this.dataUSER = _NAME.name;
            this.dataGENDER = _NAME.gender;
            this.dataIMG = _NAME.picture;
            this.show_data = true;
            if (this.dataGENDER === 'male') {
                this.classColor = "panel-info";
            } else {
                this.classColor = 'panel-success';
            }
        }
    }
})
