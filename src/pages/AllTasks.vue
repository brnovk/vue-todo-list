<!--suppress HtmlUnknownTag -->
<template>
	<v-container>
		<v-simple-table v-if="tasks.length">
			<caption>All tasks</caption>
			<thead>
				<tr>
					<th>Text</th>
					<th>Date execute</th>
					<th>Is execute</th>
					<th colspan="3">Actions</th>
				</tr>
			</thead>
			<tbody>
				<TableRowTask v-for="(task, index) in tasks" :key="index"
					:task="task" @close="closeTask" @edit="editTask" @delete="deleteTask" />
			</tbody>
		</v-simple-table>
		<v-alert v-if="!tasks.length" type="warning">
			The list of tasks is empty.<br>
			Want to <strong><router-link to="/edit">add</router-link></strong>?
		</v-alert>
	</v-container>
</template>
<script>
	import TableRowTask from "@/components/TableRowTask";

	export default {
		components: {
			TableRowTask
		},
		computed: {
			tasks() {
				return this.$store.state.tasks;
			}
		},
		created() {
			this.$store.dispatch('getAllTasks');
		},
		methods: {
			async closeTask(task) {
				await this.$store.dispatch('closeTask', task);
				this.$store.dispatch('getAllTasks');
			},
			async deleteTask(task) {
				if (confirm("Do you want to remove this task?")) {
					await this.$store.dispatch('deleteTask', task);
					this.$store.dispatch('getAllTasks');
				}
			},
			editTask(task) {
				this.$router.push({ name: 'edit', params: { task: task } });
			}
		}
	};
</script>