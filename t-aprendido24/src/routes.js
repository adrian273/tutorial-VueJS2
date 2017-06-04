import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact, name:'contact'}
]