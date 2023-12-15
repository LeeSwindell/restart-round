<div class="container">
	<div>
		<h1 class="mole-header">What's the origin of Mole Park?</h1>
		<p class="mole-text">We started <i>Mole Park: Whack & Win</i> at the end of a roadtrip through the Pacific northwest.
		We talked of a game which would be pure fun, unmarred by complicated rules or requiring
		knowledge of other games to play. A game - like a carnival - that was colorful and bright
		and in your face from the start. Where you could get into the action before you even knew what you were doing,
		and by the time you did figure everything out you had already won a few games.</p>
		<br>
		<p class="mole-text">The original concept involved coordinating a squadron of 5 moles,
			which you could improve over time. Each player would start the game with a set of basic moles ("Budget Moles") and would use
			their turns to whack stronger moles and replace the originals.
			Over time, you would build up synergies between your moles and eventually you would have enough mole power to swing the giant hammer and slam your way to the grand prize.
			That's right - in the original variations, you didn't trade anything in for prizes, you played a different carnival game where your moles whacked a target as hard as they can,
			trying to ring the bell at the top.
		</p>
		<br>
		<p class="mole-text">After I got home from the trip, I got right to work on a prototype. Here's what it looked like:</p>
	</div>
</div>

<style>
	.container {
		height: 85vh;
		padding-top: 2.5vh;
		padding-bottom: 2.5vh;
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
	}

	.mole-header {
		font-family: 'Londrina Solid', sans-serif;
		font-size: 3rem;
		color: #38bdf8;
	}

	.mole-text {
		font-family: 'Londrina Solid', sans-serif;
		font-weight: 300;
		font-size: 1.7rem;
		color: black;
	}

	@media screen and (max-width: 450px) {
		.container {
			height: fit-content;
			max-height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
