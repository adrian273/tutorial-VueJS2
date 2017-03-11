<template lang="jade">
  div
        h1 Hola , {{autor}}
        label(:class='[$style.rojo]') Juegos Preferidos
        ul
            li(v-for='game in games')
                a(href='#' @click='info(game.info)') {{game.title}}

</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {
            seen: false,
            games : [
                {title : "Dragon Age", gender : "Arpg", info : 'ioware planea fusionar elementos de lodos primeros juegos de la serie, Dragon Age: Origins y Dragon Age II, en la creación de Dragon Age: Inquisition.7 El juego contará con ambientes mucho más grandes que permitirán al jugador explorar el mundo más libremente.Bioware ha confirmado que varias de las razas jugables regresarán, tanto en versiones masculinas como femeninas. Los jugadores podrán jugar como humano, enano o elfos, tal y como era posible en Dragon AgOrigins. Además, los Qunari también serán una razaNo obstante, se espera que el combate sea algo diferente de sus predecesores y se enfoque más en la habilidad del jugador para preparse, posicionarse y formar un equipo cohesionado,11 lo que requerirá menos acciones repetitivas con el mouse pero mejor preparación.11 La vista táctica también regresará para las cinco plataformas en Dragon Age: Inquisition, dado que antes era exclusiva para la versión de PC en Dragon Age: Origins, y que fue quitada en Dragon AgEl aspecto del romance en el juego será cambiado por completo. A diferencia del anterior sistema de Bioware que se basaba en entrega de regalos y diálogos, el romance tendrá lugar en reacción a eventos y variables específicas de cada personaje, las cuales culminarán en escenas sexuales "maduras y de buen gusto".1Los desarrolladores prometieron a los seguidores del juego que, a diferencia de los anteriores títulos, las decisiones hechas a lo largo de la serie tendrán un impacto más grande en la historia y que el jugador tendrá más control sobre su experiencia en el juego.14'},
                {title : 'Gta5', gender : "action", info : 'Grand Theft Auto V (abreviado como GTA V o GTA5) es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.5 Posteriormente, fue lanzado para las consolas de nueva generación PlayStation 4 y Xbox One el 18 de noviembre de 2014 y finalmente para Microsoft Windows el 14 de abril de 2015. Se trató del primer gran título en la serie Grand Theft Auto desde que se estrenara Grand Theft Auto IV en 2008, el cual estrenó la «era HD» de la mencionada serie de videojuegos.6'},
                {title : 'the elder scroll skirim', gender : 'Arpg', info : 'The Elder Scrolls V : Skyrim es un videojuego de rol de acción del tipo mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. Es la quinta entrega de videojuegos de acción y fantasía de la serie The Elder Scrolls y es posterior a The Elder Scrolls IV: Oblivion y predecesor de The Elder Scrolls Online. Skyrim salió a la venta el 11 de noviembre de 20111 para las plataformas: Microsoft Windows, Xbox 360 y PlayStation 3. El 26 de julio de 2012 fueron lanzados al mercado tres expansiones que son descargables: Dawnguard, Hearthfire y Dragonborn. El 28 de octubre de 2016 fue lanzada una remasterización llamada: Skyrim Special Edition HD. Incluye el juego original y los complementos, así como nuevas características: gráficos y efectos renovados.'}
            ]
        }
    },
    computed : mapState(['autor']),
    methods : {
        info(i){
            this.seen = true;
        }
    }
}
</script>

<style lang="css" module>
    .rojo {
        color: red;
    }
</style>
