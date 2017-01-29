const vm = new Vue({
    el: 'main',
    data: {
        laborales: ['lunes', 'martes', 'miercoles', 'jueves'],

        tareas: [
            { nombre: 'hacer las tareas', prioridad: 'baja' },
            { nombre: 'aprender vue y firefabase', prioridad: 'media' },
            { nombre: 'jugar play', prioridad: 'alta' }
        ],

        persona: {
            nombre: 'adrian',
            profesion: 'programador',
            ciudad: 'maule-city'
        }
    }
});