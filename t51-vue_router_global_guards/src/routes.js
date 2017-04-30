import Home from './components/Home.vue';
import Crew from './components/Crew.vue';
import User from './components/User.vue';
import UserBio from './components/UserBio.vue';
import Contact from './components/Contact.vue';

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/crew/:ident', component: Crew, children:[
        {path: '', components:{
            default: User,
            bio: UserBio
        }, name: 'crew'}
    ], props: true},
    {path: '/contact', component: Contact, name: 'contact'}
];
