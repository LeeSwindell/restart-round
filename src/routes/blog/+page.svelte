<script lang="ts">
	let Dominion = 'imgs/webp/blog/Dominion.webp';
	let Clank    = 'imgs/webp/blog/Clank.webp';
	let Reap     = 'imgs/webp/blog/Reap.webp';
	let fish     = 'imgs/webp/blog/fish.webp';
	let pokemon  = 'imgs/webp/blog/pokemon.webp';
	let wet      = 'imgs/webp/blog/wet.webp';
</script>

<svelte:head>
	<title>Restart Round | Blog</title>
</svelte:head>

<main>
	<div class="blog-post">
		<div class="about-text">December 25, 2023: Happy Holidays!</div>
		<p style="font-size:1.5em">In honor of the holidays, I thought it would be a good idea to take a look back at some of the games I've played with my family. There have been some real hits with my extended family,
			so at this moment I'll just highlight the first few that enter my mind!			
		</p>
		<div class="container">
			<div class="column">
				<div class="founder-text">Freddi Fish</div>
				<img src={fish} width="6720" height="4480" alt="Freddi Fish" />
				<p>
					<a href="https://www.humongous.com/freddi-fish">Freddi Fish</a> was a defining game of my childhood. I remember playing with my brother on my dad's computer and it was so magical! I learned a lot,
					including what a deed to a house was, since you had to find that at the end of one of the games. In fact, I liked all the
					<a href="https://www.humongous.com/">Humongous</a> games, and I think Pajama Sam and Spy Fox would be upset if they were not included here! Fun for all ages.
				</p>
				<!-- <br><br>Whether it's complicated co-op games that take hours to play, superhero-themed deck builders, or party games, I'm always willing to try something new. But once I lose, you will catch me reading the rule book front to back, trying to find a new angle we hadn't considered." -->
			</div>
			<div class="column">
				<div class="founder-text">Pokemon Master Trainer</div>
				<img src={pokemon} width="1080" height="810" alt="Pokemon Master Trainer" />
				<p>
					How could this be a blog for a game company without mentioning
					<a href="https://www.pokemon.com/us">Pokemon</a>?? Ok, to be honest, I only played this board game like one time at my cousin's house. But to think of all the countless hours
					I spent replaying the games for the game boy advance - wow. That was a lot. Pro tip for playing in the back seat of a car on a long road trip at night: if you rotate the game boy at just the right speed,
					you can use the light from the passing streetlights to illuminate the display.
				</p>
			</div>
			<div class="column">
				<div class="founder-text">Wet Head</div>
				<img src={wet} width="886" height="1574" alt="Wet Head" />
				<p>
					Wet Head is a hilarious game! The idea is that you fill the hat with water (preferably ice-cold) and then you pass it around! Each player has to draw a straw from the hat, and if you pull the wrong one, you get cold water dumped on you!
					What I love about this game is I have never been the Wet Head. It seems my brother Jake is always going home with a towel :)
				</p>
			</div>
		</div>
	</div>

	<div class="blog-post">
		<div class="about-text">December 23, 2023: Some games I like!</div>
		<div class="container">
			<div class="column">
				<div class="founder-text">Dominion</div>
				<img src={Dominion} width="6720" height="4480" alt="Dominion" />
				<p>
					Dominion is a staple of the board game history, as it first introduced the concept of the deck-builder!
					I've been playing for some years now (for free!) at 
					<a href="https://dominion.games">dominion.games</a> as well as the 
					<a href="https://dominionleague.org/">Dominion League</a>. There's even the 
					<a href="https://store.steampowered.com/app/1131620/Dominion/">Steam version</a> which is super fun because you can take on the computer (which is pretty good!).
					I'd really recommend this game to anyone who shows a mild interest in games. It's great for all ages, though you have to be able to shuffle cards if you plan on playing in person :)
				</p>
				<!-- <br><br>Whether it's complicated co-op games that take hours to play, superhero-themed deck builders, or party games, I'm always willing to try something new. But once I lose, you will catch me reading the rule book front to back, trying to find a new angle we hadn't considered." -->
			</div>
			<div class="column">
				<div class="founder-text">Clank!</div>
				<img src={Clank} width="1080" height="810" alt="Clank" />
				<p>
					Continuing the theme of the deck-builder games, Clank introduces a new twist with the added mechanic of a dungeon that you explore. So while you're building a deck,
					you also pass through a dungeon and fight various monsters! But don't worry, it's not too scary, except for the dragon Nictotraxian! (Hardcore Dire Wolf fans will recognize her
					from Eternal). The clank cubes are very fun and this game works for any number of players 2-4. Just note that you have to be able to shuffle cards if you plan on playing in person :)
				</p>
			</div>
			<div class="column">
				<div class="founder-text">Reap</div>
				<img src={Reap} width="886" height="1574" alt="Reap" />
				<p>
					The result of a successful
					<a href="https://www.kickstarter.com/projects/drinkingquest/reap-1">Kickstarter</a> campaign, Reap brings delight to the topic of death. I like it because of the reaper cards,
					which have fantastic art and concepts like "canned reaper" and the "peeper reaper". Check it out today! It's great fun for 2-4 people. One note is that at least one person in your
					group will have to be able to shuffle cards. This probably isn't too hard though.
				</p>
			</div>
		</div>
	</div>

	<div class="blog-post">
		<div class="about-text">December 21, 2023: Starting the Blog!</div>
		<p style="font-size:1.5em">Hi everyone! Brian here. We decided to start a blog to keep other gamers up-to-date on our opinions of the week.
			Hey there! Starting this blog for our board game site is something I'm super excited about, and I can't wait to share it with you. Board games are awesome, right? Well, this blog is like our cool hangout spot where we can talk about them in a fun way. It's not just about facts; it's about us connecting and having a good time together. We're going to chat about games, share tips, and maybe even hear from game creators. I want this blog to be useful for both pros and newcomers, with simple reviews and helpful guides. By keeping things fresh and interesting, we'll not only keep you interested but also make new friends who love board games just like we do. This blog is like a super friendly place where we can geek out about board games, share what we know, and be part of this awesome community. So, let's dive in and have a blast together! 🎲✨
			<br>
			<br>
			-Brian			
		</p>
	</div>

