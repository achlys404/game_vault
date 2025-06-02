<script>
	export let data;
	const game = data.game;
</script>

{#if game}
	<div class="container my-5">
		<h2>Spiel bearbeiten: {game.name}</h2>

		<form method="POST">
			<div class="mb-3">
				<label class="form-label" for="appid">App ID</label>
				<input id="appid" type="number" class="form-control" name="appid" value={game.appid} disabled />
			</div>

			<div class="mb-3">
				<label class="form-label" for="name">Name</label>
				<input id="name" type="text" class="form-control" name="name" value={game.name} required />
			</div>

			<div class="mb-3">
				<label class="form-label" for="release_date">Veröffentlichungsdatum</label>
				<input id="release_date" type="text" class="form-control" name="release_date" value={game.release_date} />
			</div>

			<div class="mb-3">
				<label class="form-label" for="developer_id">Entwickler ID</label>
				<input id="developer_id" type="number" class="form-control" name="developer_id" value={game.developer_id} required />
			</div>

			<div class="mb-3">
				<label class="form-label" for="platforms">Plattformen (durch Semikolon getrennt)</label>
				<input id="platforms" type="text" class="form-control" name="platforms" value={Array.isArray(game.platforms) ? game.platforms.join(";") : game.platforms} />
			</div>

			<div class="mb-3">
				<label class="form-label" for="genres">Genres (durch Semikolon getrennt)</label>
				<input id="genres" type="text" class="form-control" name="genres" value={Array.isArray(game.genres) ? game.genres.join(";") : game.genres} />
			</div>

			<div class="mb-3">
				<label class="form-label" for="required_age">Mindestalter</label>
				<input id="required_age" type="number" class="form-control" name="required_age" value={game.required_age} />
			</div>

			<div class="mb-3">
				<label class="form-label" for="price">Preis (CHF)</label>
				<input id="price" type="number" step="0.01" class="form-control" name="price" value={game.price} required />
			</div>

			<div class="mb-3">
				<label class="form-label" for="average_playtime">Durchschnittliche Spielzeit (min)</label>
				<input id="average_playtime" type="number" class="form-control" name="average_playtime" value={game.average_playtime} />
			</div>

			<button type="submit" class="btn btn-primary">Änderungen speichern</button>
			<a href={`/games/${game.appid}`} class="btn btn-outline-secondary ms-2">Abbrechen</a>
		</form>
	</div>
{:else}
	<div class="container my-5">
		<div class="alert alert-warning">
			<h4>Spiel nicht gefunden.</h4>
			<a href="/games" class="btn btn-outline-secondary mt-2">Zurück zur Übersicht</a>
		</div>
	</div>
{/if}
