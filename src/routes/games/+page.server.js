/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const games = [
    {
      appid: 1001,
      name: "Shadow Circuit",
      release_date: "2022-11-01",
      english: true,
      developer_id: 1,
      publisher: "Digital Forge",
      platforms: ["windows", "mac"],
      required_age: 16,
      categories: ["Single-player", "Steam Achievements"],
      genres: ["Action", "RPG"],
      steamspy_tags: ["Cyberpunk", "Fast-Paced", "Futuristic"],
      achievements: 45,
      positive_ratings: 1245,
      negative_ratings: 87,
      average_playtime: 312,
      median_playtime: 180,
      owners: "200000-500000",
      price: 19.99
    },
    {
      appid: 1002,
      name: "Pixel Storm",
      release_date: "2021-05-17",
      english: true,
      developer_id: 2,
      publisher: "IndieWorks",
      platforms: ["windows", "linux"],
      required_age: 0,
      categories: ["Multiplayer", "Co-op"],
      genres: ["Strategy"],
      steamspy_tags: ["Pixel Graphics", "Tactical"],
      achievements: 12,
      positive_ratings: 845,
      negative_ratings: 123,
      average_playtime: 155,
      median_playtime: 80,
      owners: "100000-200000",
      price: 9.99
    },
    {
      appid: 1003,
      name: "Retro Raid",
      release_date: "2020-09-12",
      english: false,
      developer_id: 3,
      publisher: "RetroGames Ltd.",
      platforms: ["windows"],
      required_age: 12,
      categories: ["Single-player"],
      genres: ["Arcade", "Shooter"],
      steamspy_tags: ["Old School", "Bullet Hell"],
      achievements: 0,
      positive_ratings: 478,
      negative_ratings: 52,
      average_playtime: 85,
      median_playtime: 60,
      owners: "50000-100000",
      price: 4.99
    }
  ];

  return { games };
}
