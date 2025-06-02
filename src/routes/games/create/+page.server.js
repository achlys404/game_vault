import games from '$lib/server/games.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const newGame = {
      appid: parseInt(formData.get('appid')),
      name: formData.get('name'),
      release_date: formData.get('release_date') || null,
      developer_id: parseInt(formData.get('developer_id')),
      platforms: formData.get('platforms')?.split(',').map(p => p.trim()) || [],
      required_age: parseInt(formData.get('required_age')) || 0,
      genres: formData.get('genres')?.split(',').map(g => g.trim()) || [],
      price: parseFloat(formData.get('price')),
      average_playtime: parseInt(formData.get('average_playtime')) || 0
    };

    await games.createGame(newGame);
    throw redirect(303, '/games');
  }
};
