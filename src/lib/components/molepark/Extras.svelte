<script lang="ts">
	let one =   '/imgs/mole/MolePark1.jpg';
	let two =   '/imgs/mole/MolePark2.jpg';
	let three = '/imgs/mole/MolePark3.PNG';
	let four =  '/imgs/mole/MolePark3.jpeg';
	let five =  '/imgs/mole/MolePark4.jpeg';
</script>

<div>
	<div class="container">
		<div class="title">
			<h1>Where did "Mole Park" come from?</h1>
			<p class="mole-text">
				Mole Park has always had a ton of dice.
				<br><br>
				We started <i>Mole Park: Whack & Win</i> at the end of a roadtrip through the Pacific northwest.
				We talked of a new game, one that could be fun for everyone. A game - like a carnival - that was colorful and bright
				and in your face from the start. Where you could get into the action before you even knew what you were doing,
				and by the time you did figure everything out, you already had a winning streak going.
				<br><br>
				The original concept involved managing a squad of 5 moles. Each player started the game with a set of basic moles ("Budget Moles") and would use
				their turns to whack stronger moles and replace their weakest links.
				Over time, you would build up synergies between your moles and eventually you would have enough Power to swing a giant hammer and slam your way to the Grand Prize.
			</p>		
		</div>
		<div class="text-1">
			<h2>Version 1</h2>
			<p class="mole-text">
				After I got home from the trip, I got right to work on a prototype and brought it on a family vacation. Here's a photo from our first game!
			</p>
			<img src={one} class="person-img" alt="First Version" />
		</div>
		<div class="text-2">
			<h2>Version 2</h2>
			<p class="mole-text">
				Once the circled numbers got too boring, I introduced a ton of new mechanics and printed out the cards:
			</p>
			<img src={two} class="person-img"  alt="Second Version" />
		</div>
		<div class="text-3">
			<h2>Version 3</h2>
			<p class="mole-text">
				To play with Restart Round, I made an online version (via Tabletop Simulator):
			</p>
			<img src={three} class="person-img"  alt="Third Version" />
		</div>
		<div class="text-4">
			<h2>Version 4</h2>
			<p class="mole-text">
				At this point, the game had become way too complicated. I scrapped everything and came up with the Whacking Dice as they are now.
				This version of the game required over 130 dice per copy (shown here: the ones I didn't lose) since all of the prizes were just more dice:
			</p>
			<img src={four} class="person-img"  alt="Fourth Version" />
		</div>
		<div class="text-5">
			<h2>Version 5</h2>
			<p class="mole-text">
				And then this turned into the game we all love! There were enough dice for 10 players, but you'd have to keep re-drawing the sharpie on every game, haha!
			</p>
			<img src={five} class="person-img"  alt="Fifth Version" />
		</div>
	</div>
</div>

<style>
	.text-1 {
		grid-area: text-1;
		margin-top: auto;
		margin-bottom: auto;
		border: 3px solid var(--green);
		border-radius: 10px;
		padding:20px;
		background-color: tan;
	}
	.text-2 {
		grid-area: text-2;
		margin-top: auto;
		margin-bottom: auto;
		border-radius: 10px;
		padding:20px;
		border: 3px solid var(--green);
		background-color: tan;
	}
	.text-3 {
		grid-area: text-3;
		border-radius: 10px;
		padding:20px;	
		margin-top: auto;
		margin-bottom: auto;
		border: 3px solid var(--green);
		background-color: tan;
	}
	.text-4 {
		grid-area: text-4;
		/* background-color: lightseagreen; */
		border-radius: 10px;
		margin: auto;
		padding:20px;
		border: 3px solid var(--green);
		background-color: tan;
	}
	.text-5 {
		grid-area: text-5;
		/* background-color: lightseagreen; */
		border-radius: 10px;
		margin: auto;
		padding:20px;
		border: 3px solid var(--green);
		background-color: tan;
	}
	.person-img img {
		max-width: 100%;
		max-height: 400px;
		width: 100%;
		height: 300px; /* Set a fixed height for all images */
		object-fit: scale-down;
		border-radius: 4px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		/* border: 5px solid #38BDF8;  */
		background: #111111;
	}

	.container {
		height: 85vh;
		padding-top: 2.5vh;
		padding-bottom: 2.5vh;
		display: grid;
		grid-template-areas:
			'title title title title title'
			'text-1 text-2 text-3 text-4 text-5';
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

	.title {
		grid-area: title;
		font-family: 'Londrina Solid', sans-serif;
		font-size: 3rem;
		color: #38bdf8;
		padding-bottom:6vh;
	}

	.mole-text {
		font-family: 'Londrina Solid', sans-serif;
		font-weight: 300;
		font-size: 1.7rem;
		color: black;
	}

	@media screen and (max-width: 1000px) {
		.container {
			height: fit-content;
			max-height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
