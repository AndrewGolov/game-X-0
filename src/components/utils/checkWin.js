import { WIN_PATTERNS } from '../constants/WIN_PATTERNS';

export const checkWin = (fieldGame, player) =>
	WIN_PATTERNS.some((pArr) => pArr.every((index) => fieldGame[index] === player));
