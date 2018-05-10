import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import Category from '@/pages/PageCategory'
import ThreadShow from '@/pages/PageThreadShow'
import Forum from '@/pages/PageForum'
import NotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:id',
      name: 'category',
      component: Category,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'forum',
      component: Forum,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'threadshow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
      // redirect: {name: 'home'}
      // redirect: '/'
    }
  ],
  mode: 'history'
})
