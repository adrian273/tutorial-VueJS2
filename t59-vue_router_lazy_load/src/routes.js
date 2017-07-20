import Home from './components/Home.vue'
import Crew from './components/Crew.vue'
import User from './components/User.vue'
import UserBio from './components/UserBio.vue'
import UserImg from './components/UserImg.vue'
import UserFriend from './components/UserFriend.vue'
//import Contact from './components/Contact.vue'
import Error404 from './components/Error404.vue'
import { store } from './store'

// para cargar el componente solo
// se carga solamente cuando valla hacer utilizado
const Contact = resolve => {
  require.ensure(['./components/Contact.vue'], () => {
    resolve(require('./components/Contact.vue'))
  })
}
export const routes = [
    {
        path: '/', component: Home, name: 'home'
    },
    {
        path: '/crew/:ident', component: Crew, children:[
        {
            path: '', component: User, children:[
                {
                  path: '', component: UserBio, name: 'bio'
                },
                {
                    path: 'fotos', component: UserImg, name: 'fotos'
                },
                {
                  path: 'amigos', component: UserFriend, name: 'friends'
                }
            ], name: 'crew'
        }
      ], props: true
    },
    {
      beforeEnter:((to, from, next) => {
          next(store.state.auth)
      }), path: '/contact', component: Contact, name: 'contact'
    },
    // pagina no encontrada
    {
        path: '*', component: Error404
    }
];
