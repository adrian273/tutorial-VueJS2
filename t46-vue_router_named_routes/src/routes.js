import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import Usuario from './components/Usuario.vue';
import UsuarioBio from './components/UsuarioBio.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo/:name', component: Equipo, children: [
        {path: '', component: Usuario, children: [
            {path: 'biografia', component: UsuarioBio ,name: 'bio'},
            {path: 'fotos', component: UsuarioFotos, name: 'fotos'},
        ]
      },
    ]},
]
