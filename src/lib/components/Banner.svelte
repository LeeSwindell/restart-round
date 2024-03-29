<div class="container">
	<div class="white-background">
		<h3>
			New release! Listen to the Restart Round Theme Song:<br>
			<audio controls src="/restartround.mp3"></audio>
		</h3>
	</div>
	<div class="blue-background"></div>
</div>

<style>
	.container {
		position: relative;
		width: 60vw;
		height: 10vh;
		overflow: hidden;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10px;
		border-radius: 10px;
	}

	.white-background {
		position: relative;
		background-color: rgb(247, 234, 152);
		border-radius: 6px;
		margin: 8px;
		width: calc(100% - 16px); /* Subtract left and right margins */
		height: calc(100% - 16px); /* Subtract top and bottom margins */
		z-index: 2;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.blue-background {
		position: absolute;
		background: conic-gradient(
			from 0deg at 50% 50%,
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
		top: 5vh;
		left: 50%;
		width: 65vw;
		height: 65vw;
		transform: translateX(-50%);
		z-index: 1;

		animation: rotateBackground 5s linear infinite;
	}

	h3 {
		font-size: 1.75rem;
		color: #38bdf8;
		text-align: center;
		position: relative;
		z-index: 2;
	}

	a {
		font-size: 1.75rem;
		color: #38bdf8;
		text-align: center;
		position: relative;
		z-index: 2;
	}

	a:hover {
		color: #ef4443;
		/* text-decoration: none; */
		opacity: 0.7;
		cursor: pointer;
	}

	@keyframes rotateBackground {
		from {
			transform: translateX(-50%) translateY(-50%) rotate(0deg);
		}
		to {
			transform: translateX(-50%) translateY(-50%) rotate(360deg);
		}
	}
</style>
