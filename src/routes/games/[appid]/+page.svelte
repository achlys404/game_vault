<script>
	export let data;
	const game = data.game;
</script>

{#if game}
	<div class="container my-5">
		<div class="row">
			<div class="col-md-4 mb-3">
				<img
					src={`https://picsum.photos/seed/${game.appid}/400/300`}
					alt={game.name}
					class="img-fluid rounded shadow-sm"
				/>
			</div>

			<div class="col-md-8">
				<h2>{game.name}</h2>

				<p><strong>Genres:</strong> {game.genres?.join(", ")}</p>
				<p>
					<strong>Plattformen:</strong>
					{game.platforms?.join(", ")}
				</p>
				<p><strong>Preis:</strong> {game.price} CHF</p>
				<p>
					<strong>Durchschnittliche Spielzeit:</strong>
					{game.average_playtime} min
				</p>
				<p><strong>Entwickler:</strong> {game.developer}</p>
				<p><strong>Mindestalter:</strong> {game.required_age}</p>
				<p>
					<strong>Veröffentlichungsdatum:</strong>
					{game.release_date}
				</p>

				<a
					class="btn btn-outline-secondary mt-3 me-2"
					href={`/games/${game.appid}/edit`}
				>
					Spiel bearbeiten
				</a>
				<a class="btn btn-outline-secondary mt-3" href="/games">
					Zurück zur Übersicht
				</a>
				
				<form method="POST"
					action="?/delete"
					on:submit={() =>
						confirm("Willst du dieses Spiel wirklich löschen?") ||
						event.preventDefault()}>
					<button type="submit" class="btn btn-danger mt-3">Spiel löschen</button>
				</form>

			</div>
		</div>
	</div>
{:else}
	<div class="container my-5">
		<div class="alert alert-warning">
			<h4>Spiel nicht gefunden.</h4>
			<p>Dieses Spiel existiert nicht in der Datenbank.</p>
			<a href="/games" class="btn btn-outline-secondary"
				>Zurück zur Übersicht</a
			>
		</div>
	</div>
{/if}
