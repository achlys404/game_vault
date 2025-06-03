<script>
	export let game;
</script>

<div class="col-12 col-md-6">
	<div class="card h-100 shadow-sm">
		<div class="row g-0">
			<div class="col-4">
				<img
					src={`https://picsum.photos/seed/${game.appid}/200/150`}
					class="img-fluid rounded-start h-100 object-fit-cover"
					alt="Platzhalter"
					loading="lazy"
				/>
			</div>
			<div class="col-8">
				<div class="card-body d-flex flex-column h-100 justify-content-between">
					<div>
						<h6 class="card-title">{game.name}</h6>
						<p class="card-text mb-1"><strong>Genre:</strong> {game.genres?.join(", ")}</p>
						<p class="card-text mb-1"><strong>Plattform:</strong> {game.platforms?.join(", ")}</p>
						<span class="badge bg-secondary">{game.price} CHF</span>
					</div>
					<div class="text-end mt-2">
						<a class="btn btn-sm btn-primary" href={`/games/${game.appid}`}>Details</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
