<script>
	let pdfUrl = '/molepark/rules.pdf';
	let youtubeUrl = 'https://www.youtube.com/embed/HHHMNZ4cSPw?si=R6mXanRQzrTGBCUR';
</script>

<svelte:head>
	<title>Restart Round | Mole Park Rules & Tracking</title>
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

    <div style="max-width:400px; margin:40px auto; background:#ffffff; padding:20px; border:1px solid #ddd; border-radius:6px;">
      <h2 style="margin-top:0; font-size:20px;">Tracking Information</h2>

      <p style="margin:6px 0; font-size:16px;">
        <strong>Made in:</strong> China
      </p>

      <p style="margin:6px 0; font-size:16px;">
        <strong>Batch:</strong> MP-01
      </p>

      <p style="margin:6px 0; font-size:16px;">
        <strong>Date:</strong> Dec 2024
      </p>

      <p style="margin-top:20px; font-size:14px; color:#666;">
        This page provides tracking label information for Mole Park: Whack &amp; Win.
      </p>
    </div>

</div>
