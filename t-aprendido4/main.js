Vue.component("my-component", {
    props: ['data'],
    template: "#my-component-template"
});

new Vue({
    el: 'main',
    data: {
        dataGame: [{
            title: "Dragon age",
            gender: "RPG",
            year: 2014,
            cover: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Dragon_Age_Inquisition_BoxArt.jpg'
        }, {
            title: "Grand theft auto",
            gender: "Action",
            year: 2013,
            cover: 'https://cdn.downdetector.com/static/uploads/c/300/76ed8/gta-v-logo-huge-transback1.png'
        }]
    }
})
