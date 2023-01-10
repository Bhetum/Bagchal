<script lang="ts">
	import { Move, State, checkWinner, getEmptyBoard } from '$lib/util';
	import Icon from '$lib/Icon.svelte';
	import EmptyCell from '$lib/EmptyCell.svelte';
	import { tick } from 'svelte';
	import Board from '$lib/Board.svelte';
	let board = getEmptyBoard();
	let state = State.Playing;
	let turn = Move.Goat;
	let boardEl: HTMLElement;
	let goatNum = 20;

	function place(row: number, col: number) {
		board[row][col] = turn;
		if (turn === Move.Goat) {
			if (goatNum === 0) {
				alert('no more goat');
			}
			turn = Move.Tiger;
			goatNum--;
		} else {
			turn = Move.Goat;
		}
	}

	$: winner = checkWinner(board);

	function reset() {
		board = getEmptyBoard();
	}
</script>

<!-- <Board /> -->

<div class="h-screen bg-gray-100 dark:bg-gray-700 flex flex-col gap-10 justify-center items-center">
	<div class="board bg-gray-700" bind:this={boardEl}>
		{#each board as row, r}
			{#each row as col, c}
				<div class="w-10 h-10 aspect-square bg-gray-100">
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
	<button
		class="bg-gray-700 w-20 p-2 text-gray-100 dark:text-gray-700 dark:bg-gray-100"
		on:click={reset}>Reset</button
	>
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
	}
</style>
