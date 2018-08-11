import Vue from 'vue'
import Router from 'vue-router'
import sample_table from '../components/sample_table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sample_table',
      component: sample_table
    },

  ]
})
