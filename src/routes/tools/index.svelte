<script context="module">
	export function preload() {
		return this.fetch(`tools.json`).then(r => r.json()).then(tools => {
			return { tools };
		});
	}
</script>

<script>
	export let tools;
</script>

<style>
	* {
	text-align: center;
		margin: 5px;
		padding: 2px;
	}
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	li {
		list-style: none;
	}
</style>

<svelte:head>
	<title>Toolbox</title>
</svelte:head>

<h1>Complete List of Tools</h1>

<ul>
	{#each tools as tool}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="tools/{tool.slug}">{tool.title}</a></li>
	{/each}
</ul>
