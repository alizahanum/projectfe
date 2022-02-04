import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

function importComponent(path) {
    return () => import (`./components/${path}.vue`)
}
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            name: "login",
            component: importComponent('Login'),
        },
       
    
        //akses slidebar
        {
        path : "/slideBarUtama",
        component: () => import( './components/SlideBarUtama.vue'),
        meta: { requiresAuth: true },
        beforeEnter(to, from, next){
            if(localStorage.getItem('email') == null || localStorage.getItem('password') == null){
                alert('!! Restricted Access !!'),
                next(false);
            }else{
             next();
            }
        },
        children : [
            {
            path: "/Beranda",
            name: "beranda",
            meta: { requiresAuth: true },
            component: importComponent('Beranda'),
            },
            {
                path: "/job",
                name: "job",
                meta: { requiresAuth: true },
                component: importComponent('AddJob'),
                },
           
        ]
               
     },
      {
            path :'/*',
            redirect : '/'
        },
    ]
});



export default router;