<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		let iframe = document.getElementById('sellfy-iframe');
		let cont = document.getElementById('sellfy-container');

		const observer = new ResizeObserver((entries) => {
			for (let entry of entries) {
				let newHeight = entry.contentRect.height;
				if (cont && newHeight < window.innerHeight * 0.9) {
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
		width: 100%;
		background-color: #fafafa;
		min-height: 100%;
		max-height: 80vh;
		margin-top: 20px;
		margin-left: auto;
		margin-right: auto;
		max-height: 90vh;
		overflow-y: hidden; /* Prevent scrolling within the container */
		padding: 0;
		box-sizing: border-box;
	}

	#sellfy-iframe {
		display: block;
		width: 100%;
		height: 100%;
		border: none;
		margin: 0; /* Ensure no additional gap */
		padding: 0;
		box-sizing: border-box;
	}

	@media screen and (max-width: 450px) {
		#sellfy-container {
			max-height: 80vh;
		}

		#sellfy-iframe {
			min-height: 80vh;
		}
	}

	@media screen and (min-width: 450px) {
		#sellfy-container {
			max-height: 50vh;
		}
	}
</style>
