import db from './db.js';

async function getDevelopers(page = 1, limit = 60) {
	const skip = (page - 1) * limit;
	const collection = db.collection('Developer');

	const rawDevelopers = await collection.find().sort({ developer: 1 }).skip(skip).limit(limit).toArray();

	// _id entfernen oder als String speichern
	const developers = rawDevelopers.map(({ _id, ...rest }) => rest);

	const total = await collection.countDocuments();

	return {
		developers,
		page,
		totalPages: Math.ceil(total / limit)
	};
}


async function getDeveloperById(id) {
	const developer = await db.collection('Developer').findOne({ developer_id: parseInt(id) });
	if (!developer) return null;

	// _id vom Entwickler entfernen
	const { _id, ...cleanedDeveloper } = developer;

	// Spiele abrufen und ebenfalls _id entfernen
	const games = await db.collection('Game').find({ developer_id: parseInt(id) }).toArray();
	const cleanedGames = games.map(({ _id, ...rest }) => rest);

	// Entwickler-Daten mit Spielen zurückgeben
	return {
		...cleanedDeveloper,
		games: cleanedGames
	};
}


export default {
	getDevelopers,
	getDeveloperById
};
