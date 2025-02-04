<script>
	let pdfUrl = '/molepark/rules_new.pdf';
	let youtubeUrl = 'https://www.youtube.com/embed/ivnwIPcOVUs?si=-vJvqYXKNjHVrF29';
</script>

<svelte:head>
	<title>Restart Round | Mole Park Rules</title>
</svelte:head>

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
	<div style="position: relative; width: 80%; max-width: 800px; aspect-ratio: 16 / 9; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden;">
		<iframe
			src={youtubeUrl}
			title="How to Play Mole Park"
			style="position: absolute; width: 100%; height: 100%; border: none;"
			allowfullscreen
		></iframe>
	</div>

	<a href={pdfUrl} target="_blank" rel="noopener noreferrer"
		style="margin-top: 15px; font-size: 1.2rem; text-decoration: none; color: #007BFF;">
		📄 Open the Rules PDF
	</a>
</div>
