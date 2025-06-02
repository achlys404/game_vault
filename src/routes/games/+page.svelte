<script>
    export let data;
</script>

<div class="container my-4">
    <h1 class="mb-4 text-center">Spiel Übersicht</h1>

    <div class="row g-4">
        {#each data.games as game}
            <div class="col-12 col-md-6">
                <div class="card h-100 shadow-sm">
                    <div class="row g-0">

                        <!-- placeholder pictures, lazy loading heisst wird nur geladen wenn im sichtbaren bereich -->
                        <div class="col-4">
                            <img
                                src={`https://picsum.photos/seed/${game.appid}/200/150`}
                                class="img-fluid rounded-start h-100 object-fit-cover"
                                alt=""
                                loading="lazy"
                            />
                        </div>

                        <div class="col-8">
                            <div
                                class="card-body d-flex flex-column h-100 justify-content-between"
                            >
                                <div>
                                    <h6 class="card-title">{game.name}</h6>
                                    <p class="card-text mb-1">
                                        <strong>Genre:</strong>
                                        <!-- join die einzelnen array objekte mit den (*) dazwischen -->
                                        {game.genres}
                                    </p>
                                    <p class="card-text mb-1">
                                        <strong>Plattform:</strong>
                                        {game.platforms}
                                    </p>
                                    <span class="badge bg-secondary">
                                        {game.price} CHF</span
                                    >
                                </div>

                                <div class="text-end mt-2">
                                    <a
                                        class="btn btn-sm btn-primary"
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
