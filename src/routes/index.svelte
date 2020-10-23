<script>
	import ToolBox from '../components/ToolBox.svelte';
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: auto;
	}

	h1 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 250;
		color: #ff4500;
		margin: 0 0 0.25em 0;
	}

	h2 {
		display: block;
		font-size: 1em;
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
		margin-inline-start: 0;
		margin-inline-end: 0;
		font-weight: bold;
		text-align: center;
	}



	@media (min-width: 1024px) {
		h1{
			margin-top: 0;
			font-size:4em;
			width: 100%;
		}
		h2 {
			font-size: 1.5em;
		}
	}
</style>

<svelte:head>
	<title>Web Toolbox</title>
</svelte:head>

<main>
	<h1>
		The Web Toolbox
	</h1>
	<h2>
		Tools made to ease your life
	</h2>
	<ToolBox />
</main>
