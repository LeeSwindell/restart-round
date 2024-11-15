<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import '../global.css';
	import { onMount } from 'svelte';

	let open: boolean;
	let dismissed = true;

	const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

	// Check local storage for dismissal status on mount
	onMount(() => {
		const storedTimestamp = localStorage.getItem('bannerDismissedTimestamp');
		if (storedTimestamp) {
			const currentTime = new Date().getTime();
			const elapsed = currentTime - parseInt(storedTimestamp, 10);
			if (elapsed > oneDayInMilliseconds) {
				dismissed = false;
			} else {
				localStorage.removeItem('bannerDismissed');
				localStorage.removeItem('bannerDismissedTimestamp');
			}
		} else {
			dismissed = false;
		}
	});

	function dismissBanner() {
		dismissed = true;
		const currentTimestamp = new Date().getTime();
		localStorage.setItem('bannerDismissed', 'true');
		localStorage.setItem('bannerDismissedTimestamp', currentTimestamp.toString());
	}
</script>

<svelte:head>
	<title>Restart Round</title>
</svelte:head>

<Header bind:open />
<Banner {dismissed} on:dismiss={dismissBanner} />
<Menu bind:open />
<slot />
<Footer />
