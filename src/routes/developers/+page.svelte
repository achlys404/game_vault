<script>
	export let data;

	$: page = +data.page;
	$: totalPages = +data.totalPages;
	$: developers = data.developers;

	// in 3 spalten aufteilen
	$: chunkSize = Math.ceil(developers.length / 3);
	$: columns = [
		developers.slice(0, chunkSize),
		developers.slice(chunkSize, chunkSize * 2),
		developers.slice(chunkSize * 2)
	];
</script>

<div class="container my-5">
	<h2 class="text-center mb-4">Entwickler</h2>

	<div class="row">
		{#each columns as column}
			<div class="col-md-4">
				<ul class="list-group mb-4">
					{#each column as dev}
						<li class="list-group-item d-flex justify-content-between align-items-center">
							<a href={`/developers/${dev.developer_id}`}>{dev.developer}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>

	<nav aria-label="Seiten-Navigation">
		<ul class="pagination justify-content-center mt-4">
			{#if page-10 >= 1}
				<li class="page-item">
					<a class="page-link" href={`?page=${page - 10}`}>&laquo;</a>
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

			{#if page+10 <= totalPages}
				<li class="page-item">
					<a class="page-link" href={`?page=${page + 10}`}>&raquo;</a>
				</li>
			{/if}
		</ul>
	</nav>
</div>