</main>

<style>
	.blog-post {
		margin-top:   40px;
		margin-bottom:40px;
		border-radius:10px;
		text-align:left;
	}

	.blog-post:nth-child(even) {
		background-color: #c1e1ec;
	}

	.blog-post:nth-child(odd) {
		background-color:#ffdae0;
	}

	main {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
	}

	.container {
		display: flex;
		font-size:1.5em;
		justify-content: space-between;
	}

	.column {
		flex: 1;
		padding: 1vw;
		text-align: left;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* Add additional styles for images and text as needed */
	.column img {
		max-width: 100%;
		max-height: 400px;
		width: 100%;
		height: 300px; /* Set a fixed height for all images */
		object-fit: scale-down;
		border-radius: 5px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		/* border: 5px solid #EF4443;  */
		background: #111111;
	}

	.column p {
		margin: 10px 0;
	}

	.founder-text {
		font-size: 3rem;
		color: #ef4443;
		text-align: center;
		/* white-space: nowrap; */
		margin: 0;
		font-family: 'Londrina Solid';
		/* text-shadow: 1px 1px 5px pink; */
	}

	.about-text {
		font-size: 4rem;
		color: #38bdf8;
		font-family: 'Londrina Solid';
		margin:20px;
	}

	/* Media query for narrow and tall screens */
	@media screen and (max-width: 768px) {
		main {
			width: 95%;
		}

		.container {
			flex-direction: column; /* Stack columns vertically */
			align-items: center; /* Center the columns horizontally */
		}

		.column {
			flex: none; /* Don't allow columns to stretch to fill space */
			width: 100%; /* Take up the full width of the container */
		}
	}

	@media screen and (min-width: 450px) {
		.about-img-container {
			width: 40%;
			align-items: center;
			justify-content: center;
		}
		.about-us {
			align-items: start;
		}
	}

	.person-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		flex-direction: row;
		background-color: #fff7ed;
	}

	.person-info {
		flex: 1;
		padding: 0 20px;
		text-align: left;
		min-width: 65%;
	}

	.person-info p {
		margin: 0;
	}

	.person-img {
		flex: 1;
		order: 1; /* Start with the image on the left */
	}

	.person-img img {
		max-width: 100%;
		max-height: 400px;
		width: 100%;
		height: 300px; /* Set a fixed height for all images */
		object-fit: scale-down;
		border-radius: 4px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		/* border: 5px solid #38BDF8;  */
		background: #111111;
	}

	/* Alternate the order of the image and text for every even .person-container */
	.person-container:nth-child(even) {
		flex-direction: row-reverse;
		background-color: #fee2e2;
		/* background-color: #f4e4e4;  */
		/* Optional background color for better visibility    */
	}
</style>
