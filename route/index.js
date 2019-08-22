import Vue from 'vue';
import vueRouter from 'vue-router';
const Home =()=>import('../views/home /Home.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Categery=()=>import('../views/categery/Categery.vue')
const Profile=()=>import('../views/profile/Profile.vue')

Vue.use(vueRouter)
const routes=[
   { 
       path: '',
       redirect: "/home"
    },
   {
       path:'/home',
       component:Home
   },
   {
        path:'/cart',
        component:Cart
   },
   {
        path:'/categery',
        component:Categery
   },
   {
        path:'/profile',
        component:Profile
   }]
   const router=new vueRouter({
        routes,
        mode:'history'
   })
   export default router