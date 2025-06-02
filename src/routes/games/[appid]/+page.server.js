import gameService from '$lib/server/games.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
const game = await gameService.getGameByAppid(params.appid);

	if (!game) {
		return {
			status: 404,
			error: new Error('Spiel nicht gefunden')
		};
	}

	return {
		game
	};
}
