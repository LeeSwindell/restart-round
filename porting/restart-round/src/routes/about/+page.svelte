<script lang="ts">
  let billy = 'imgs/people/billy.jpg';
  let brian = 'imgs/people/brian.jpg';
  let lee = 'imgs/people/lee.jpg';
  let nick = 'imgs/people/nick.jpg';
  let jo = 'imgs/people/jo.jpg';
</script>

<main>
	<br />
	<div class="about-text" style="text-align: center;">Meet the Founders</div>

	<div class="container">
		<div class="column">
			<div class="founder-text">Billy Mansmann</div>
			<img src={billy} width="6720" height="4480" alt="Billy Mansmann" />
			<p>
				"As a former statistics major, I mentally approach games like an optimization problem. What
				strategy will give the greatest probability of success? And what random events can
				completely throw that strategy upside down? And then I hope that those random events occur
				because that's what makes games fun. Most of my favorite memories gaming are from the
				ridiculous turns no one saw coming.
			</p>
			<!-- <br><br>Whether it's complicated co-op games that take hours to play, superhero-themed deck builders, or party games, I'm always willing to try something new. But once I lose, you will catch me reading the rule book front to back, trying to find a new angle we hadn't considered." -->
		</div>
		<div class="column">
			<div class="founder-text">Brian Ritchken</div>
			<img src={brian} width="1080" height="810" alt="Brian Ritchken" />
			<p>
				"I love games! I grew up playing millions of games with my family, learning math from
				Monopoly (deal out the properties, it's way faster) and diplomacy from Risk (don't make a
				deal with my older brother Jake). I've come to learn firsthand how much games can do - they
				bring people together, engage and uplift them, and reveal their inner personalities. It was
				through games that I came to know and love the friends behind Restart Round, and in
				discussing and playtesting our own games it feels we're back in the college dining hall, our
				faces beaming and our aspirations inexorable. Let's make some games!"
			</p>
		</div>
		<div class="column">
			<div class="founder-text">Lee Swindell</div>
			<img src={lee} width="886" height="1574" alt="Lee Swindell" />
			<p>
				"Hey fellas, I'm Lee! I play games for that singular moment where hours of work, close
				competition, and focus all collide and it comes down to one 50/50 dice roll to decide who's
				going to call the game 'unfair', 'rigged', and 'complete bulls***'. And then playing the
				same game 6 more times because it was actually amazing."
			</p>
		</div>
	</div>
</main>

<div class="about-text">... And the Team!</div>

<div class="person-container">
	<div class="person-img">
		<img src={nick} alt="Nick Sartini" />
	</div>
	<div class="person-info">
		<h2>Nick Sartini</h2>
		<p>
			"I first tripped and fell down the board game rabbit hole in high school when my friends and I
			would meet for weekly board game nights. We played a lot of One Night Ultimate Werewolf, King
			of New York, and Bang! From there I only fell deeper with a quick bump into the world of Magic
			the Gathering before settling at the bottom in the world of my favorite game, Dungeons &
			Dragons. Now I am a forever Dungeon Master who loves building everything from entire worlds to
			the little details of an in-game encounter. Loving the creative possibilities that board games
			have to offer, I knew I couldn't pass up the chance to join Restart Round in order to help my
			friends create all kinds of fun and exciting games. Trust me when I say play testing board
			games is the dream."
		</p>
	</div>
</div>

<div class="person-container">
	<div class="person-img">
		<img src={jo} alt="Jo Denby" />
	</div>
	<div class="person-info">
		<h2>Jo Denby</h2>
		<p>"I like moles."</p>
	</div>
</div>

<style>
	main {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
	}

	.container {
		display: flex;
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
		text-align: center;
		font-family: 'Londrina Solid';
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
