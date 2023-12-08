<div class="container">
	<div>
		<h1 class="mole-header">Where did Mole Park come from?</h1>
		<p class="mole-text">(Thrilling story coming soon! Check back here later.)</p>
	</div>

	<div>
		<h1 class="mole-header">How Far Along is the Game?</h1>
		<p class="mole-text">
			We are in the final round of playtesting, using prototype versions of the game (the most
			complicated components, the 32 custom dice per game, have already been manufactured). We have
			been reaching out to manufacturers for the remaining components and have a plan to launch a
			Kickstarter as we finish more of the art for the Moles.
		</p>
	</div>

	<div>
		<h1 class="mole-header">Official Rules</h1>
		<a class="mole-text" href="./Mole Park Rules.pdf">Click here for the rules!</a>
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
