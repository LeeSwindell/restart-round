<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		let iframe = document.getElementById('sellfy-iframe');
		let cont = document.getElementById('sellfy-container');

		const observer = new ResizeObserver((entries) => {
			for (let entry of entries) {
				let newHeight = entry.contentRect.height;

				// Avoid endless resizing by setting a maximum height limit
				if (cont && newHeight < window.innerHeight) {
					cont.style.height = `${newHeight}px`;
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

<div id="sellfy-container">
	<iframe
		id="sellfy-iframe"
		title="store"
		width="100%"
		src="https://restart-round.sellfy.store/embed/store/"
		allowtransparency="true"
	></iframe>
	<script src="https://sellfy.com/js/api_buttons.js"></script>
</div>

<style>
	#sellfy-container {
		width: 80vw;
		background-color: #fafafa;
		margin-top: 20px;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden; /* Prevent scrolling */
		max-height: 90vh; /* Limit height expansion to 90% of the viewport */
	}

	#sellfy-iframe {
		display: block;
		width: 100%;
		border: none;
	}
</style>
