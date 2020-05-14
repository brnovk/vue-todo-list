import Vue from 'vue'
import Router from 'vue-router'
import AllTasks from './pages/AllTasks.vue'
import ActiveTasks from './pages/ActiveTasks.vue'
import ClosedTasks from './pages/ClosedTasks.vue'

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'root',
			component: ActiveTasks
		},
		{
			path: '/active',
			name: 'active',
			component: ActiveTasks
		},
		{
			path: '/closed',
			name: 'closed',
			component: ClosedTasks
		},
		{
			path: '/all',
			name: 'home',
			component: AllTasks
		},
		{
			path: '/edit',
			name: 'edit',
			component: () => import('./pages/EditTask.vue')
		}
	]
})