import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://ani:Passwort1234@cluster0.xxf1g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function convertGenresAndPlatforms() {
  try {
    await client.connect();
    const db = client.db('GameVault');
    const games = db.collection('Game');

    const cursor = games.find({
      $or: [
        { genres: { $type: 'string' } },
        { platforms: { $type: 'string' } }
      ]
    });

    let updated = 0;

    for await (const game of cursor) {
      const genresArray = game.genres?.split?.(';').map(g => g.trim()) ?? game.genres;
      const platformsArray = game.platforms?.split?.(';').map(p => p.trim()) ?? game.platforms;

      await games.updateOne(
        { _id: game._id },
        { $set: { genres: genresArray, platforms: platformsArray } }
      );

      updated++;
    }

    console.log(`${updated} success.`);
  } catch (error) {
    console.error('Fehler:', error);
  } finally {
    await client.close();
  }
}

convertGenresAndPlatforms();
