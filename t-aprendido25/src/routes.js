import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Bio from './components/Bio.vue'

export const routes = [
    {'path': '/', component: Home, name: 'home'},
    {'path': '/contact', component: Contact, name: 'contact'},
    {'path': '/bio/:id', component: Bio, name: 'bio'}
]