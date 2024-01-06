
<div class="mole-title-bar">
	<img
		class="png-shadow"
		style="margin-left: auto; margin-right: auto;"
		src="imgs/mole/Mole Park Logo.webp"
		width="1200vmin;"
		alt="King Mole"
	/>
</div>

<style>
	/* Parallax effect on title bar image */
	.mole-title-bar {
		background-attachment: fixed;
		background-image: url('$lib/assets/molepark.png');
		background-size: cover;
		color: white;
		border-image: radial-gradient(ellipse at center, #af36e3 60%, #2ecc71) 1;
		border-image-slice: 1;
		border-style: inset;
		border-width: 10px;
		border-radius: 5px;
		overflow-x: visible;
		width: auto;
		text-align: center;
		height: 85vh;
		max-height: 85vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	@media screen and (max-width: 450px) {
	}
</style>
