<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		let iframe = document.getElementById('sellfy-iframe');
		const observer = new ResizeObserver((entries) => {
			for (let entry of entries) {
				console.log('Element size changed to', entry.contentRect);
				let ht = entry.contentRect.height;
				let cont = document.getElementById('sellfy-container');
				if (cont && iframe) {
					cont.style.height = ht + 'px';
				}
			}
		});

		if (iframe) {
			observer.observe(iframe);
		}
	});
</script>

<svelte:head>
	<title>Restart Round | Store</title>
</svelte:head>
<main>
	<div id="sellfy-container">
		<iframe
			id="sellfy-iframe"
			title="store"
			height="365"
			width="100%"
			src="https://restart-round.sellfy.store/embed/store/"
			allowtransparency="true"
		></iframe>
		<script src="https://sellfy.com/js/api_buttons.js"></script>
	</div>
</main>

<style>
	main {
		height: 100%;
	}

	#sellfy-container {
		width: 80vw;
		background-color: #fafafa;
		height: 200vh;
		margin-top: 20px;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
	}

	/* add height changes for laptop/mobile to remove scrollbars? */
	iframe {
		display: block;
		padding: 0 !important;
		height: 1200px;
		width: 100%;
		border: none;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: -10px;
		overflow: hidden !important;
	}
</style>
