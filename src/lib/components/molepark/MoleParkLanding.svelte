<div class="mole-title-bar">
	<div
		class="game-title destructible mole neonText"
		style="text-align:center; font-size:12vmin; white-space: nowrap; text-overflow:ellipsis;"
	>
		Mole Park
	</div>
	<img
		class="png-shadow"
		style="margin-left: auto; margin-right: auto;"
		src="imgs/mole/KingMole.png"
		width="300px"
		alt="King Mole"
	/>
	<div
		class="game-title destructible mole neonText2"
		style="text-align:center; font-size:8vmin; white-space: nowrap; text-overflow:ellipsis;"
	>
		Whack & Win
	</div>
</div>

<style>
	/* Parallax effect on title bar image */
	.mole-title-bar {
		background-attachment: fixed;
		background-image: url('../imgs/mole/molepark.png');
		background-size: cover;
		/* padding: 100px 0px; */
		color: white;
		border: #bc13fe;
		border-style: inset;
		border-width: 5px;
		border-radius: 5px;
		border-style: solid;
		overflow-x: visible;
		width: auto;
		text-align: center;
		height: 85vh;
		max-height: 85vh;
	}

	.neonText {
		animation: pulsate 1.5s infinite alternate;

		color: #fff;
		text-shadow:
			0 0 7px #fff,
			0 0 10px #fff,
			0 0 21px #bc13fe,
			0 0 42px #bc13fe;
	}

	@keyframes pulsate {
		100% {
			text-shadow:
				0 0 3px #fff,
				0 0 7px #cec6e4,
				0 0 19px #bc13fe,
				0 0 40px #bc13fe;
		}

		0% {
			text-shadow:
				0 0 2px #fff,
				0 0 4px #cec6e4,
				0 0 6px #bc13fe,
				0 0 10px #bc13fe,
				0 0 45px #bc13fe;
		}
	}

	.neonText2 {
		color: #fff;
		text-shadow:
			0 0 3px #fff,
			0 0 13px #13fe56,
			0 0 22px #13fe56;
	}

	.mole {
		font-family: 'Londrina Solid', sans-serif;
	}
</style>
