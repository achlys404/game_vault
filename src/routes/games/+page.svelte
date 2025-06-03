<script>
    import Pagination from "$lib/components/Pagination.svelte";
    import GameCard from "$lib/components/GameCard.svelte";

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
        {#each data.games as game}
            <GameCard {game} />
        {/each}
    </div>
    <Pagination {page} {totalPages} baseUrl="/games" />
</div>
