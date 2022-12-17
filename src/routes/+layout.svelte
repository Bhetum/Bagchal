<script lang="ts">
	// import skeleton css
	import '../app.postcss';
	import Header from '$lib/Header.svelte';
</script>

<!-- Page Content Slot -->
<Header />

<main class="">
	<slot />
</main>
