import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const G1LightBorrower: React.VFC = () => (
  <div>
	<p>Light Borrower is a 2D story and puzzle game made in Unity. I began development while a student in the RIT Game Design & Development program, and was awarded funding by RIT’s MAGIC Spell Studios to continue the project. A year later, after recruiting a team, the game was released on the steam marketplace. While leading the project, I…</p>
	<ul>
		<li>Developed and refined the core concept through several prototypes (and wrote about it below, if you’re curious[link]).</li>
		<li>Architected C# code, including a system that supported seamless transitions between story, hub worlds, and puzzles, as well as a system used for puzzles that calculated 2D lighting in real-time.</li>
		<li>Managed the team on weekly remote meetings…</li>
		<li>
			<ul>
				<li>collaborating with programmer Akshay Rachapudi[link] on feature development and adjusting task loads to hit milestones</li>
				<li>working with composer Garret Reynolds[link] to find the right ‘feel’ for the music and use Wwise audio software to a implement a score with randomized, looping elements</li>
				<li>and partnering with illustrator Manon Hale[link] to design and render key game assets.</li>
			</ul>
		</li>
		<li>Wrote and integrated a story told through found documents written by four off-screen characters.</li>
	</ul>
	<p>Prototyping Light Borrower</p>
	<p>Light Borrower happened because I wanted to tell a story that captured my own experience of being raised with a grand, comforting view of what the world was, then having that gradually fall apart when exposed to reality. You play as a young woman raised in an underground bunker by a tight-knit religious community that were saved from the apocalypse. Only they were wrong about the apocalypse… the player discovers this along the course of the game. When I prototyped the central game mechanic, I wanted something that resonated with that story: truth-seeking, being wrong, myth vs reality.</p>
	<p>So I based my brainstorming around the story’s themes. One idea was to build a world full of illusions with fire that couldn’t hurt or flowers that could. Or the game could be a passion play designed to teach morals, but where the player could alter the scenery and go backstage. Thematically, many of these ideas fit. But the gameplay moments that I could imagine for these mechanics were all one-off novelties that couldn’t be repeated or expanded. I pruned my gameplay ideas until the only one left was perfect for both creating a series of interesting puzzles and conveying the theme of a search for truth. That idea? Lasers. </p>
	<p>I eventually moved on from the laser idea [early prototype shot]. My thought process was this — “Light” is hugely important in cultural depictions representing both religion and the secular pursuit of knowledge, lasers are made of light, and puzzles you solve by redirecting lasers with mirrors are definitely doable. I made a prototype, and playtested with colleagues. Now that my idea was concrete, its mismatch with my expectations became apparent. I had wanted a mysterious ritual, but what I had was a mad scientist’s lab.</p>
	<p>I was inspired after discovering and backing a <a href="https://ncase.me/sight-and-light/">stealth game</a> that used 2D visual sight lines obscured by obstacles to develop that tool into a puzzle. It was well suited to an atmosphere of mystery, and, frankly, it looked cool. [img, maybe early image or final one. Hell why not it looks better]. The response from playtesters was much better her. They started to comment positively on the atmosphere of the thing.</p>
	<p>My first prototype had been vastly improved by choosing an idea that was visually better. Visually, it fit the theme better. And visually, it looked much better. From there, I wanted to explore further in the visual direction, and was inspired when I stumbled on puzzle boxes. These are hand-held puzzles, often intricately carved from wood, that poke and prod apart to discover secrets until you open them and find what’s inside. I adapted this to 2D by building puzzles out of flat, wooden pieces layered on top of each other that slid around. </p>
	<p>Then, I made like a hundred of these puzzles over the course of several months. And that was the journey.</p>
	<p>Looking back I see the limitations in the prototyping method I employed. Building an idea from theme is very risky. The set of all possible games that fit a theme  might not include one that is enjoyable, or at least enjoyable enough to be viable in the marketplace. A theme-less gameplay concept that makes for a wonderful experience can have themes applied to it that may tell a story you care about as much or more than a story that you’ve been dying to tell. No single right answer here, just some thoughts and reflections.</p>
 </div>
);
