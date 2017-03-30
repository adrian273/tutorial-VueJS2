import Home from './components/Home.vue';
import Category from './components/Category.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/category/:type', component: Category}
];
