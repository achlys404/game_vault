import db from './db.js';

async function getGames(page = 1, limit = 20) {
	const skip = (page - 1) * limit;
	const collection = db.collection('Game');

	const games = await collection.find().skip(skip).limit(limit).toArray();
	const total = await collection.countDocuments();

	const cleanedGames = games.map(({ _id, ...rest }) => rest);

	return {
		games: cleanedGames,
		page,
		totalPages: Math.ceil(total / limit)
	};
}

async function getGameByAppid(appid) {
    const game = await db.collection('Game').findOne({ appid: parseInt(appid) });
    if (!game) return null;

    const { _id, ...cleaned } = game;
    return cleaned;
}

// Platzhalter für später:
async function createGame(game) { /* ... */ }
async function updateGame(appid, newData) { /* ... */ }
async function deleteGame(appid) { /* ... */ }

export default {
    getGames,
    getGameByAppid,
    createGame,
    updateGame,
    deleteGame
};