<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';

	let dismissed = true;
	let duration = 4000;
	let easing = backInOut;

	let outOptions = { duration, easing, delay: 0, y: -500 };
	let inOptions = { duration, easing, delay: 600, y: -500 };

	const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

	onMount(() => {
		const storedTimestamp = localStorage.getItem('bannerDismissedTimestamp');
		if (storedTimestamp) {
			const currentTime = new Date().getTime();
			const elapsed = currentTime - parseInt(storedTimestamp, 10);
			if (elapsed > oneDayInMilliseconds) {
				dismissed = false;
			} else {
				localStorage.removeItem('bannerDismissed');
				localStorage.removeItem('bannerDismissedTimestamp');
			}
		} else {
			dismissed = false;
		}
	});

	function dismissBanner() {
		dismissed = true;
		const currentTimestamp = new Date().getTime();
		localStorage.setItem('bannerDismissed', 'true');
		localStorage.setItem('bannerDismissedTimestamp', currentTimestamp.toString());
	}
</script>

{#if !dismissed}
	<div class="container" id="banner-container" in:fly={inOptions} out:fly={outOptions}>
		<div class="white-background">
			<h3>
				Listen to the Restart Round Theme Song:<br />
				<audio controls src="/restartround.mp3"></audio>
			</h3>
			<button class="dismiss-button" on:click={dismissBanner}>x</button>
		</div>
		<div class="blue-background"></div>
	</div>
{/if}

<style>
	.container {
		position: fixed;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		height: fit-content;
		width: fit-content;
		max-width: 80vw;
		padding: 10px;
		overflow: hidden;
		border-radius: 10px;
		z-index: 99;
	}

	.white-background {
		position: relative;
		background-color: #fafafa;
		padding: 8px 8px 8px 8px;
		border-radius: 6px;
		margin: 8px;
		width: calc(100% - 16px); /* Subtract left and right margins */
		height: calc(100% - 16px); /* Subtract top and bottom margins */
		z-index: 2;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.blue-background {
		position: absolute;
		background: conic-gradient(
			from 0deg at 50% 50%,
			rgba(255, 0, 0, 1) 0%,
			rgba(255, 154, 0, 1) 10%,
			rgba(208, 222, 33, 1) 20%,
			rgba(79, 220, 74, 1) 30%,
			rgba(63, 218, 216, 1) 40%,
			rgba(47, 201, 226, 1) 50%,
			rgba(28, 127, 238, 1) 60%,
			rgba(95, 21, 242, 1) 70%,
			rgba(186, 12, 248, 1) 80%,
			rgba(251, 7, 217, 1) 90%,
			rgba(255, 0, 0, 1) 100%
		);
		top: 5vh;
		left: 50%;
		width: 100vmax;
		height: 100vmax;
		transform: translateX(-50%);
		z-index: 1;

		animation: rotateBackground 5s linear infinite;
	}

	h3 {
		font-size: 1.5rem;
		color: #38bdf8;
		text-align: center;
		position: relative;
		padding-left: 10px;
		padding-right: 10px;
		z-index: 2;
	}

	.dismiss-button {
		border: none;
		background-color: transparent;
		color: black;
		border-radius: 4px;
		cursor: pointer;
		position: absolute;
		top: -19px;
		right: -16px;
		z-index: 1000;
	}

	@keyframes rotateBackground {
		from {
			transform: translateX(-50%) translateY(-50%) rotate(0deg);
		}
		to {
			transform: translateX(-50%) translateY(-50%) rotate(360deg);
		}
	}
</style>
