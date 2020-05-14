<!--suppress HtmlUnknownTag -->
<template>
	<v-app>
		<PageHeader />
		<v-content>
			<router-view/>
		</v-content>
		<PageFooter />
	</v-app>
</template>

<script>
	import PageHeader from './components/PageHeader';
	import PageFooter from './components/PageFooter';
	export default {
		name: 'App',
		components: {
			'PageHeader': PageHeader,
			'PageFooter': PageFooter
		},
		data: () => ({
			//
		}),
		created () {
			// this.$vuetify.theme.dark = true
		}
	};
</script>