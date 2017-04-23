import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import User from './components/User.vue';


export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/contact', component: Contact, name: 'contact', children: [
        {path: '', component: User}
    ]}
];
