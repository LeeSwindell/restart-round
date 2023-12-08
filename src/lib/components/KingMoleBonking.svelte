<script lang="ts">
	import { fly, slide, type EasingFunction, draw, fade } from 'svelte/transition';
	import { quintOut, sineOut } from 'svelte/easing';

	let kingMolePath = 'imgs/mole/KingMole.png';
	let salliMolePath = 'imgs/Salli.png';
	let kingmoletextPath = '/kingmoletext.svg';

	let leftVis = false;
	let rightVis = false;
	let svgVis = false;

	setTimeout(() => {
		leftVis = true;
		rightVis = true;
	}, 2000 / 2);
	setTimeout(() => {
		rightVis = false;
	}, 10000 / 2);
	setTimeout(() => {
		svgVis = true;
	}, 11000 / 2);
</script>

<div class="bonking-grid">
	<div class="tl" style="overflow: visible;">
		{#if svgVis}
			<img
				src={kingmoletextPath}
				alt="King Mole is to the right"
				style="width: 100%; height: 100%;"
				in:fly={{ y: -200, duration: 3000 / 2, opacity: 0.5 }}
				out:fade
			/>
		{/if}
	</div>
	<div class="r" style="overflow: hidden;">
		{#if leftVis}
			<div class="img-container flip-anim" style="overflow: visible; height: 100%;">
				<img
					class="image show rocking"
					src={kingMolePath}
					alt="Animated King Mole"
					transition:fly={{
						delay: 1000,
						duration: 6000 / 2,
						x: 400,
						y: 0,
						opacity: 1.0,
						easing: quintOut
					}}
				/>
			</div>
		{/if}
		{#if rightVis}
			<div class="img-container" style="overflow: visible; height: 100%;">
				<img
					class="image show"
					src={kingMolePath}
					alt="Animated King Mole"
					transition:fly={{
						delay: 1000,
						duration: 6000 / 2,
						x: 800,
						y: 0,
						opacity: 1.0,
						easing: quintOut
					}}
				/>
			</div>
		{/if}
	</div>
	<div class="bl">
		<div style="height: 150px; width: auto;">
			{#if leftVis}
				<div class="" style="overflow: hidden; height:100%">
					<img
						class="image"
						style="height: 100%; width: auto; margin: auto;"
						src={salliMolePath}
						alt="Salli's killer mole"
						transition:fly={{
							delay: 0,
							duration: 3000 / 2,
							x: 0,
							y: 400,
							opacity: 1.0,
							easing: quintOut
						}}
					/>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	img {
		width: auto;
		height: 100%;
		object-fit: contain;
		background-color: yellowgreen;
	}

	.img-container {
		height: fit-content;
		max-height: 100%;
		width: 50%;
		overflow: hidden;
	}

	.bonking-grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 1.5fr;
		grid-template-areas: 'tl r' 'bl r';
		height: 100%;
		width: 100%;
	}

	.tl {
		grid-area: tl;
		/* background: lightblue; */
	}

	.bl {
		grid-area: bl;
		/* background: yellow; */
	}

	.r {
		grid-area: r;
		/* background: lightgreen; */
		display: flex;
		flex-direction: row;
		/* align-items: center; */
	}

	.rocking {
		animation: rocking 0.5s 1 linear;
		animation-delay: 500ms;
	}

	@keyframes rocking {
		0% {
			transform: rotate(0deg);
		}
		70% {
			transform: rotate(-15deg);
		}
		85% {
			transform: rotate(15deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.flip-anim {
		animation: flip-anim 0.5s 1 linear forwards;
		animation-delay: 3000ms;
	}

	@keyframes flip-anim {
		0% {
		}
		100% {
			transform: scaleX(-1);
		}
	}
</style>
