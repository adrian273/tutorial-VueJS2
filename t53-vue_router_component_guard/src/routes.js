import Home from './components/Home.vue'
import Crew from './components/Crew.vue'
import User from './components/User.vue'
import UserBio from './components/UserBio.vue'
import Contact from './components/Contact.vue'
import { store } from './store'

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/crew/:ident', component: Crew, children:[
        {path: '', components: {
            default: User,
            userbio: UserBio,
        }, name: 'crew', props: {default: true}}
    ], props: true},
    { beforeEnter: ((to, from , next) => {
        console.log('ruta contacto')
        next(store.state.auth)
    }), path: '/contact', name: 'contact', component: Contact}
]
