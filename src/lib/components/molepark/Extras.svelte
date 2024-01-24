<script lang="ts">
	let one = '/imgs/webp/mole/MolePark1.webp';
	let two = '/imgs/webp/mole/MolePark2.webp';
	let three = '/imgs/webp/mole/MolePark3.webp';
	let four = '/imgs/webp/mole/MolePark4.webp';
	let five = '/imgs/webp/mole/MolePark5.webp';
</script>

<div>
	<div class="container">
		<div class="title">
			<h1 class="title-text">Where did "Mole Park" come from?</h1>
			<p class="mole-text">
				Mole Park has always had a ton of dice.
				<br /><br />
				We started <i>Mole Park: Whack & Win</i> at the end of a roadtrip through the Pacific
				northwest. Amid the trails and beaches, we talked of a new game, one that would be fun for
				everyone. A game - like a carnival - that was colorful and bright and in your face from the
				start. Where you could get into the action before you even knew what you were doing, and by
				the time you did figure everything out, you already had a winning streak going. But not one
				without strategy!
				<br /><br />
				In the original concept of the game, you managed a squad of 5 moles which improved over time.
				You started the game with a set of five "Budget Moles" (each worth one Power) and on your turn,
				you would spend your Power either to try to Whack better moles to replace the weakest links in
				your squad, or to Win prizes (more dice). You could allocate your moles however you wanted, say
				by putting forth a few moles to Whack and the rest to Win a prize. Over time, you would build
				up synergies between your moles, since most of them had either permanent abilities or effects
				that triggered when they were recruited, and eventually you could Win the game by securing the
				Grand Prize with 50 Power.
				<br /><br />
				Aside from moles having effects and sticking with you (instead of being cashed in), one other
				notable change from the current version was that you needed to hit each prize tier exactly to
				win a prize. If you wanted a Prize worth 30 power and you ended up with 32, you ended up with
				nothing. So at times, you might choose to keep a weaker mole over a stronger one simply because
				it gave you a total which could guarantee you a prize on your next turn. If you didn't have an
				exact multiple of 5 with any subset of your moles (or if all the prizes at a certain tier were
				taken), you had to rely on rolling your prize dice and hoping they would bring you to an exact
				multiple. Each dice you rolled could be rolled either as normal or as a “weak swing”, in which
				you divided the number you rolled by two. Let's look at some photos!
			</p>
		</div>
		<div class="text-1 version-block">
			<h2 class="head">Version 1</h2>
			<p class="mole-text text">
				After I got home from the trip, I got right to work on a prototype and brought it on a
				family vacation. Here's a photo from our first game!
			</p>
			<div class="img-container">
				<img src={one} width="3280px" height="2464px" alt="First Version" />
			</div>
		</div>
		<div class="text-2 version-block">
			<h2 class="head">Version 2</h2>
			<p class="mole-text text">
				At this time, all of the moles were simply numbers. Once that gameplay became stale, I
				introduced a ton of new mechanics and printed out the cards:
			</p>
			<div class="img-container">
				<img src={two} width="4032px" height="3024px" alt="Second Version" />
			</div>
		</div>
		<div class="text-3 version-block">
			<h2 class="head">Version 3</h2>
			<p class="mole-text text">
				To play with the rest of Restart Round (who lived across the country), I made an online
				version (via Tabletop Simulator):
			</p>
			<div class="img-container">
				<img src={three} class="person-img" width="1949px" height="1940px" alt="Third Version" />
			</div>
		</div>
		<div class="text-4 version-block">
			<h2 class="head">Version 4</h2>
			<p class="mole-text text">
				At this point, the game had become way too complicated. I scrapped everything and came up
				with the Whacking Dice as they are now. This version of the game required over 130 dice per
				copy (shown here: the ones I didn't lose) since all of the prizes were just more dice:
			</p>
			<div class="img-container">
				<img src={four} width="1600px" height="1200px" alt="Fourth Version" />
			</div>
		</div>
		<div class="text-5 version-block">
			<h2 class="head">Version 5</h2>
			<p class="mole-text">
				And then this turned into the game we all love! There were enough dice for 10 players, if
				you didn't mind re-drawing the dots on the dice with a sharpie whenever they rubbed off,
				haha!
			</p>
			<div class="img-container">
				<img src={five} width="1200px" height="1600px" alt="Fifth Version" />
			</div>
		</div>
	</div>
</div>

<style>
	.text-1 {
		grid-area: text-1;
		background-color: #e0f2fe;
	}
	.text-2 {
		grid-area: text-2;
		background-color: #fee2e2;
	}
	.text-3 {
		grid-area: text-3;
		background-color: #e0f2fe;
	}
	.text-4 {
		grid-area: text-4;
		background-color: #fee2e2;
	}
	.text-5 {
		grid-area: text-5;
		background-color: #e0f2fe;
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
	}

	.title {
		grid-area: title;
		margin-bottom: 2.5vh;
	}

	.title-text {
		font-family: 'Londrina Solid', sans-serif;
		font-size: 2.5rem;
		color: #38bdf8;
	}

	.mole-text {
		font-family: 'Londrina Solid', sans-serif;
		font-weight: 300;
		font-size: 1.25rem;
		color: black;
	}

	.version-block {
		display: grid;
		grid-template-areas:
			'head img'
			'writing img';
		grid-template-rows: auto;
		grid-template-columns: 1fr 3fr;
		gap: 20px;
		height: 60vh;
		padding: 20px 2.5vw 20px 2.5vw;

		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
	}

	.head {
		grid-area: head;
	}

	.text {
		grid-area: writing;
	}

	.img-container {
		grid-area: img;
		height: 100%;
		overflow: hidden;
	}

	.img-container img {
		width: auto;
		max-height: 100%;
		border-radius: 10px;
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
