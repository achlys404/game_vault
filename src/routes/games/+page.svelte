<script>
    export let data;

    $: page = +data.page;
    $: totalPages = +data.totalPages;
    $: games = data.games;
</script>

<div class="container my-4">
    <div class="text-end mb-3">
        <a href="/games/create" class="btn btn-success"> Spiel hinzufügen </a>
    </div>
    <h1 class="mb-4 text-center">Spiel Übersicht</h1>

    <div class="row g-4">
        {#each games as game}
            <div class="col-12 col-md-6">
                <div class="card h-100 shadow-sm">
                    <div class="row g-0">
                        <!-- placeholder pictures, lazy loading heisst wird nur geladen wenn im sichtbaren bereich -->
                        <div class="col-4">
                            <img
                                src={`https://picsum.photos/seed/${game.appid}/200/150`}
                                class="img-fluid rounded-start h-100 object-fit-cover"
                                alt="Platzhalter"
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
                                        {game.genres?.join(", ")}
                                    </p>
                                    <p class="card-text mb-1">
                                        <strong>Entwickler:</strong>
                                        {game.developer}
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
    <nav aria-label="Seiten-Navigation">
        <ul class="pagination justify-content-center mt-4">
            {#if page > 1}
                <li class="page-item">
                    <a class="page-link" href={`?page=${page - 1}`}>&laquo;</a>
                </li>
            {/if}

            {#each Array(totalPages)
                .fill(0)
                .map((_, i) => i + 1)
                .filter((p) => Math.abs(p - page) <= 2) as p}
                <li class="page-item {p === page ? 'active' : ''}">
                    <a class="page-link" href={`?page=${p}`}>{p}</a>
                </li>
            {/each}

            {#if page < totalPages}
                <li class="page-item">
                    <a class="page-link" href={`?page=${page + 1}`}>&raquo;</a>
                </li>
            {/if}
        </ul>
    </nav>
</div>
