<script lang="ts">
	let prize1 = '/imgs/webp/mole/10-2.webp';
	let prize2 = '/imgs/webp/mole/15-1.webp';
	let prize3 = '/imgs/webp/mole/20-3.webp';
	let prize4 = '/imgs/webp/mole/25-2.webp';
	let prize5 = '/imgs/webp/mole/30-4.webp';
	let prize6 = '/imgs/webp/mole/35-3.webp';
	let prize7 = '/imgs/webp/mole/40-1.webp';
</script>

<div class="container">
	<h1 class="mole-header g1">What are the Prizes?</h1>

	<p class="mole-text g2">
		In Mole Park, you’ll find a colorful array of fabulous prize vendors which will accept your
		moles! Each prize vendor has an assortment of prizes, though only one will be available each
		round. So pay attention to what's in stock - you never know when an exclusive prize might show
		up!
	</p>

	<div class="image-track g4">
		<img class="" src={prize1} alt="prize mole #10" draggable="false" width="822" height="1122" />
		<img class="" src={prize2} alt="prize mole #15" draggable="false" width="822" height="1122" />
		<img class="" src={prize3} alt="prize mole #20" draggable="false" width="822" height="1122" />
		<img class="" src={prize4} alt="prize mole #25" draggable="false" width="822" height="1122" />
		<img class="" src={prize5} alt="prize mole #30" draggable="false" width="822" height="1122" />
		<img class="" src={prize6} alt="prize mole #35" draggable="false" width="822" height="1122" />
		<img class="" src={prize7} alt="king mole crown" draggable="false" width="822" height="1122" />
	</div>
</div>

<style>
	.mole-header {
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

	.container {
		height: 85vh;
		padding-top: 2.5vh;
		padding-bottom: 2.5vh;
		display: grid;
		grid-template-rows: 0.25fr 1fr 3fr;
	}

	.image-track {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
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
		column-gap: 10px;
	}

	img {
		width: calc(95vw / 7 - 120px / 7);
		height: fit-content;
		object-fit: contain;
		border: white 3px solid;
		box-shadow: 6px 6px black;
		border-radius: 10px;
	}

	@media screen and (max-width: 450px) {
		.container {
			height: fit-content;
			max-height: 100%;
			display: flex;
			flex-direction: column;
		}

		.image-track {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: '';
			justify-items: center;
			padding-top: 2.5vh;
			padding-bottom: 2.5vh;
			background: linear-gradient(
				0deg,
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
			border-radius: 10px;
			gap: 10px;
		}
		.image-track > img {
			width: 60%;
		}
		.image-track > img:nth-child(7) {
			grid-column: 1 / span 2;
			width: 40%;
		}
	}

	@media screen and (min-width: 1800px) {
		img {
			width: calc(85vw / 7 - 120px / 7);
		}
	}
</style>
