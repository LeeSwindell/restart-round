<script lang="ts">
	let displayMoles = [
	'imgs/mole/KingMole.svg',
	'imgs/mole/SuperMole.svg',
	'imgs/mole/RockMole.svg',
	'imgs/mole/JesterMole.svg'
	];
	let curDisplayMole = 0;

	function selectDisplayMole(m: number) {
		curDisplayMole = m;
	}

	import { backInOut, linear } from 'svelte/easing';
	import { fly, type EasingFunction } from 'svelte/transition';

	let duration = 400;
	let easing = backInOut;
	// let easing = linear;
	let outOptions = { duration, easing, times: 2, delay: 0, y: -500 };
	let inOptions = { duration, easing, times: 2, delay: 400, y: 500 };

	interface AnimOptions {
		duration?: number;
		easing?: EasingFunction;
		times?: number;
		delay?: number;
		y?: number;
		x?: number;
	}

	function spin(node: Node, options: AnimOptions) {
		const { times = 1 } = options;
		return {
			...options,
			// The value of t passed to the css method
			// varies between zero and one during an "in" transition
			// and between one and zero during an "out" transition.
			css(t: number) {
				// Svelte takes care of applying the easing function.
				const degrees = 360 * times; // through which to spin
				return `transform: scale(${t}) rotate(${t * degrees}deg)`;
				// rotate(${t * degrees}deg);
			}
		};
	}
</script>

<div class="component-container">
	<div class="grid">
		<div class="top-left">
			<h1>What are we Whacking?</h1>
		</div>
		<div class="bottom-left">
			<p class="mole-text">
				Other moles, of course! Each mole you whack has a corresponding value from 1 to 5, which
				indicates how many stars it's worth when you cash it in for prizes! The mole deck is filled
				with unique, professionally-illustrated moles, each with its own character that will delight
				everyone who whacks them!
			</p>
			<p class="mole-text">
				<br />
				If you're coming down with Mole Fever and can't wait to see the newest moles as they're released,
				check out our
				<a href="https://www.instagram.com/restartroundgames/">Instagram</a> page. Every Monday, we release
				the week's "Mole Poll", where you can vote on the moles you want to see next!
			</p>
		</div>
		<div class="bottom-middle">
			<div class="mole-selector-container">
				<button
					class="mole-selector"
					class:active={curDisplayMole === 0}
					on:click={() => selectDisplayMole(0)}
					>King Mole
				</button>
				<button
					class="mole-selector"
					class:active={curDisplayMole === 1}
					on:click={() => selectDisplayMole(1)}>Super Mole</button
				>
				<button
					class="mole-selector"
					class:active={curDisplayMole === 2}
					on:click={() => selectDisplayMole(2)}>Rock 'n' Roll Mole</button
				>
				<button
					class="mole-selector"
					class:active={curDisplayMole === 3}
					on:click={() => selectDisplayMole(3)}>Mole Jester</button
				>
				<!-- {#if curDisplayMole === 3}&#x2192{/if} -->
			</div>
		</div>
		<div class="right">
			<!-- <div class="mole-name">Chef Mole</div> -->
			{#if curDisplayMole === 0}
				<div class="display-mole-img">
					<img
						class="shrink"
						src={displayMoles[curDisplayMole]}
						alt="chef mole"
						out:fly={outOptions}
						in:fly={inOptions}
					/>
				</div>
			{:else if curDisplayMole === 1}
				<div class="display-mole-img">
					<img
						src={displayMoles[curDisplayMole]}
						alt="chef mole"
						out:fly={outOptions}
						in:fly={inOptions}
					/>
				</div>
			{:else if curDisplayMole === 2}
				<div class="display-mole-img">
					<img
						src={displayMoles[curDisplayMole]}
						alt="chef mole"
						out:fly={outOptions}
						in:fly={inOptions}
					/>
				</div>
			{:else if curDisplayMole === 3}
				<div class="display-mole-img">
					<img
						src={displayMoles[curDisplayMole]}
						alt="chef mole"
						out:fly={outOptions}
						in:fly={inOptions}
					/>
				</div>
			{/if}
			<!-- <div class="mole-name">Chef Mole</div> -->
		</div>
	</div>
</div>

<style>
	.component-container {
		height: 80vh;
		max-height: 80vh;
		width: 100%;
		margin-top: 2.5vh;
		margin-bottom: 2.5vh;
	}
	.grid {
		display: grid;
		grid-template-areas:
			'top-left top-left right bottom-middle'
			'bottom-left bottom-left right bottom-middle';
		/* 'bottom-left bottom-left bottom-middle'; */
		grid-template-rows: 0.2fr 1fr;
		grid-template-columns: 2fr 0.5fr 1fr 0.5fr;
		gap: 10px;
		overflow: hidden;

		height: 100%;
		width: 100%;
	}

	.top-left {
		grid-area: top-left;
		/* background-color: #86efac; */
		/* border: 5px solid #22c55e; */
		border-radius: 10px;
		/* padding: 10px; */
	}

	h1 {
		color: #38bdf8;
		font-weight: bold;
		font-size: 3rem;
		/* text-align: center; */
	}

	.mole-text {
		font-family: 'Londrina Solid', sans-serif;
		font-weight: 300;
		font-size: 1.7rem;
		color: black;
	}

	.right {
		grid-area: right;
		/* background-color: #fff7ed; */
		/* position: relative; */
		height: 100%;

		/* border: 5px solid #0ea5e9; */

		border-radius: 10px;
		/* padding: 10px; */

		/* display: grid;
		grid-template-rows: auto; */
	}

	.bottom-left {
		grid-area: bottom-left;
		/* background-color: #e9d5ff; */
		/* border: 5px solid #d946ef; */
		max-height: 100%;
		overflow-y: hidden;

		border-radius: 10px;
		/* padding: 10px; */
	}

	.bottom-middle {
		grid-area: bottom-middle;
		display: flex;
		flex-direction: column;
		/* background-color: #bae6fd; */
		/* overflow: hidden; */

		/* border: 5px solid #ef4444; */

		border-radius: 10px;
		padding: 10px;
	}

	.mole-selector {
		font-size: 1.5rem;
		color: #38bdf8;
		width: fit-content;
		margin-left: auto;
		margin-right: auto;

		background: none;
		border: none;
		padding: 0;
		/* font: inherit; */
		cursor: pointer;
		outline: inherit;
	}

	.mole-selector.active {
		font-size: 1.5rem;
		color: #f37c7c;
	}

	.mole-selector-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: auto;
		margin-bottom: auto;
	}

	.display-mole-img {
		height: fit-content;
		/* height: 100%; */
		max-height: 100%;
		margin: auto;
		/* margin-top: 10px; */
		position: relative;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 3px solid green; */
	}

	img {
		max-height: 100%;
		margin: auto;
	}

	@media screen and (max-width: 450px) {
		.component-container {
			height: fit-content;
			max-height: 100%;
			padding-top: 2.5vh;
			padding-bottom: 2.5vh;
		}

		.grid {
			overflow: auto;
			gap: 5px;
			height: fit-content;

			grid-template-areas:
				'top-left top-left'
				'bottom-left bottom-left'
				'right bottom-middle';

			grid-template-rows: 0.1fr 1fr 0.8fr;
			grid-template-columns: 2fr 0.5fr;
		}
	}
</style>
