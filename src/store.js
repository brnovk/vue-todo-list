import Vue from 'vue'
import Vuex from 'vuex'

import IndexedDbHandler from '@/db-storage/indexed-db-handler';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tasks:[]
	},
	mutations: {
	},
	actions: {
		async getAllTasks(context) {
			context.state.tasks = [];
			let tasks = await IndexedDbHandler.getTasks();
			tasks.forEach(c => {
				context.state.tasks.push(c);
			});
		},
		async getClosedTasks(context) {
			context.state.tasks = [];
			let tasks = await IndexedDbHandler.getTasks();
			tasks.forEach(c => {
				if (c.isExecute) {
					context.state.tasks.push(c);
				}
			});
		},
		async getActiveTasks(context) {
			context.state.tasks = [];
			let tasks = await IndexedDbHandler.getTasks();
			tasks.forEach(c => {
				if (!c.isExecute) {
					context.state.tasks.push(c);
				}
			});
		},
		async closeTask(context, task) {
			task.isExecute = true;
			task.executeDateTime = Date.now();
			await IndexedDbHandler.saveTask(task);
		},
		async saveTask(context, cat) {
			await IndexedDbHandler.saveTask(cat);
		},
		async deleteTask(context, task) {
			await IndexedDbHandler.deleteTask(task);
		}
	}
})