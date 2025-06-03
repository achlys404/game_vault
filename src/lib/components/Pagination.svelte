<script>
	export let page = 1;
	export let totalPages = 1;
	export let baseUrl = '';
	export let windowSize = 2; // Anzahl angrenzender Seitenlinks
</script>

<nav aria-label="Seiten-Navigation">
	<ul class="pagination justify-content-center mt-4">
		{#if page-10 >= 1}
			<li class="page-item">
				<a class="page-link" href={`${baseUrl}?page=${page - 10}`}>&laquo;</a>
			</li>
		{/if}

		{#each Array(totalPages)
			.fill(0)
			.map((_, i) => i + 1)
			.filter((p) => Math.abs(p - page) <= windowSize) as p}
			<li class="page-item {p === page ? 'active' : ''}">
				<a class="page-link" href={`${baseUrl}?page=${p}`}>{p}</a>
			</li>
		{/each}

		{#if page+10 <= totalPages}
			<li class="page-item">
				<a class="page-link" href={`${baseUrl}?page=${page + 10}`}>&raquo;</a>
			</li>
		{/if}
	</ul>
</nav>
