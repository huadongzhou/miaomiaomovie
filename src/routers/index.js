import Vue from 'vue'
import Router from 'vue-router'
import Movie from './movie'
import Cinema from './cinema'
import Mine from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    Movie,
    Cinema,
    Mine,
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
