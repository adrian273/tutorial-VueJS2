import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import Usuario from './components/Usuario.vue';
import UsuarioBio from './components/UsuarioBio.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo/:ident', component: Equipo, children: [
        {path: '', components: {
            default: Usuario,
            bio: UsuarioBio,
            fotos: UsuarioFotos,
        }, name: 'equipo' }
    ]}
];
