<script lang="ts">
	let one = '/imgs/mole/MolePark1.jpg';
	let two = '/imgs/mole/MolePark2.jpg';
	let three = '/imgs/mole/MolePark3.PNG';
	let four = '/imgs/mole/MolePark3.jpeg';
	let five = '/imgs/mole/MolePark4.jpeg';
</script>

<div>
	<div class="container">
		<div class="title">
			<h1 class="title-text">Where did "Mole Park" come from?</h1>
			<p class="mole-text">
				Mole Park has always had a ton of dice.
				<br /><br />
				We started <i>Mole Park: Whack & Win</i> at the end of a roadtrip through the Pacific
				northwest. Amid the trails and beaches, we talked of a new game, one that would be fun for everyone. A game - like a
				carnival - that was colorful and bright and in your face from the start. Where you could get
				into the action before you even knew what you were doing, and by the time you did figure
				everything out, you already had a winning streak going. But not one without strategy!
				<br /><br />
				In the original concept of the game, you managed a squad of 5 moles which improved over time. You started the game with
				a set of five "Budget Moles" (each worth one Power) and on your turn, you would spend your Power either to try to Whack better moles
				to replace the weakest links in your squad, or to Win prizes (more dice). You could allocate your moles however you wanted, say by putting forth a few moles
				to Whack and the rest to Win a prize. Over time, you would build up synergies between your moles, since most of them had either permanent abilities
				or effects that triggered when they were recruited, and eventually you could Win the game by securing the Grand Prize with 50 Power.
				<br /><br />
				Aside from moles having effects and sticking with you (instead of being cashed in), one other notable change from the current version was that you
				needed to hit each prize tier exactly to win a prize. If you wanted a Prize worth 30 power and you ended up with 32, you ended up with nothing.
			   So at times, you might choose to keep a weaker mole over a stronger one simply because it gave you a total which could guarantee you a prize on your next turn.
				If you didn't have an exact multiple of 5 with any subset of your moles (or if all the prizes at a certain tier were taken), you had to rely on rolling your prize dice
				and hoping they would bring you to an exact multiple. Each dice you rolled could be rolled either as normal or as a “weak swing”, in which you divided the number you rolled by two.
				Let's look at some photos!
			</p>
		</div>
		<div class="text-1">
			<h2>Version 1</h2>
			<p class="mole-text">
				After I got home from the trip, I got right to work on a prototype and brought it on a
				family vacation. Here's a photo from our first game!
			</p>
			<img src={one} class="person-img" alt="First Version" />
		</div>
		<div class="text-2">
			<h2>Version 2</h2>
			<p class="mole-text">
				At this time, all of the moles were simply numbers. Once that gameplay became stale, I introduced a ton of new mechanics and printed out
				the cards:
			</p>
			<img src={two} class="person-img" alt="Second Version" />
		</div>
		<div class="text-3">
			<h2>Version 3</h2>
			<p class="mole-text">
				To play with the rest of Restart Round (who lived across the country), I made an online version (via Tabletop Simulator):
			</p>
			<img src={three} class="person-img" alt="Third Version" />
		</div>
		<div class="text-4">
			<h2>Version 4</h2>
			<p class="mole-text">
				At this point, the game had become way too complicated. I scrapped everything and came up
				with the Whacking Dice as they are now. This version of the game required over 130 dice per
				copy (shown here: the ones I didn't lose) since all of the prizes were just more dice:
			</p>
			<img src={four} class="person-img" alt="Fourth Version" />
		</div>
		<div class="text-5">
			<h2>Version 5</h2>
			<p class="mole-text">
				And then this turned into the game we all love! There were enough dice for 10 players, if you didn't mind
				re-drawing the dots on the dice with a sharpie whenever they rubbed off, haha!
			</p>
			<img src={five} class="person-img" alt="Fifth Version" />
		</div>
	</div>
</div>

<style>
	.text-1 {
		grid-area: text-1;
		margin: 20px;
		border: 3px solid var(--green);
		border-radius: 10px;
		padding: 20px;
		background-color: tan;
	}
	.text-2 {
		grid-area: text-2;
		margin: 20px;
		border-radius: 10px;
		padding: 20px;
		border: 3px solid var(--green);
		background-color: tan;
	}
	.text-3 {
		grid-area: text-3;
		border-radius: 10px;
		padding: 20px;
		margin: 20px;
		border: 3px solid var(--green);
		background-color: tan;
	}
	.text-4 {
		grid-area: text-4;
		/* background-color: lightseagreen; */
		border-radius: 10px;
		margin: 20px;
		padding: 20px;
		border: 3px solid var(--green);
		background-color: tan;
	}
	.text-5 {
		grid-area: text-5;
		/* background-color: lightseagreen; */
		border-radius: 10px;
		margin: 20px;
		padding: 20px;
		border: 3px solid var(--green);
		background-color: tan;
	}

	.container {
		padding-top: 2.5vh;
		padding-bottom: 2.5vh;
		display: grid;
		height: auto;
		grid-template-areas:
			'title title title title title'
			'text-1 text-2 text-3 text-4 text-5';
		grid-template-rows: 0.25fr 0.25fr;
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

	/* .title {
		grid-area: title;
		font-family: 'Londrina Solid', sans-serif;
		font-size: 3rem;
		color: #38bdf8;
		padding-bottom:6vh;
	} */

	.title {
		grid-area: title;
		/* font-family: 'Londrina Solid', sans-serif;
		font-size: 2.5rem;
		color: #38bdf8; */
	}

	.title-text {
		font-family: 'Londrina Solid', sans-serif;
		font-size: 2.5rem;
		color: #38bdf8;
	}

	.mole-text {
		font-family: 'Londrina Solid', sans-serif;
		font-weight: 300;
		font-size: 1.7rem;
		color: black;
	}

	@media screen and (max-width: 1500px) {
		.container {
			height: fit-content;
			max-height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
