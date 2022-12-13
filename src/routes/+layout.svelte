<script lang="ts">
	// import skeleton css
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
</script>

<AppShell>
	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1 class="text-4xl">Bagchal</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm"
					href="https://github.com/Bhetum/Bagchal"
					target="_blank"
					rel="noreferrer">GitHub</a
				>
				<ThemeToggle />
			</svelte:fragment>
		</AppBar></svelte:fragment
	>

	<!-- Page Content Slot -->
	<slot />
</AppShell>
