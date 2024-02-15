<div class="mole-title-bar">
	<img
		class="png-shadow"
		style="margin-left: auto; margin-right: auto; width:50%; max-width:800px; height:auto;"
		src="imgs/mole/Mole Park Logo.png"
		alt="King Mole"
	/>
	<h2
		style="font-size:4vw;margin-left: auto; margin-right: auto; margin-bottom: 10px; color: #8562AA; -webkit-text-stroke: 1px #000000; font-weight: extra-bold;"
	>
		Mole Park Theme Song
	</h2>
	<div class="wrapper">
		<div class="h_iframe">
			<iframe
				width="2"
				height="2"
				src="https://www.youtube-nocookie.com/embed/lwtBjOKS1y0?si=YTL-oAxNUCuh22MH"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</div>
	</div>
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
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.wrapper {
		width: 95%;
		max-width: 600px;
		height: 100%;
		margin: 10px auto 20px auto;
	}

	.h_iframe {
		position: relative;
		padding-top: 56.25%;
	}

	.h_iframe iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}

	@media screen and (max-width: 450px) {
		.mole-title-bar {
			background-color: black;
		}
	}
</style>
