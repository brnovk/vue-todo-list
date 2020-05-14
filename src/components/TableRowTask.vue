<!--suppress HtmlUnknownTag -->
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<tr>
		<td>{{ task.text }}</td>
		<td width="15%">{{ task.executeDateTime ? moment(task.executeDateTime).format('LLL') : '' }}</td>
		<td width="10%">{{ task.isExecute ? 'Yes' : 'No' }}</td>
		<td width="1%">
			<v-tooltip bottom v-if="!task.isExecute">
				<template v-slot:activator="{ on }">
					<v-btn icon @click="$emit('close', task)" v-on="on">
						<v-icon>mdi-checkbox-marked-outline</v-icon>
					</v-btn>
				</template>
				<span>Close</span>
			</v-tooltip>
		</td>
		<td width="1%">
			<v-tooltip bottom v-if="!task.isExecute">
				<template v-slot:activator="{ on }">
					<v-btn icon @click="$emit('edit', task)" v-on="on"><v-icon>mdi-pencil</v-icon></v-btn>
				</template>
				<span>Edit</span>
			</v-tooltip>
		</td>
		<td width="1%">
			<v-tooltip bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon @click="$emit('delete', task)" v-on="on"><v-icon>mdi-delete</v-icon></v-btn>
				</template>
				<span>Delete</span>
			</v-tooltip>
		</td>
	</tr>
</template>
<script>
	import moment from 'moment';

	export default {
		props: ['task'],
		data: () => ({
			moment: moment
		}),
		created() {
		},
		methods: {
		}
	};
</script>