<script lang="ts">
	import { fly, slide, type EasingFunction, draw, fade } from 'svelte/transition';
	import { quintOut, sineOut } from 'svelte/easing';

	let kingMolePath = 'imgs/mole/KingMole.svg';
	let jesterMolePath = 'imgs/mole/JesterMole.svg';
	let clown = 'imgs/mole/Clown Mole.png';
	let viking = 'imgs/webp/mole/Viking.webp';
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
				style="height: 100%;"
				in:fly={{ y: -200, duration: 3000 / 2, opacity: 0.5 }}
				out:fade
			/>
		{/if}
	</div>
	<div class="r" style="overflow: hidden;">
		{#if leftVis}
			<div class="img-container flip-anim" style="overflow: visible;">
				<img
					class="show rocking"
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
			<div class="img-container" style="overflow: visible;">
				<img
					class="image show"
					src={jesterMolePath}
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
		<!-- <div style="height: 150px; width: auto;"> -->
		{#if leftVis}
			<div class="" style="overflow: hidden; height:100%">
				<img
					class="image"
					style="margin: auto;"
					src={clown}
					alt="Clown Mole"
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
		<!-- </div> -->
		<div class="b2">
			<!-- <div style="height: 150px; width: auto;"> -->
			{#if leftVis}
				<div class="" style="overflow: hidden; height:100%">
					<img
						class="image"
						style="margin: auto; width:50%"
						src={viking}
						alt="Viking Mole"
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
			<!-- </div> -->
		</div>
</div>

<style>
	img {
		width: auto;
		/* height: 100%; */
		max-height: 100%;
		object-fit: contain;
		/* background-color: lightcyan; */
	}

	.img-container {
		height: auto;
		max-height: 100%;
		width: 50%;
		overflow: hidden;
	}

	.bonking-grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas: 'tl r' 'bl b2';
		height: 100%;
		width: 100%;
	}

	.tl {
		grid-area: tl;
		/* background: lightblue; */
		height: 100%;
		width: 100%;
	}

	.bl {
		grid-area: bl;
		/* background: yellow; */
		height: 100%;
		width: 100%;
	}

	.b2 {
		grid-area: b2;
		/* background: yellow; */
		height: 100%;
		width: 100%;
	}

	.r {
		grid-area: r;
		/* background: lightgreen; */
		display: flex;
		flex-direction: row;
		height: 100%;
		width: 100%;

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
			transform: rotate(15deg);
		}
		85% {
			transform: rotate(-35deg);
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
