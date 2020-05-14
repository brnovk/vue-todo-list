<!--suppress HtmlUnknownTag -->
<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<v-app-bar dense dark>
			<v-toolbar-title><router-link to="/">ToDo list</router-link></v-toolbar-title>
			<v-spacer></v-spacer>
			<v-tooltip bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon to="/active" v-on="on"><v-icon>mdi-checkbox-blank-outline</v-icon></v-btn>
				</template>
				<span>Active tasks</span>
			</v-tooltip>
			<v-tooltip bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon to="/closed" v-on="on"><v-icon>mdi-checkbox-marked-outline</v-icon></v-btn>
				</template>
				<span>Closed tasks</span>
			</v-tooltip>
			<v-tooltip bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon to="/all" v-on="on"><v-icon>mdi-checkbox-multiple-marked-outline</v-icon></v-btn>
				</template>
				<span>All tasks</span>
			</v-tooltip>
			<v-tooltip bottom>
				<template v-slot:activator="{ on }">
					<v-btn icon to="/edit" v-on="on"><v-icon>mdi-plus-box</v-icon></v-btn>
				</template>
				<span>Add task</span>
			</v-tooltip>
		</v-app-bar>
	</div>
</template>
<style scoped>
	.v-toolbar__title a {
		text-decoration: none;
	}
</style>