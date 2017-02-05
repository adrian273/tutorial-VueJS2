vm = new Vue(
    el: 'main'
    data:
        ranking: 5 
        juegos:[
            {nombre:"gta5", genero: "rpg", puntuacion : 8}
            {nombre:"naruto", genero: "aventura", puntuacion : 10}
        ]
    computed:
            rankingVideoGames = ()->
                @juegos.filter((j)-> j.puntuacion >= @ranking)
)