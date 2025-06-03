<script>
	import GameCard from '$lib/components/GameCard.svelte';
	export let data;

	const developer = data.developer; 
	const games = developer.games;
</script>
<div class="container my-5">
	<h2>{developer.developer}</h2>
	<p><strong>ID:</strong> {developer.developer_id}</p>

	<h4 class="mt-4">Spiele von {developer.developer}</h4>

	{#if games.length > 0}
		<div class="row g-4">
			{#each games as game}
				<GameCard {game} />
			{/each}
		</div>
	{:else}
		<p>Keine Spiele gefunden.</p>
	{/if}

	<a href="/developers" class="btn btn-outline-secondary mt-4">Zurück</a>
</div>