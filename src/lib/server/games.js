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

async function createGame(game) {
	const collection = db.collection('Game');
	await collection.insertOne(game);
}

async function updateGame(appid, newData) {
	const collection = db.collection('Game');
	await collection.updateOne({ appid: parseInt(appid) }, { $set: newData });
}
async function deleteGame(appid) {
	try {
		const collection = db.collection('Game');
		const result = await collection.deleteOne({ appid: parseInt(appid) });

		if (result.deletedCount === 0) {
			console.warn(`Kein Spiel mit appid ${appid} gefunden.`);
			return false;
		}

		console.log(`Spiel mit appid ${appid} wurde gelöscht.`);
		return true;
	} catch (error) {
		console.error('Fehler beim Löschen des Spiels:', error);
		return false;
	}
}
export default {
    getGames,
    getGameByAppid,
    createGame,
    updateGame,
    deleteGame
};