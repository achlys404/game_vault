import db from './db.js';

async function getGames(page = 1, limit = 20) {
	const skip = (page - 1) * limit;
	const collection = db.collection('Game');

	const games = await collection.find().skip(skip).limit(limit).toArray();
	const total = await collection.countDocuments();

	// Entwicklernamen für alle Spiele auflösen
	const devMap = {};
	const developers = await db.collection('Developer').find().toArray();
	developers.forEach(dev => devMap[dev.developer_id] = dev.developer);

	const cleanedGames = games.map(({ _id, ...rest }) => ({
		...rest,
		developer: devMap[rest.developer_id] || `Unbekannt (ID ${rest.developer_id})`
	}));

	return {
		games: cleanedGames,
		page,
		totalPages: Math.ceil(total / limit)
	};
}

async function getGameByAppid(appid) {
	const game = await db.collection('Game').findOne({ appid: parseInt(appid) });
	if (!game) return null;

	// Entwickler anhand der developer_id laden
	const developer = await db.collection('Developer').findOne({ developer_id: game.developer_id });

	const { _id, ...rest } = game;
	return {
		...rest,
		developer: developer?.developer || `Unbekannt (ID ${game.developer_id})`
	};
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