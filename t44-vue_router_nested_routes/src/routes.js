import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import EquipoAdrian from './components/EquipoAdrian.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/equipo', component: Equipo,
        children: [
            {path: 'adrian', component: EquipoAdrian}
        ]
    }
];
