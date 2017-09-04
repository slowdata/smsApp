import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    }
  ]
})
