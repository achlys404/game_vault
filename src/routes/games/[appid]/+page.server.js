import gameService from '$lib/server/games.js';
import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';



/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const game = await gameService.getGameByAppid(params.appid);

	if (!game) {
		throw error(404, 'Spiel nicht gefunden');
	}

	return {
		game
	};
}


export const actions = {
	delete: async ({ params }) => {
		await gameService.deleteGame(parseInt(params.appid));
		throw redirect(303, '/games');
	}
};