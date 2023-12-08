<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { page } from '$app/stores';

	export let open: boolean;
	function closeMenu() {
		open = false;
	}
</script>

<div>
	{#if open}
		<div class="container" transition:scale={{ duration: 150, easing: quadOut, opacity: 1 }}>
			<p transition:fly={{ y: -15, delay: 50 * 0 }}>
				<a class:active={$page.url.pathname === '/'} href="/" on:click={closeMenu}>Home</a>
			</p>
			<p transition:fly={{ y: -15, delay: 50 * 1 }}>
				<a class:active={$page.url.pathname === '/about'} href="/about" on:click={closeMenu}
					>About</a
				>
			</p>
			<p transition:fly={{ y: -15, delay: 50 * 2 }}>
				<a class:active={$page.url.pathname === '/molepark'} href="/molepark" on:click={closeMenu}
					>Mole Park
				</a>
			</p>
			<p transition:fly={{ y: -15, delay: 50 * 3 }}>
				<a
					class:active={$page.url.pathname === '/rosterreshuffle'}
					href="/rosterreshuffle"
					on:click={closeMenu}>Roster Reshuffle</a
				>
			</p>
			<p transition:fly={{ y: -15, delay: 50 * 4 }}>
				<a
					class="newsletter"
					class:active={$page.url.pathname === '/newsletter'}
					href="/newsletter"
					on:click={closeMenu}>Newsletter</a
				>
			</p>
			<p transition:fly={{ y: -15, delay: 50 * 5 }}>
				<a
					class="blog"
					class:active={$page.url.pathname === '/blog'}
					href="/blog"
					on:click={closeMenu}>Blog</a
				>
			</p>
		</div>
		<div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
	{/if}
</div>

<style>
	.container {
		align-items: end;
		border: 2px solid #fca5a5;
		width: 100%;
		margin: auto;
		position: fixed;
		background: #fafafa;

		/* opacity: 0;
		transition: opacity 0.5s ease-in-out; */
		text-align: right;
		padding: 10px;
		/* position: fixed; */
		top: 8vh;
		right: 0;
		z-index: 50;
	}

	a {
		color: #38bdf8;
		text-decoration: none;
		font-size: 2.5rem;
	}

	a:hover {
		color: #ef4443;
		text-decoration: none;
		opacity: 0.7;
		cursor: pointer;
	}

	a.active {
		color: #ef4443;
		opacity: 0.7;
	}
</style>
