
<div class="mole-title-bar">
	<img
		class="png-shadow"
		style="margin-left: auto; margin-right: auto; width:70%; max-width:800px; height:auto;"
		src="imgs/mole/Mole Park Logo.webp"
		alt="King Mole"
	/>
	<h2 style="font-size:4vw;margin-left: auto; margin-right: auto; color: #8562AA; -webkit-text-stroke: 1px #000000; font-weight: extra-bold;">Mole Park Theme Song</h2>
	<p><br /></p>
	<div class="player">
		<iframe width=480px height=270px src="https://www.youtube-nocookie.com/embed/lwtBjOKS1y0?si=YTL-oAxNUCuh22MH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	</div>
	<p><br /></p>
	<p><br /></p>
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

	.player {
 	    border-radius: 20px;
		border:white;
		overflow: hidden;
		z-index: 22;
		height: 270px;
		width: 480px;
		margin-right: auto;
		margin-left: auto;
		border-style: ridge;
	  	border: 5px solid #000; /* Border style, can be adjusted as needed */
	}

	@media screen and (max-width: 450px) {
		.mole-title-bar {
			background-color:black;
		}
	}
</style>
