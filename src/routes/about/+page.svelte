<script lang="ts">
	let billy = 'imgs/webp/people/billy.webp';
	let brian = 'imgs/people/brian.jpg';
	let lee = 'imgs/webp/people/lee.webp';
	let nick = 'imgs/webp/people/nick.webp';
	let jo = 'imgs/webp/people/jo.webp';
	let brendon = 'imgs/webp/people/brendon.webp';
	let us = 'imgs/people/us.jpg';
</script>

<svelte:head>
	<title>Restart Round | About</title>
</svelte:head>

<main>
	<br />
	<div class="top-part">
		<div class="about-text" style="text-align: center; margin-bottom: 20px;">About Us</div>
		
		<div class="image-container" style="float: right; margin-left: 20px;">
			<img src="{us}" width="auto" height="500px" alt="The Founders" class="fade-image" />
		</div>
		
		<div class="bulk-text">
			<p>
				The idea of creating Restart Round started during a conversation on a walk in Seattle,
				Washington, in 2023. A simple question: "What if we made a game?"
				<br /><br />
				If you and your friends like board games as much as us, you've probably had this type of conversation
				before. "What type of game do you wish exists?" "What mechanics would you change on some of your
				favorite games?" Usually, these types of conversations just lead to some fun banter and then everyone
				moves on with their lives. We would know. We had many of them ever since we met at Cornell. The thing
				that really bonded us for the first time was when we walked across campus to a board game night.
				In that sense, Restart Round started during a conversation on a walk in Ithaca, New York, in 2013.
				<br /><br />
				Since 2013, we've collectively lived across the country - New York, Cleveland, Boston, Chicago, San
				Francisco - but games always kept us together. Playing random games on Board Game Arena, reuniting
				in person and buying a new game, or getting together digitally to play the most influential game
				of them all: Gloomhaven. After we started a Gloomhaven campaign during the early days of 2020, our
				group became inseparable, spending hours and hours together on video calls. The name of the company,
				Restart Round, is a callback to Gloomhaven. In the online version, if you messed up your move, you
				could hit "restart round" to go back to the beginning of the round and re-try. Not our recommended
				approach, but mis-clicks happen. It soon became a common joke among us that we should "restart round"
				every time we did something stupid, games or otherwise.
				<br /><br />
				While we were in Seattle, we "restarted the round" on that conversation we had had a million times
				before and really thought about what our game would be. The result was Mole Park, our first ever
				game. At first, Mole Park was just another excuse for us to get on a discord call and mess around
				playing games. But soon we realized how good of a game we made and a new question emerged: "What
				if we made a company?"
				<br /><br />
				We learned quickly that it is a lot of work. But what we also learned is that we have an extremely
				talented group of friends and family: creative minds, eloquent writers, experienced marketers, amazing
				artists, dynamic musicians, skilled coders. Our games are uniquely us and are in many ways a love
				letter to this group of talented friends.
				<br /><br />
				As we officially started the company, we had a conversation about what ultimate success meant to
				us. Lee summed it up perfectly when he said, "I want us to randomly meet a group of friends at a
				bar or cafe and find out they played & loved one of our games. And when we tell them we made it they
				say 'wow you guys made that, that's amazing'. That would be ultimate success." A nice sentiment and
				one we take to heart. But at the end of the day, if we don't reach that level, we can always "restart
				round" & start a new game. Let's hope we don't need to.
			</p>
		</div>
		
		<div style="clear: both;"></div>
	</div>
	
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
		<h2>Nick Sartini, Operations</h2>
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
		<img src={brendon} alt="Brendon Jackson" />
	</div>
	<div class="person-info">
		<h2>Brendon Jackson, Community Manager</h2>
		<p>
			"Monopoly - I hate monopoly! it has been my life's ambition to complete rid the world of this
			vile game. Snowboarding - great! Coding - fun! Clank! - an amazing game! Soulsbourne - fun!
			Monopoly - get that S**T out of my face ..."
		</p>
	</div>
</div>

<div class="person-container">
	<div class="person-img">
		<img src={jo} alt="Jo Denby" />
	</div>
	<div class="person-info">
		<h2>Jo Denby, Mole Enthusiast</h2>
		<p>"I like moles."</p>
	</div>
</div>

<style>
	.top-part {
		max-width: 70%;
		margin: 0 auto;
		padding: 20px;
	}

	.image-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 10px; /* Add padding around the image */
	}

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

	.column img {
		max-width: 100%;
		max-height: 400px;
		width: 100%;
		height: 300px; /* Set a fixed height for all images */
		object-fit: scale-down;
		border-radius: 5px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		background: #111111;
	}

	.column p {
		margin: 10px 0;
	}

	p {
		font-size: 1.25rem;
		font-weight: lighter;
	}

	.founder-text {
		font-size: 3rem;
		color: #ef4443;
		text-align: center;
		margin: 0;
		font-family: 'Londrina Solid';
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

		.top-part {
			max-width: 100%;
			margin: 0 auto;
			padding: 20px;
    	}

		.image-container {
			width:100%;
		}
	}

	@media screen and (min-width: 450px) {
	}

	.person-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		flex-direction: row;
		/* background-color: #fff7ed; */
		background-color: #e0f2fe;
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
		background: #111111;
	}

	/* Alternate the order of the image and text for every even .person-container */
	.person-container:nth-child(even) {
		flex-direction: row-reverse;
		background-color: #fee2e2;
	}
</style>
