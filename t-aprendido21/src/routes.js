import Home from './components/Home.vue';
import Usuario from './components/Usuario.vue';
import UsuarioBio from './components/UsuarioBio.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/usuario/:name', component: Usuario, children: [
        {path: '', component: UsuarioBio},
        {path: 'fotos', component: UsuarioFotos}
    ]},
];
