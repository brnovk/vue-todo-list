<!--suppress HtmlUnknownTag -->
<template>
	<div>
		<v-form>
			<v-container>
				<div v-if="validationErrors.length">
					<v-alert type="error" dismissible v-for="(validationError, i) in validationErrors" :key="i">
						{{validationError}}
					</v-alert>
				</div>
				<v-row>
					<v-col>
						<v-text-field v-model="task.text" label="Task text" required></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-btn to="/" class="mr-4">&lt; back to main</v-btn>
						<v-btn color="green" @click="save">{{submitButtonMessage}}</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				task: { text: '', isExecute: false, executeDateTime: null },
				submitButtonMessage: 'Add task',
				validationErrors: []
			}
		},
		created() {
			if (this.$route.params.task) {
				this.task = this.$route.params.task;
				this.submitButtonMessage = 'Update task';
			}
		},
		methods: {
			isEmptyOrSpaces: function(str) {
				return str === undefined || str === null || str.match(/^ *$/) !== null;
			},
			async save() {
				const fieldName = 'Task text';
				const fieldMaxLength = 255;
				this.validationErrors = [];
				if (this.isEmptyOrSpaces(this.task.text)) {
					this.validationErrors.push("Field '" + fieldName + "' is empty");
					return;
				}
				this.task.text = this.task.text.trim();
				if (this.task.text.length > fieldMaxLength) {
					this.validationErrors.push(
						"Field '\" + fieldName + \"' cannot be longer than " + fieldMaxLength + " characters"
					);
					return;
				}
				await this.$store.dispatch('saveTask', this.task);
				this.$router.push({ name: 'root' });
			}
		}
	};
</script>