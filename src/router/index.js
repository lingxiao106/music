import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Answer from '@/components/page/Answer'
import Home from '@/components/page/Home'
import Music from '@/components/page/Music'
import Video from '@/components/page/Video'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        }, {
          path: 'answer',
          name: 'answer',
          component: Answer
        }, {
          path: 'video',
          name: 'video',
          component: Video
        }, {
          path: 'music',
          name: 'music',
          component: Music
        }]
    },

  ]
})
