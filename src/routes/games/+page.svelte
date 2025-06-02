<script>
    export let data;
</script>

<div class="container my-4">
    <h1 class="mb-4 text-center">🎮 GameVault Spieleübersicht</h1>

    <div class="row g-4">
        {#each data.games as game}
            <div class="col-12 col-md-6">
                <div class="card h-100 shadow-sm">
                    <div class="row g-0">
                <!-- placeholder pictures, lazy loading heisst wird nur geladen wenn im sichtbaren bereich -->
                        <div class="col-4">
                            <img
                                src={`https://picsum.photos/seed/${game.appid}/200/150`}
                                class="img-fluid rounded-start"
                                alt=""
                                loading="lazy"
                            />
                        </div>

                        <div class="col-8">
                            <div class="card-body d-flex flex-column h-100">
                                <div class="flex-grow-1">
                                    <h6 class="card-title">{game.name}</h6>
                                    <p class="card-text mb-1">
                                        <strong>Genre:</strong>
                                        {game.genres?.join(", ")} <!-- joined die einzelnen array inhalte in einen string mit dem ", " dazwischen -->
                                    </p>
                                    <p class="card-text mb-1">
                                        <strong>Plattform:</strong>
                                        {game.platforms?.join(", ")}
                                    </p>
                                    <p class="card-text mb-1">
                                        <strong>Preis:</strong>
                                        {game.price} CHF
                                    </p>
                                    <span class="badge bg-secondary"
                                        >⏱ {game.average_playtime} min</span
                                    >
                                </div>

                                <div class="text-end mt-2">
                                    <a
                                        class="btn btn-sm btn-outline-primary"
                                        href={`/games/${game.appid}`}>Details</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
