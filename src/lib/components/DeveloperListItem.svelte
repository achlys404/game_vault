<script>
	export let developer;
</script>

<li class="list-group-item d-flex justify-content-between align-items-center">
	<a href={`/developers/${developer.developer_id}`}>{developer.developer}</a>
</li>
