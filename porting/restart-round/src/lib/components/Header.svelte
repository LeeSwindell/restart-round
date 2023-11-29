<script lang="ts">
	import DiscordLogo from './DiscordLogo.svelte';
	import InstagramLogo from './InstagramLogo.svelte';
	import { page } from '$app/stores';

	// let logoPath = '/rrlogo.svg';
	let logoPath = '/BigLogoNoBG.svg';
</script>

<div class="new">
	<div class="left">
		<a href="/">
			<img class="new-logo" src={logoPath} alt="Restart Round Logo" />
		</a>
	</div>

	<div class="center">
		<a class:active={$page.url.pathname === '/'} href="/">Home</a>
		<div>&#160-&#160</div>
		<a class:active={$page.url.pathname === '/about'} href="/about">About</a>
		<div>&#160-&#160</div>
		<a class="desktop" class:active={$page.url.pathname === '/molepark'} href="/molepark"
			>Mole Park
		</a>
		<div class="desktop">&#160-&#160</div>
		<a
			class="desktop"
			class:active={$page.url.pathname === '/rosterreshuffle'}
			href="/rosterreshuffle">Roster Reshuffle</a
		>
		<div class="desktop">&#160-&#160</div>
		<a class="newsletter" class:active={$page.url.pathname === '/newsletter'} href="/newsletter"
			>Newsletter</a
		>
	</div>

	<div class="right">
		<div class="follow">Follow us!</div>
		<a href="https://www.instagram.com/restartroundgames/">
			<InstagramLogo />
		</a>
		<a href="https://discord.gg/34M27tp8KJ">
			<DiscordLogo />
		</a>
	</div>
</div>

<style>
	.new {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		/* border-bottom: 2px #38bdf8 solid; */
		height: 15vh;
		align-items: center;
		position: sticky;
		top: 0;
		width: auto;
		z-index: 50;
		/* background-color: #fff7ed; */
		background-color: #fafafa;
		/* background-color: #ffffff; */
	}

	.left {
		justify-content: left;
	}

	.center {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
	}

	.right {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: right;
	}

	.new-logo {
		height: 12vh;
		padding-left: 5px;
	}

	div {
		color: #38bdf8;
	}

	a {
		/* font-size: 1.25rem; */
		color: #38bdf8;
		text-decoration: none;
	}

	a:hover {
		color: #ef4443;
		text-decoration: none;
		opacity: 0.7;
		cursor: pointer;
	}

	.follow {
		font-size: 1.25rem;
		padding-right: 5px;
	}

	a.active {
		color: #ef4443;
		opacity: 0.7;
	}
</style>
