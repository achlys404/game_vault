<script>
	export let data;
	const dev = data.developer;
</script>

<div class="container my-5">
	<h2>{dev.developer}</h2>
	<p><strong>ID:</strong> {dev.developer_id}</p>

	<h4 class="mt-4">Spiele dieses Entwicklers:</h4>
	<ul>
		{#each dev.games as game}
			<li>
				<a href={`/games/${game.appid}`}>{game.name}</a>
			</li>
		{/each}
	</ul>
</div>
