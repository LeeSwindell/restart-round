<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import '../global.css';

	let open: boolean;
</script>

<svelte:head>
	<title>Restart Round</title>
</svelte:head>

<Header bind:open />
<Banner />
<Menu bind:open />
<slot />
<Footer />
