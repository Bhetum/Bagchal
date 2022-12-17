<script lang="ts">
	import ThemeToggle from '$lib/ThemeToggle.svelte';
</script>

<header
	class="sticky top-0 z-20 bg-gray-100 shadow-md transition-all ease-in-out dark:bg-gray-800 dark:text-gray-100"
>
	<nav class="flex items-center justify-between p-4 md:px-8">
		<!-- content -->
		<a href="/" class="text-4xl"> Bagchal </a>

		<div>
			<a href="https://github.com/Bhetum/Bagchal">Github</a>
			<ThemeToggle />
		</div>
	</nav>
</header>

<style>
</style>
