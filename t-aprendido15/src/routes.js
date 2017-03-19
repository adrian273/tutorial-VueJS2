import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import Blog from './components/Blog.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/blog', component: Blog},
    {path: '/contacto', component: Contacto}
];
