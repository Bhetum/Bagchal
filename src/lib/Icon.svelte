<script lang="ts">
	import { Move } from './util';
	export let move: Move;
</script>

{#if move === Move.Tiger}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-10 h-10"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
	</svg>
{:else}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-10 h-10"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
{/if}
<span class="sr-only">
	{#if move === Move.Tiger}
		Tiger
	{:else}
		Goat
	{/if}
</span>
