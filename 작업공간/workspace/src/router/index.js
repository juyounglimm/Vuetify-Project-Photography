import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../components/Navbar.vue'
import Login from '../views/Login.vue'
import NormalLogin from '../components/NormalLogin.vue'
import CompanyLogin from '../components/CompanyLogin.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import Register from '../components/Register.vue'
import Apply from '../views/Apply.vue'
import Intro from '../views/Intro.vue'
import Community from '../views/Community.vue'
import Customer from '../views/Customer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      app: Home
    },
  },
  {
    path: '/navbar',
    name: 'Navbar',
    components: {
      app: Navbar
    },
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      app: Login
    },
  },
  {
    path: '/normalLogin',
    name: 'NormalLogin',
    components: {
      navbar: NormalLogin
    },
  },
  {
    path: '/companyLogin',
    name: 'CompanyLogin',
    components: {
      navbar: CompanyLogin
    },
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    components: {
      navbar: ForgotPassword
    },
  },
  {
    path: '/register',
    name: 'Register',
    components: {
      navbar: Register
    },
  },
  {
    path: '/apply',
    name: 'Apply',
    components: {
      navbar: Apply
    },
  },
  {
    path: '/intro',
    name: 'Intro',
    components: {
      navbar: Intro
    },
  },
  {
    path: '/community',
    name: 'Community',
    components: {
      navbar: Community
    },
  },
  {
    path: '/customer',
    name: 'Customer',
    components: {
      navbar: Customer
    },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
