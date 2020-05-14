const DB_NAME = 'tasksDb';
const TABLE_NAME = 'tasks';
const DB_VERSION = 1;
let dbInstance;

export default {

	async getDbInstance() {
		return new Promise((resolve, reject) => {
			if (dbInstance) {
				return resolve(dbInstance);
			}
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			request.onerror = e => {
				console.error('Error opening db', e);
				reject('Error');
			};
			request.onsuccess = e => {
				dbInstance = e.target.result;
				resolve(dbInstance);
			};
			request.onupgradeneeded = e => {
				let database = e.target.result;
				database.createObjectStore(TABLE_NAME, { autoIncrement: true, keyPath: 'id' });
			};
		});
	},

	async getTasks() {
		let database = await this.getDbInstance();
		return new Promise(resolve => {
			let transaction = database.transaction([TABLE_NAME], 'readonly');
			transaction.oncomplete = () => {
				resolve(rowsToReturn);
			};
			let table = transaction.objectStore(TABLE_NAME);
			let rowsToReturn = [];
			table.openCursor().onsuccess = e => {
				let tableCursor = e.target.result;
				if (tableCursor) {
					rowsToReturn.push(tableCursor.value);
					tableCursor.continue();
				}
			};
		});
	},

	async deleteTask(task) {
		let database = await this.getDbInstance();
		return new Promise(resolve => {
			let transaction = database.transaction([TABLE_NAME], 'readwrite');
			transaction.oncomplete = () => {
				resolve();
			};
			let table = transaction.objectStore(TABLE_NAME);
			table.delete(task.id);
		});
	},

	async saveTask(task) {
		let database = await this.getDbInstance();
		return new Promise(resolve => {
			let transaction = database.transaction([TABLE_NAME], 'readwrite');
			transaction.oncomplete = () => {
				resolve();
			};
			let table = transaction.objectStore(TABLE_NAME);
			table.put(task);
		});
	}
}