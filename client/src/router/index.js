import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import About from '@/components/About'
import Myabout from '@/components/Myabout'
import Sale from '@/components/Sale'
import Create from '@/components/Create'
import Edit from '@/components/Edit'
import Login from '@/components/Login'
import Signup from '@/components/Signup'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/about',
      component: About,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          component: Myabout,
          meta: { requiresAuth: true }
        },
        {
          path: 'sale',
          component: Sale
        },
        {
          path: 'create',
          component: Create
        },
        {
          path: 'edit/:id',
          component: Edit
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    const authUser = window.localStorage.getItem('authUser');
    // console.log(authUser);
    if(!authUser){
      next('/')
    } else {
      next()
    }
  }else{
    next()
  }

})

export default router
