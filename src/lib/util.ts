export enum Move {
	Tiger = 'tiger',
	Goat = 'goat',
	Empty = ''
}

export enum State {
	Playing,
	Draw,
	Won
}

export function getEmptyBoard() {
	return [
		[Move.Tiger, Move.Empty, Move.Empty, Move.Empty, Move.Tiger],
		[Move.Empty, Move.Empty, Move.Empty, Move.Empty, Move.Empty],
		[Move.Empty, Move.Empty, Move.Empty, Move.Empty, Move.Empty],
		[Move.Empty, Move.Empty, Move.Empty, Move.Empty, Move.Empty],
		[Move.Tiger, Move.Empty, Move.Empty, Move.Empty, Move.Tiger]
	];
}

export function checkWinner(board: Move[][]) {}
