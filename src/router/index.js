import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from "@/const/db.js"
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/properties',
        name: 'Properties',
        component: () =>
            import ( /* webpackChunkName: "properties" */ '../views/Properties.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ( /* webpackChunkName: "blog" */ '../views/Blog.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/property/:slug',
        name: 'Property',
        component: () =>
            import ( /* webpackChunkName: "property" */ '../views/Property.vue'),
        props: true,
        beforeEnter: (to, from, next) => {
            const exists = store.anuncios.find(
                anuncio => anuncio.slug === to.params.slug
            );
            if (exists) {
                next();
            } else {
                next({ name: 'notFound' })
            }
        }
    },
    {
        path: '/article/:slug',
        name: 'Article',
        component: () =>
            import ( /* webpackChunkName: "article" */ '../views/Article.vue'),
        props: true,
        beforeEnter: (to, from, next) => {
            const exists = store.blogs.find(
                blog => blog.slug === to.params.slug
            );
            if (exists) {
                next();
            } else {
                next({ name: 'notFound' })
            }
        }
    },
    {
        path: '/404',
        alias: '*',
        name: 'notFound',
        component: () =>
            import ( /* webpackChunkName: "notfound" */ '../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router