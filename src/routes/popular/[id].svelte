<script context="module">
	export const prerender = true;
	export const load = async ({ params, fetch }) => {
		const id = params.id;
		const res = await fetch(`../api/popular/${id}.json`);
		const data = await res.json();
		return {
			props: {
				shows: data.results,
				data
			}
		};
	};
</script>

<script>
	export let shows;
	export let data;

</script>

<svelte:head>
  <title>Populer TV Shows | Page No {data.page}</title>
</svelte:head>

<span>Current Page : <b>{data.page}</b></span> <span>Total Pages : <b>{data.total_pages}</b></span>
<span>Total Results : <b>{data.total_results}</b></span>
<br />

{#each shows as tv, i}
	<h1>{tv.original_name}</h1>
	<h5>Popularity : {tv.popularity}</h5>
	<h5>Vote Avarage : {tv.vote_average}</h5>
	<h5>Vote Count : {tv.vote_count}</h5>
	<hr />
{/each}

{#if data.page > 1}<a sveltekit:prefetch sveltekit:noscroll href={`/popular/${data.page - 1}`}>Previous Page</a> {/if} | <a sveltekit:prefetch sveltekit:noscroll href={`/popular/${data.page + 1}`}>Next Page</a> <br />
<span>Current Page : <b>{data.page}</b></span> <span>Total Pages : <b>{data.total_pages}</b></span>
<span>Total Results : <b>{data.total_results}</b></span>
