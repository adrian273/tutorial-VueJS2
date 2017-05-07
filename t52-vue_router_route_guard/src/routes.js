import Home from './components/Home.vue'
import Crew from './components/Crew.vue'
import User from './components/User.vue'
import UserBio from './components/UserBio.vue'
import Contact from './components/Contact.vue'
import { store } from './store'

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/crew', component: Crew, children: [
        {path: '', components: {
            default: User,
            bio: UserBio
        }, name: 'crew'}
    ]},
    { beforeEnter: ((to, from, next) => {
        console.log('acceso ruta contacto')
        next(store.state.auth)
    }), path: '/contact', component: Contact, name: 'contact'}
]
