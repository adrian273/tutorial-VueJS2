import Home from './components/Home.vue';
import User from './components/User.vue';
import Profile from './components/Profile.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/user', component: User, children:[
        {path: 'profile/:id/:name', component: Profile}
    ]},
]
