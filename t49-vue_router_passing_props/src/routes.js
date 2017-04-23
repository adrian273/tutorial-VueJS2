import Home from './components/Home.vue';
import User from './components/User.vue';
import UserBio from './components/UserBio.vue';
import Contact from './components/Contact.vue';

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/user', component: User, children:[
        {path: '', component: UserBio, name: 'bio'}
    ]},
    {path: '/contact/', component: Contact, name: 'contact', props: {newsletters : true}}
];
