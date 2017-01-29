const vm = new Vue({
    el:'main',
    data:{
        newWork:null,
        items:[

        ]
    },
    methods:{
        addNewWork(){
            this.items.push(this.newWork);
            this.newWork = null
        }
    }
});