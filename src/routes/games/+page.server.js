import gameService from '$lib/server/games.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const page = parseInt(url.searchParams.get('page') || '1');

	const games = await gameService.getGames(page);

	return games;
}
