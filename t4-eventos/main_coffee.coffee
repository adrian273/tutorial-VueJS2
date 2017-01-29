class Main_coffee
     vm = new Vue(
        el:'main'
        data:
            nuevaTarea : null
            tareas:[
                 'graffitar'
                 'programar'
             ]
        methods:
                agregarTarea: ->
                        @tareas.push(@nuevaTarea)
                        @nuevaTarea = null

    )