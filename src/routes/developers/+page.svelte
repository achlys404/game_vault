<script>
	import Pagination from "$lib/components/Pagination.svelte";
	import DeveloperListItem from "$lib/components/DeveloperListItem.svelte";

	export let data;

	$: page = +data.page;
	$: totalPages = +data.totalPages;
	$: developers = data.developers;

	// in 3 spalten aufteilen
	$: chunkSize = Math.ceil(developers.length / 3);
	$: columns = [
		developers.slice(0, chunkSize),
		developers.slice(chunkSize, chunkSize * 2),
		developers.slice(chunkSize * 2),
	];
</script>

<div class="container my-5">
	<h2 class="text-center mb-4">Entwickler</h2>

	<div class="row">
		{#each columns as column}
			<div class="col-md-4">
				<ul class="list-group mb-4">
					{#each developers as dev}
						<DeveloperListItem developer={dev} />
					{/each}
				</ul>
			</div>
		{/each}
	</div>

	<Pagination {page} {totalPages} baseUrl="/developers" />
</div>
