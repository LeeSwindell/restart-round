<svelte:head>
	<title>Restart Round | Newsletter</title>
</svelte:head>

<div class="container">
	<div class="left">
		<h1 class="title">What To Expect?</h1>
		<p class="text">
			Updates on games of course! We won't spam you, sell your email, or do anything but send you
			the occasional email with news about our games.
		</p>
		<br />
		<p class="text">Here's what we plan on sending:</p>
		<ul>
			<li class="text">Notifications that a Kickstarter went live</li>
			<li class="text">A heads up that a game is released and ready to ship</li>
			<li class="text">Plans for in-person events (e.g. Board game conventions)</li>
		</ul>
	</div>
	<iframe
		width="540"
		height="305"
		title="Newsletter Subscription"
		src="https://ced175fe.sibforms.com/serve/MUIFACgU008ooNJdvSofuZVZbefrnfeHTV0RAd4mkJ-V12sn7Api-OBzNolSXOBm2p7FBxQSBZrQolRmE-k_C8iloaol_m0kmWMByTf7IVCd63hoTxxl1NZpQeBdlvNH2j_jtL7Jw0DTw0CLObiXqKgnitVAjrjray9-nf9xQaHjrRvNLiZO1lNPggI7Ysc1qpFl8f_05sRDiJ9i"
		frameborder="0"
		scrolling="auto"
		allowfullscreen
		style="display: block;max-width: 100%; overflow: visible;"
	></iframe>
</div>

<style>
	.container {
		height: 85vh;
		width: 90%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: auto;
		gap: 10px;
		overflow: visible;
	}

	.left {
		padding-top: 35px;
		width: 540px;
	}

	.title {
		grid-area: title;
		font-family: 'Londrina Solid', sans-serif;
		font-size: 3rem;
		color: #38bdf8;
	}

	.text {
		font-family: 'Londrina Solid', sans-serif;
		font-weight: 300;
		font-size: 1.5rem;
		color: black;
	}

	iframe {
		height: 100%;
		overflow: visible;
	}
</style>
