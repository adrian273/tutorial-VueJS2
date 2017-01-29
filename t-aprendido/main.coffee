vm = new Vue(
    el: 'main'
    data:
        newWork: null
        items:[
            
        ]
    methods:
            addNewWork: ->
                    if @newWork?
                        @items.push(@newWork)
                        @newWork = null
                    else
                        alert "No ahi nada que agregar"
                        return off

)
