import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _ead06168 = () => import('../pages/sample.vue' /* webpackChunkName: "pages/sample" */).then(m => m.default || m)
const _1cd2c91e = () => import('../pages/messages/index.vue' /* webpackChunkName: "pages/messages/index" */).then(m => m.default || m)
const _6806ca02 = () => import('../pages/messages/new.vue' /* webpackChunkName: "pages/messages/new" */).then(m => m.default || m)
const _435967c2 = () => import('../pages/messages/_form.vue' /* webpackChunkName: "pages/messages/_form" */).then(m => m.default || m)
const _73fd3c20 = () => import('../pages/messages/_id/edit.vue' /* webpackChunkName: "pages/messages/_id/edit" */).then(m => m.default || m)
const _267425c0 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
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
			path: "/sample",
			component: _ead06168,
			name: "sample"
		},
		{
			path: "/messages",
			component: _1cd2c91e,
			name: "messages"
		},
		{
			path: "/messages/new",
			component: _6806ca02,
			name: "messages-new"
		},
		{
			path: "/messages/:form",
			component: _435967c2,
			name: "messages-form"
		},
		{
			path: "/messages/:id/edit",
			component: _73fd3c20,
			name: "messages-id-edit"
		},
		{
			path: "/",
			component: _267425c0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
