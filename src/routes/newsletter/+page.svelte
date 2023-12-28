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
		title="subscribe"
		src="https://ced175fe.sibforms.com/serve/MUIFAEFzZJPzLGyXS_xaCdfpUPMmefU_ChFmjo7XsprNdSgvTob_EenfSeYnQuuJvUjgH4Colh_ezzy9lWwftCh3_tHVhfZVf6U-NUbsusgRtEk7A7vvFbHqttOsv_MXYfwEiO4PH13aoZIacmV9QRw_E-NmI0clSxGPWyXS59U1u-hAgYI4sCztfoRIoRW5YdtFsKb-pYYCl6Mm"
		frameborder="0"
		scrolling="auto"
		allowfullscreen
		style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
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
