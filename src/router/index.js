import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../view/Home.vue";
import About from "../view/About.vue";
import Contact from "../view/Contact.vue";
import Detail from "../view/Detail.vue";
import Produk from "../view/Produk.vue";
import Vue from "vue";
import Router from "vue-router"

Vue.use(Router)
const routes =[
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/home",
        name: "HomePage",
        component: Home,
    },
    {
        path: "/about",
        name: "AboutPage",
        component: About,
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: Contact,
    },
    {
        path: "/detail",
        name: "DetailPage",
        component: Detail,
    },
    {
        path: "/produk",
        name: "ProdukPage",
        component: Produk,
    }
]
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

const router = new Router({
    routes,
    mode: "history",
});

export default router;