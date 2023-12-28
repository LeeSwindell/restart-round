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
		title="subscription"
		src="https://ced175fe.sibforms.com/serve/MUIFAMOzPM371ejZ1P02dlQboiCyuscKR4DBAxRSh3cZaUoJ_OCs1dSUubjaYNvgvQIO6H0G_G6ErNZxabnbZbLNx-8BKAGwxcFfrhzXVL58E3fDKoVhwoyO_7j9yFJKp60HWPpWj7ne6Tuak8WD-Y6FNZ_XW8b9zyfdbs2gM25ojsIvIYg3q0coivD-3LUs_Zv-tvcvLZhY9OfI"
		frameborder="0"
		scrolling="auto"
		allowfullscreen
		style="display: block; max-width: 100%;"
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
