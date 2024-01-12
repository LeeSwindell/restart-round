<script lang="ts">
	import WhatAreWeWhacking from '$lib/components/molepark/WhatAreWeWhacking.svelte';
	import MoleParkLanding from '$lib/components/molepark/MoleParkLanding.svelte';
	import WelcomeToMolehaven from '$lib/components/molepark/WelcomeToMolehaven.svelte';
	import HowDoYouPlay from '$lib/components/molepark/HowDoYouPlay.svelte';
	import Prizes from '$lib/components/molepark/Prizes.svelte';
	import Extras from '$lib/components/molepark/Extras.svelte';
</script>

<svelte:head>
	<title>Restart Round | Mole Park</title>
</svelte:head>

<main>
	<div class="col-container">
		<MoleParkLanding />
		<WelcomeToMolehaven />
		<HowDoYouPlay />

	</div>
</main>

<style>
	main {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		justify-content: center;
		align-items: center;
	}

	.col-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow-y: visible;
		margin-left: auto;
		margin-right: auto;
	}
</style>
