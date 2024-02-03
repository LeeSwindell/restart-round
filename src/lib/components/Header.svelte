<script lang="ts">
	import DiscordLogo from './DiscordLogo.svelte';
	import InstagramLogo from './InstagramLogo.svelte';
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';

	export let open: boolean;

	let logoPath = '/BigLogoNoBG.svg';
</script>

<div class="container">
	<div class="left">
		<a href="/">
			<img class="logo" src={logoPath} alt="Restart Round Logo" />
		</a>
	</div>

	<div class="mobile center">
		<Hamburger bind:open --color="#38bdf8" />
	</div>
	<div class="desktop center">
		<a class:active={$page.url.pathname === '/'} href="/">Home</a>
		<div>&#160-&#160</div>
		<a class:active={$page.url.pathname === '/about'} href="/about">About</a>
		<div>&#160-&#160</div>
		<a class:active={$page.url.pathname === '/store'} href="/store">Store</a>
		<div>&#160-&#160</div>
		<a class:active={$page.url.pathname === '/molepark'} href="/molepark">Mole Park </a>
		<div>&#160-&#160</div>
		<a class:active={$page.url.pathname === '/rosterreshuffle'} href="/rosterreshuffle"
			>Roster Reshuffle</a
		>
		<div>&#160-&#160</div>
		<a class="newsletter" class:active={$page.url.pathname === '/newsletter'} href="/newsletter"
			>Newsletter</a
		>
		<div>&#160-&#160</div>
		<a class="blog" class:active={$page.url.pathname === '/blog'} href="/blog">Blog</a>
	</div>

	<div class="right">
		<div class="follow desktop">Follow us!</div>
		<a href="https://www.instagram.com/restartroundgames/">
			<InstagramLogo />
		</a>
		<a href="https://discord.gg/34M27tp8KJ">
			<DiscordLogo />
		</a>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-areas: 'left center right';
		/* border-bottom: 2px #38bdf8 solid; */
		height: 15vh;
		align-items: center;
		position: sticky;
		top: 0;
		width: auto;
		z-index: 50;
		background-color: #fafafa;
	}

	.left {
		grid-area: left;
		justify-content: left;
	}

	.center {
		grid-area: center;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
	}

	.right {
		grid-area: right;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: right;
	}

	.logo {
		height: 12vh;
		padding-left: 5px;
	}

	div {
		color: #38bdf8;
	}

	a {
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

	@media screen and (min-width: 451px) {
		.mobile {
			display: none;
		}
	}

	@media screen and (max-width: 450px) {
		.desktop {
			display: none;
		}

		.container {
			height: 8vh;
		}

		.left {
			grid-area: center;
		}
		.center {
			grid-area: right;
		}
		.right {
			grid-area: left;
			height: 100%;
		}
		.logo {
			margin-left: auto;
			margin-right: auto;
			height: 6vh;
		}
	}
</style>
