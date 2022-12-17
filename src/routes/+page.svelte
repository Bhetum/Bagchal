<script lang="ts">
	import { Move, State, checkWinner } from '$lib/util';
	import Icon from '$lib/Icon.svelte';
	import EmptyCell from '$lib/EmptyCell.svelte';
	import { tick } from 'svelte';

	let board = getEmptyBoard();
	let state = State.Playing;
	let turn = Move.Goat;
	let boardEl: HTMLElement;

	function getEmptyBoard() {
		return [
			[Move.Tiger, Move.Empty, Move.Empty, Move.Empty, Move.Tiger],
			[Move.Empty, Move.Empty, Move.Empty, Move.Empty, Move.Empty],
			[Move.Empty, Move.Empty, Move.Empty, Move.Empty, Move.Empty],
			[Move.Empty, Move.Empty, Move.Empty, Move.Empty, Move.Empty],
			[Move.Tiger, Move.Empty, Move.Empty, Move.Empty, Move.Tiger]
		];
	}

	function place(row: number, col: number) {
		board[row][col] = turn;
		turn = turn === Move.Goat ? Move.Tiger : Move.Goat;
	}

	$: winner = checkWinner(board);

	function reset() {
		board = getEmptyBoard();
	}
</script>

<div class="board bg-gray-700" bind:this={boardEl}>
	{#each board as row, r}
		{#each row as col, c}
			<div class="w-10 h-10 aspect-square bg-white">
				{#if col !== Move.Empty}
					<Icon move={col} />
				{:else}
					<EmptyCell on:click={() => place(r, c)} disabled={state !== State.Playing}>
						<span class="sr-only">Place row {r + 1} column {c + 1}</span>
					</EmptyCell>
				{/if}
			</div>
		{/each}
	{/each}
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		aspect-ratio: 1/1;
		width: 500px;
		height: 500px;
		place-items: center;
		margin-inline: auto;
		margin-top: 1rem;
	}
</style>
