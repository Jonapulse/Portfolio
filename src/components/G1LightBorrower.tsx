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
    <P>Light Borrower was very much a passion project (also a 2D puzzle game, made in Unity, released on steam). I wanted to tell a story about growing up and discovering that you are very wrong about some important things, and so I made a puzzle game where the player must discover they are in a doomsday cult and escape to the real world. I started development as a student in RIT’s Game Design and Development masters program, and expanded the team to include another programmer, an artist, and a composer when MAGIC Spell Studios awarded the game a grant.</P>
	<P>While leading the project, I...</P>
	<ul>
		<li>Developed the concept and refined/remade it through several steps of prototyping (see below.)</li>
		<li>Architected [?] and programmed the majority of the game [2/3rds. Should you say that? And maybe not quite that much because many of your hours were not programming], including puzzle mechanics, game view transitions[how do I say that?], all the scenes, secrets. The light system. Seamless transitions from puzzle to puzzle select room to other room.</li>
		<li>Held weekly remote meetings with the other programmer on the team, Akshay Rachapudi, to set milestones for upcoming features, integrate completed work, and divide up tasks. Source control. Steam release.</li>
		<li>Held weekly remote meetings with our artist, Manon Hale, to brainstorm essential art pieces and plan out time. [include a side by side if you can of your recs vs Manon’s final].</li>
		<img id='concept_art' src='/art/testGifStill.png'/>
		<li>Held regular remote meetings [ maybe I should do a sub list under ‘held regular remote meetings with… artist, composer, programmer’] with our composer to discuss the music and to integrate it using the WWise audio platform to generate non-repetitive loops that smoothly swapped out components during transitions. [should the names be links? Why not?]</li>
	</ul>
	<br />
	<h1> Prototyping Light Borrower</h1>
	<P>Light Borrower was very much a passion project (also a 2D puzzle game, made in Unity, released on steam). I wanted to tell a story about growing up and discovering that you are very wrong about some important things, and so I made a puzzle game where the player must discover they are in a doomsday cult and escape to the real world. In an important way, the game was motivated by that powerful emotion, and gameplay that could evoke. </P>
	<P>Brainstorming was guided by that desire. I explored ideas around discovery, around religious imagery like light or the third eye, among other things. Some ideas were to have the game be a passion play where you could go behind stage, where what seemed like fire wouldn’t burn you. Or others[check]. I eventually drifted more towards light being a good metaphor (though I later realized that focusing too much on that metaphor would fail to evoke the emotion I wanted.) </P>
	<P>At first I settled on and prototyped an idea using lasers and mirrors, because lasers are made of light and mirrors, self-reflection. There were conceptual metaphors but the experiene itself didn’t match [maybe images of the early prototype]. On top of that, the feeling of these was futuristic and like a mad scientists lab, not like a low tech religious thing. So I tried other ideas.</P>
	<P>I was eventually inspired by a game combining searching in light and shadow and puzzle boxes [img, maybe early image or final one. Hell why not it looks better]. This gave the feeling of searching in the dark, and was rustic and cathedraly. Also when I went to other players and asked them to playtest they liked it more.</P>
	<P>I then worked on a system of collecting reviews and collecting players. This was useful, but incomplete. Also annoying - people would get popups after they play. I’d take this and rework levels based on my own feelings and watching people play. There were things that I could see in live playtests that I didn’t in the tests. </P>
	<P>I’m happy with where this went, though looking forward I would lean away from The non-live ratings. They  could be useful, but it would be essentail to find the right metrics. Rating scales vary so widely for people based on their mood and biases and the interruption changed the experience. Maybe collecting data without interruption would be better recording playtime on puzzles and completion would be more meaningful. So live stuff was much clearer. On a similar note, maybe live stuff should have been a more important part of the ideation process. Rather than stay in my head, I could tell people what the feeling that I’m going for and ask them if they feel it.</P>
  </div>
);
