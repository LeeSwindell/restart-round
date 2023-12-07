<script lang="ts">
	import KingMoleBonking from '$lib/components/KingMoleBonking.svelte';

	let board = 'imgs/mole/board.jpg';
	let kat = 'imgs/mole/Kat.png';
	let chef = 'imgs/mole/chef_mole.PNG';
	let rock = 'imgs/mole/rock_n_roll_mole.PNG';
	let prizes = 'imgs/mole/Prizes.jpg';
</script>

<div class="grid">
	<div class="top-left">
		<div class="game-title">Mole Park: Whack & Win</div>
		<div class="game-description">
			<i>Mole Park: Whack & Win</i> &nbsp;is a turnless carnival-themed party game which will evoke sheer
			joy from even your most curmudgeonly friends and family. Compete to Whack the most moles using
			a boxing glove, frying pan, and giant mallet, and then cash in your moles to Win prizes! Once you
			are ready, go for the grand prize - King Mole's Crown - to become the champion!
		</div>
	</div>
	<div class="top-right">
		<KingMoleBonking />
	</div>
	<div class="bottom">
		<div class="img-container">
			<img class="show-border" src={board} alt="board" />
		</div>
		<div class="img-container">
			<img src={kat} alt="kat" />
		</div>
		<div class="img-container">
			<img class="show-border" src={chef} alt="king" />
		</div>
		<div class="img-container">
			<img class="show-border" src={rock} alt="rock n roll mole" />
		</div>
		<div class="img-container">
			<img class="show-border" src={prizes} alt="prizes" />
		</div>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: 5fr 6fr;
		grid-template-columns: 11fr 9fr;
		gap: 10px;
		max-height: 85vh;
		min-height: 85vh;
		width: 95%;
		max-width: 95%;
		margin-left: auto;
		margin-right: auto;
	}

	.top-left {
		grid-row: 1;
		grid-column: 1;
		border-radius: 10px;
		/* background: lightblue; */
		padding: 5px;
		/* max-height: calc(85vh / 2.2); */
		/* overflow: hidden; */
	}

	.top-right {
		grid-row: 1;
		grid-column: 2;
		/* background: pink; */
		border-radius: 10px;

		/* max-height: calc(85vh / 2.2); */
		padding: 5px;
	}

	.bottom {
		grid-row: 2;
		grid-column: 1 / span 2;
		border-radius: 10px;
		padding: 5px;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100%;
		max-height: 100%;
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

		overflow: hidden;
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
		border: white 3px solid;
		box-shadow: 6px 6px black;
		border-radius: 10px;
	}

	img {
		height: min-content;
		max-height: 100%;
		object-fit: contain;
		margin: 0 auto;
		border-radius: 10px;
	}

	.game-title {
		font-size: 3rem;
		color: #38bdf8;
		text-align: center;
		margin: auto;
	}

	.game-description {
		font-weight: 300;
		font-size: 1.25rem;
		color: black;
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 450px) {
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

		.img-container {
			width: 60%;
			margin-top: 5px;
			margin-bottom: 5px;
		}
	}
</style>
