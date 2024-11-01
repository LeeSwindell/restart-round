<script lang="ts">
	import KingMoleBonking from '$lib/components/KingMoleBonking.svelte';

	let moleJesterCard = 'imgs/mole/cards/1.png';
	let kingMoleCard = 'imgs/mole/cards/5.png';
	let chefMoleCard = 'imgs/mole/cards/3.png';
	let superMoleCard = 'imgs/mole/cards/4.png';
	let rockMoleCard = 'imgs/mole/cards/2.png';
	let balloon = 'imgs/mole/cards/CROWN.png';
</script>

<svelte:head>
	<title>Restart Round</title>
</svelte:head>

<div class="grid">
	<div class="top-left">
		<div class="game-logo">
			<img
				style="margin-left: auto; margin-right: auto; height:auto; width:70%; filter: drop-shadow(6px 6px 15px rgba(0, 0, 0, 0.5));"
				src="imgs/Box rendered.png"
				alt="Mole Park Logo"
			/>
		</div>
		<div class="game-description">
			<a href="/molepark"><i>Mole Park: Whack & Win</i></a> &nbsp;is a chaotic carnival-themed party
			game which will delight and amaze anyone who plays! Compete to <b>Whack</b> the most moles
			using a boxing glove, frying pan, and giant mallet, and then cash in your moles to
			<b>Win</b> prizes. Once you are ready, go for the grand prize - King Mole's Crown - and claim the
			throne of Mole Park!
		</div>
	</div>
	<div class="top-right">
		<KingMoleBonking />
	</div>
	<div class="bottom">
		<div class="img-container">
			<img class="show-border" src={kingMoleCard} alt="King Mole Card" />
		</div>
		<div class="img-container">
			<img class="show-border" src={superMoleCard} alt="Super Mole Card" />
		</div>
		<div class="img-container">
			<img class="show-border" src={chefMoleCard} alt="Chef Mole Card" />
		</div>
		<div class="img-container">
			<img class="show-border" src={rockMoleCard} alt="Rock 'n' Roll Mole Card" />
		</div>
		<div class="img-container">
			<img class="show-border" src={moleJesterCard} alt="Mole Jester Card" />
		</div>
		<div class="img-container">
			<img class="show-border" src={balloon} alt="King Mole's Crown Card" />
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: 5fr 3fr;
		grid-template-columns: 11fr 9fr;
		gap: 10px;
		min-height: 85vh;
		width: 95%;
		max-width: 95%;
		margin-left: auto;
		margin-right: auto;
		overflow: visible;
	}

	.top-left {
		grid-row: 1;
		grid-column: 1;
		border-radius: 10px;
		padding: 5px;
	}

	.top-right {
		grid-row: 1;
		grid-column: 2;
		border-radius: 10px;
		height: 100%;
		padding: 5px;
	}

	.bottom {
		grid-row: 2;
		grid-column: 1 / span 2;
		border-radius: 10px;
		padding: 50px;
		/* border: 2px solid green; */

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: fit-content;
		column-gap: 10px;

		background: linear-gradient(
			90deg,
			rgba(255, 0, 0, 1) 0%,
			rgba(255, 154, 0, 1) 10%,
			rgba(208, 222, 33, 1) 20%,
			rgba(79, 220, 74, 1) 30%,
			rgba(63, 218, 216, 1) 40%,
			rgba(47, 201, 226, 1) 50%,
			rgba(28, 127, 238, 1) 60%,
			rgba(95, 21, 242, 1) 70%,
			rgba(186, 12, 248, 1) 80%,
			rgba(251, 7, 217, 1) 90%,
			rgba(255, 0, 0, 1) 100%
		);
		overflow: visible;
	}

	.img-container {
		width: calc(95vw / 5 - 80px / 5);
		height: calc(100% - 10px);
		max-height: calc(100% - 10px);
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.show-border {
		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
	}

	img {
		height: min-content;
		max-height: 100%;
		object-fit: contain;
		margin: 0 auto;
		border-radius: 10px;
	}

	.game-description {
		font-weight: 300;
		font-size: 1.5rem;
		color: black;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (max-width: 450px) {
		.grid {
			display: flex;
			flex-direction: column;
			height: 100%;
			max-height: 100%;
		}

		.bottom {
			flex-direction: column;
			background: linear-gradient(
				180deg,
				rgba(255, 0, 0, 1) 0%,
				rgba(255, 154, 0, 1) 10%,
				rgba(208, 222, 33, 1) 20%,
				rgba(79, 220, 74, 1) 30%,
				rgba(63, 218, 216, 1) 40%,
				rgba(47, 201, 226, 1) 50%,
				rgba(28, 127, 238, 1) 60%,
				rgba(95, 21, 242, 1) 70%,
				rgba(186, 12, 248, 1) 80%,
				rgba(251, 7, 217, 1) 90%,
				rgba(255, 0, 0, 1) 100%
			);
		}

		.top-right {
			height: min-content;
		}
		.top-left {
			height: min-content;
		}

		.img-container {
			width: 60%;
			height: auto;
			max-height: 100%;
			margin-top: 5px;
			margin-bottom: 5px;
		}

		img {
			width: auto;
			height: 100%;
		}
	}
</style>
