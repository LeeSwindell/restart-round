<script lang="ts">
	let glove = '/imgs/webp/mole/dice/Glove.png';
	let pan = '/imgs/webp/mole/dice/Pan.webp';
	let mallet = '/imgs/webp/mole/dice/Mallet.webp';
	let prize = '/imgs/webp/mole/dice/Prize.webp';
</script>

<div class="container">
	<h1 class="mole-header title">How do you play?</h1>
	<p class="mole-text text-1">
		Mole Park progresses in rounds (players do not take turns). Every round, each player secretly
		chooses whether they want to Whack or Win, and then everyone rolls their dice at once:
	</p>
	<div class="mole-text text-2">
		To Whack, roll a Whacking die.
		<div class="photo-container">
			<img src={glove} alt="Boxing Glove" class="photo" />
		<!--	<img src={pan} alt="Frying Pan" class="photo" />
			<img src={mallet} alt="Giant Mallet" class="photo" />-->
		</div>
		If you roll a number, you get moles from that hole.
	</div>
	<div class="mole-text text-3">
		To Win, roll your Prize die.
		<div class="photo-container">
		<!--	<img src={prize} alt="Prize Die" class="photo" />-->
		</div>
		Cash in all your moles for a prize.
	</div>
	<p class="mole-text text-4">
		When you win a prize, it stays with you for the rest of the game, and will help you win better
		prizes the next time you cash in moles. Win the game by being the first player to win the Grand
		Prize!
	</p>
</div>

<style>
	.container {
		height: 85vh;
		padding-top: 2.5vh;
		padding-bottom: 2.5vh;
		display: grid;
		grid-template-areas:
			'title title'
			'text-1 text-1'
			'text-2 text-3'
			'text-4 text-4';
		grid-template-rows: 0.25fr 1fr 1.5fr 1fr;
		column-gap: 10px;

		/* border: 1px green solid; */

		--light-purple: #d8b4fe;
		--lighter-purple: #e9d5ff;
		--fuchsia: #d946ef;
		--darker-fuchsia: #c026d3;
		--green: #22c55e;
		--light-green: #86efac;
		--lighter-green: #bbf7d0;
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

	.title {
		grid-area: title;
	}
	.text-1 {
		grid-area: text-1;
		margin-top: auto;
		margin-bottom: auto;
	}
	.text-2 {
		grid-area: text-2;
		text-align: center;
		margin-top: auto;
		margin-bottom: auto;
		border-radius: 10px;
	}
	.text-3 {
		grid-area: text-3;
		text-align: center;

		/* background-color: var(--light-green); */
		/* border: 5px solid var(--green); */

		border-radius: 10px;

		margin-top: auto;
		margin-bottom: auto;
	}
	.text-4 {
		grid-area: text-4;
		/* background-color: lightseagreen; */
		margin: auto;
	}

	@media screen and (max-width: 450px) {
		.container {
			height: fit-content;
			max-height: 100%;
			display: flex;
			flex-direction: column;
			row-gap: 10px;
		}

		.text-2 {
			border: 3px solid var(--green);
		}
		.text-3 {
			border: var(--darker-fuchsia) 3px solid;
		}
	}

	.photo-container {
		display: flex;
		justify-content: center;
	}

	.photo {
		width: min(200px, 30%); /* Adjust the width as needed */
		margin: 0 10px; /* Adjust the margin as needed */
		filter: drop-shadow(1px 1px 5px #000);
	}
</style>
