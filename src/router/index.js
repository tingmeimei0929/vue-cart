import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart.vue'
import Address from '../views/Address.vue'
// import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'
Vue.use(VueRouter)
// Vue.component('headerVue', Header)
// Vue.component('footerVue', Footer)

const routes = [{
    path: '/',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Address',
    name: 'Address',
    component: Address
  }
  // {
  //   path: '/',
  //   components: {
  //     header: Header,
  //     default: Footer,
  //     footer: Footer
  //   }
  // }
]

const router = new VueRouter({
  routes
})

export default router
