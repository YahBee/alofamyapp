import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _af3119f4 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _25ced95d = () => import('..\\pages\\profile.vue' /* webpackChunkName: "pages\\profile" */).then(m => m.default || m)
const _2664d82e = () => import('..\\pages\\chat\\index.vue' /* webpackChunkName: "pages\\chat\\index" */).then(m => m.default || m)
const _677e9b25 = () => import('..\\pages\\chat\\Login.vue' /* webpackChunkName: "pages\\chat\\Login" */).then(m => m.default || m)
const _95721c3e = () => import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages\\_lang\\index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _af3119f4,
			name: "index"
		},
		{
			path: "/profile",
			component: _25ced95d,
			name: "profile"
		},
		{
			path: "/chat",
			component: _2664d82e,
			name: "chat"
		},
		{
			path: "/chat/Login",
			component: _677e9b25,
			name: "chat-Login"
		},
		{
			path: "/:lang",
			component: _95721c3e,
			name: "lang"
		}
    ],
    fallback: false
  })
}
