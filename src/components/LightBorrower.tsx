import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { HoverGifArticle } from './HoverGifArticle';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const LightBorrower: React.VFC = () => (
  <div className="articleContent">
	<p className="articleTitle">Light Borrower</p>
	<div className="articlePictureCenter"><HoverGifArticle stillPath="./art/doorClosing.jpg" gifPath="./art/doorClosing.gif" subTitle="The trial begins"> </HoverGifArticle></div>
	<div className="articleIntro">
		<p><a className="emailLink" href="https://jonapulse.itch.io/light-borrower">Light Borrower</a> is a 2D story and puzzle game made in Unity. I began development while studying in the RIT Game Design & Development program, and was awarded funding by RIT’s MAGIC Spell Studios to continue the project. A year later, after recruiting a team, the game was released to the steam marketplace. While leading the project, I…</p>
		<ul>
			<li>Developed and refined the core concept through several prototypes.</li>
			<li>Architected C# code, including a system that supported seamless transitions between story, hub worlds, and puzzles, as well as a system used for puzzles that calculated 2D lighting in real-time.</li>
			<li>Managed the team on weekly remote meetings…
			<div className="articlePictureRight"><img src="./art/windowSideBySide.jpg"></img><div className="subTitle">Stained glass window. My concept, artist's rendition.</div></div>
				<ul>
					<li>collaborating with programmer <a className="emailLink" href="https://www.akshayrachapudi.com">Akshay Rachapudi</a> on feature development and adjusting task loads to hit milestones</li>
					<li>working with composer <a className="emailLink" href="https://www.garretreynolds.com">Garret Reynolds</a> to find the right ‘feel’ for the music and use Wwise audio software to a implement a score with randomized, looping elements</li>
					<li>and partnering with illustrator <a className="emailLink" href="https://middlemanonart.com/">Manon Hale</a> to design and render key game assets.</li>
				</ul>
			</li>
			<li>Wrote and integrated a story told through found documents written by four off-screen characters.</li>
		</ul>
	</div>
	<p className="articleSubheader">Prototyping Light Borrower</p>
	<p className="articleParagraph">The game exists because I wanted to tell a story capturing my experience of being raised with a grand, comforting view of what the world was, then having that gradually fall apart. You play as a young woman raised by a tight-knit religious community who live together in the underground bunker that saved from the apocalypse. But, as the player discovers along the way, turns out the apocalypse never happened. When I prototyped the central game mechanic, I wanted one that resonated with that story: truth-seeking, finding out you're wrong, myth vs reality.</p>
	<p className="articleParagraph">So my brainstorming grew out of the story’s themes. Perhaps a world full of illusions with fire that didn’t hurt and flowers that did. Or a passion play designed to teach morals, but where the player could go backstage and alter the scenery. Thematically, many of these ideas fit. But the gameplay moments that I imagined for these mechanics were all one-off novelties that couldn’t be repeated or expanded. I pruned the ideas down until there was only one left, perfect for both creating a series of interesting puzzles and conveying the theme of a search for truth. That idea? </p>
	<p className="articleParagraph">Lasers.</p>
	<p className="articleParagraph">I eventually moved on from Lasers.</p>
	<div className="articlePictureCenter"><HoverGifArticle stillPath="./art/protoLasers.jpg" gifPath="./art/protoLasers.gif" subTitle="Prototype 0.1a"> </HoverGifArticle></div>
	<p className="articleParagraph">My thought process had been this — “Light” is hugely important in cultural depictions representing both religion and the secular pursuit of knowledge. Lasers are made of light. And solving puzzles by redirecting lasers with mirrors is a tried and true game mechanic. I made a prototype, and playtested with colleagues. But now that my idea was concrete, it became apparent the concept didn't match my intentions. I had wanted the atmosphere of a mysterious ritual, but what I had felt like a mad scientist’s lab.</p>
	<div className="articlePictureRight"><HoverGifArticle stillPath="./art/lightPuzzleSimple.jpg" gifPath="./art/lightPuzzleSimple.gif" subTitle="Prototype 0.2b"> </HoverGifArticle></div>
	<p className="articleParagraph">While searching for a replacement, I discovered (and helped fund) a <a href="https://ncase.me/sight-and-light/">stealth game</a> that used 2D visual sight lines obscured by obstacles. The tool easily supported creating a mysterious atmosphere, nad I saw a possibility of using that to make puzzles. Also, frankly, it looked cool. Playtesters agreed, pointing out the atmosphere and being more engaged in general with the game.</p>
	<p className="articleParagraph">Using light and shadow to make puzzles fit the games themes much better than lasers had, but I was also struck simply by how much better the puzzles looked. I chose to explore more along that vein, looking for inspiration among other types of puzzles that were mysterious and beautiful, and I stumbled into puzzle boxes. These are hand-held puzzles, often intricately carved from wood, that you poke and prod apart, disocvering secrets, until you open them and find what’s inside. I adapted this to 2D by building puzzles out of flat, wooden pieces layered on top of each other that the player could discover and manipulate. </p>
	<div className="articlePictureLeft"><HoverGifArticle stillPath="./art/lightPuzzleBox.jpg" gifPath="./art/lightPuzzleBox.gif" subTitle="Prototype 0.3c"> </HoverGifArticle></div>
	<p className="articleParagraph">Then, I made around a hundred more of these puzzles over the course of several months. And then I had a game..</p>
	<p className="articleParagraph">Looking back I see the limitations in the prototyping method I employed. Building an idea from theme is very risky. The set of all possible games that fit a theme  might not include one that is enjoyable, or at least enjoyable enough to be viable in the marketplace. A theme-less gameplay concept that makes for a wonderful experience can have themes applied to it that may tell a story you care about as much or more than a story that you’ve been dying to tell. But I don't claim to have single right answer here. Just some thoughts and reflections.</p>
	<div className="articlePictureCenter"><HoverGifArticle stillPath="./art/finalPuzzle.jpg" gifPath="./art/finalPuzzle.gif" subTitle="A puzzle from the released game"> </HoverGifArticle></div>

 </div>
);
