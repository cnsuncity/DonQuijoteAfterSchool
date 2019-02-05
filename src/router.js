import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:'Afterschool Don Quijote',
      metaTags:[{
        name: 'description',
        content: 'Afterschool Don Quijote este un afterschool situat in centrul orașului Bucuresti, destinat in mod special elevilor de la Liceul Bilingv "Miguel de Cervantes". Afterschool-ul oferă diferite servicii precum reluarea copiilor de la scoala, efectuarea temelor, masa calda si multe optionale'
        
      }]
    }},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {path:'/services',
     name: 'services',
     component: () => import(/* webpackChunkName: "services" */ './views/Services.vue')

    },
    {path:'/contact',
     name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')

    },
    {path:'/gallery',
     name: 'gallery',
     component: () => import(/* webpackChunkName: "gallery" */ './views/Gallery.vue')

    },
    {path:'/footer',
     name: 'footer',
     component: () => import(/* webpackChunkName: "footer" */ './views/Footer.vue'),
     props:{footer:true}
    }
  ]
})

