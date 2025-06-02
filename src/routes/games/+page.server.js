
export const prerender = false;
export const csr = false;
import db from '$lib/server/db.js';

export async function load({ url }) {
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = 20;
    const skip = (page - 1) * limit;

    const gamesRaw = await db.collection("Game")
        .find()
        .skip(skip)
        .limit(limit)
        .toArray();

    const games = gamesRaw.map(({ _id, ...rest }) => rest); // _id wird ignoriert


    const total = await db.collection("Game").countDocuments();
    const totalPages = Math.ceil(total / limit);

    return {
        games,
        page,
        totalPages
    };
}
