<div class="container" id="banner-container">
	<div class="white-background">
		<h3>
			Listen to the Restart Round Theme Song:<br />
			<audio controls src="/restartround.mp3"></audio>
		</h3>
	</div>
	<div class="blue-background"></div>
</div>

<style>
	.container {
		position: relative;
		height: fit-content;
		width: fit-content;
		max-width: 80vw;
		padding: 10px 10px 10px 10px;
		overflow: hidden;
		margin-left: auto;
		margin-right: auto;
		margin-top: 5px;
		margin-bottom: 5px;
		border-radius: 10px;
	}

	.white-background {
		position: relative;
		background-color: #fafafa;
		padding: 8px 8px 8px 8px;
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
		width: 100vmax;
		height: 100vmax;
		transform: translateX(-50%);
		z-index: 1;

		animation: rotateBackground 5s linear infinite;
	}

	h3 {
		font-size: 1.5rem;
		color: #38bdf8;
		text-align: center;
		position: relative;
		padding-left: 10px;
		padding-right: 10px;
		z-index: 2;
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
