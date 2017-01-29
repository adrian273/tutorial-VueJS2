vm = new Vue(
    el:'main'
    data:
        newTarea: null
        tareas:[

        ]
    methods:
            addNewTarea : ->
                    @tareas.unshift(@newTarea)
                    @newTarea = null
)
console.log @vm