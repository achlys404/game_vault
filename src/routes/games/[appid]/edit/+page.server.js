import games from '$lib/server/games.js';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const game = await games.getGameByAppid(params.appid);
	if (!game) {
		throw error(404, 'Spiel nicht gefunden');
	}
	return { game };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();
		const updatedGame = {
			name: formData.get('name'),
			release_date: formData.get('release_date'),
			developer_id: parseInt(formData.get('developer_id')),
			platforms: formData.get('platforms')?.split(',').map(p => p.trim()),
			genres: formData.get('genres')?.split(',').map(g => g.trim()),
			required_age: parseInt(formData.get('required_age')) || 0,
			price: parseFloat(formData.get('price')),
			average_playtime: parseInt(formData.get('average_playtime')) || 0
		};

		await games.updateGame(parseInt(params.appid), updatedGame);
		throw redirect(303, `/games/${params.appid}`);
	}
};
