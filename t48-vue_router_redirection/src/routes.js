import Home from './components/Home.vue';
import Info from './components/Info.vue';
import Usuario from './components/Usuario.vue';
import UsuarioBio from './components/UsuarioBio.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/prueba', redirect: '/info/adrian'},
    {path: '/info/:ident', component: Info, children: [
        {path: '', component: Usuario, children: [
            {path: '', component: UsuarioBio, name: 'bio'},
            {path: 'fotos', component: UsuarioFotos, name: 'fotos'}
        ]}
    ]}
];
