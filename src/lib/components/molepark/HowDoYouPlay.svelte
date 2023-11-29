<div class="container">
	<h1 class="mole-header title">How do you play?</h1>
	<p class="mole-text text-1">
		Mole Park progresses in rounds (players do not take turns). Every round, each player secretly
		chooses whether they want to Whack or Win, and then everyone rolls their dice at once:
	</p>
	<div class="mole-text text-2">
		To Whack, roll a Whacking die.
		<div>[indicated by a Boxing glove, Frying pan, or Giant mallet]</div>
		If you roll a number, you get moles from that hole.
	</div>
	<div class="mole-text text-3">
		To Win, roll your Prize die.
		<div>[indicated by Stars]</div>
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
</style>
