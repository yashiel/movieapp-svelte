<script context="module">


export async function load({ params, fetch, session, stuff }) {
    const url = `./api/popular.json`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(response.ok){
        return {
            props: {
                shows : data.results,
                data,
            } 
        }
    }
  }


</script>

<script>
	export let shows;
    export let data;
</script>

<span>Current Page : <b>{data.page}</b></span>  <span>Total Pages : <b>{data.total_pages}</b></span> <span>Total Results : <b>{data.total_results}</b></span> 
<br>

{#each shows as tv, i}
	<h1>{tv.original_name}</h1>
    <h5>Popularity : {tv.popularity}</h5>
    <h5>Vote Avarage : {tv.vote_average}</h5>
    <h5>Vote Count : {tv.vote_count}</h5>
    <hr>
{/each}

<a href={`/popular/${data.page += 1}`}>Next Page</a> <br>
<span>Current Page : <b>{data.page}</b></span>  <span>Total Pages : <b>{data.total_pages}</b></span> <span>Total Results : <b>{data.total_results}</b></span> 


<style>
    :global(h1) {
        color: rgb(24, 24, 24);
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 2rem;
    }
</style>