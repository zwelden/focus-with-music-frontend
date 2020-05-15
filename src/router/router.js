import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: HomePage},
]

const router = new VueRouter({
    routes: routes
})

export default router