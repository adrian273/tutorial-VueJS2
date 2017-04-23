import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import NoFound from './components/NoFound.vue';

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/contact', component: Contact, name: 'contact'},
    {path: '*', component: NoFound}
];
