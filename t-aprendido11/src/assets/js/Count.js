import {mapMutations, mapState} from 'vuex';
export default {
    data(){
        return {
            msg : 'Adrian',
        }
    },
    methods : mapMutations(['aumentar', 'reducir']),
    computed: mapState({
        contador: (state) => state.contador,
    }),
}
