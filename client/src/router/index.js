import Vue from 'vue'
import Router from 'vue-router'

//public
import Home from '@/components/public/Index'
import Detail from '@/components/public/Detail'

//mysale
import Sale from '@/components/mysale/Sale'
import Create from '@/components/mysale/Create'
import Edit from '@/components/mysale/Edit'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sale/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/mysale',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/mysale/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/mysale/edit/:id',
    name: 'Edit',
    component: Edit
  }]
})