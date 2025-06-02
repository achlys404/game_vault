<script>
	export let data;
	const game = data.game;
</script>

{#if game}
	<div class="container my-5">
		<h2>{game.name}</h2>

		<p><strong>Genres:</strong> {game.genres?.join(", ")}</p>
		<p><strong>Plattformen:</strong> {game.platforms?.join(", ")}</p>
		<p><strong>Preis:</strong> {game.price} CHF</p>
		<p><strong>Durchschnittliche Spielzeit:</strong> {game.average_playtime} min</p>
		<p><strong>Publisher:</strong> {game.publisher}</p>

		<a class="btn btn-outline-secondary mt-3" href="/games">Zurück zur Übersicht</a>
	</div>
{:else}
	<div class="container my-5">
		<div class="alert alert-warning">
			<h4>Spiel nicht gefunden.</h4>
			<p>Dieses Spiel existiert nicht in der Datenbank.</p>
			<a href="/games" class="btn btn-outline-secondary">Zurück zur Übersicht</a>
		</div>
	</div>
{/if}
