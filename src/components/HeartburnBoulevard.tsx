import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import {HoverGifArticle } from './HoverGifArticle';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const HeartburnBoulevard: React.VFC = () => (
  <div className="articleContent">
	<div className="articleIntro">
		<p className="articleTitle" style={{position: 'relative'}}><p style={{position: 'absolute', left:'30px', top: '30px', color: 'black'}}>Heartburn Boulevard</p> <img src="./art/hbBanner.jpg"></img></p>
		<p>Heartburn Boulevard is a 2D puzzle platformer set in a cruel, dirty city inspired by film noir and the human gut biome. It explores the mechanic of allowing the player, a sentient E. Coli bacteria, to split into two avatars with mirrored movement. I developed it as a webgame in Unity. To make the project, I... </p> 
		<div className="articlePictureRight introOverride"><HoverGifArticle stillPath="./art/hbIntro.jpg" gifPath="./art/hbIntro.gif" subTitle="Midnight, in the bowels of the city"> </HoverGifArticle></div>
		<ul>
			<li>Architected and developed a tile-based 2d platformer where the players simultaneously control multiple entities.</li>
			<li>Designed, refined, and discarded scores of levels, shipping fifteen in the final project.</li>
			<li>Wrote a tragic story about Emily Coli, a bacterium who needs to get out of a dying city, and the forbidden love she has (with a white blood cell) that gets in her way.</li>
			<li>Playtested and refined platformer controls, replacing Unity’s built in system for a simpler, less buggy 2D Raycaster to improve player experience.</li>
		</ul>
	</div>
	<p className="articleSubheader">Jumping on heads, a retrospective</p>
	<p className="articleParagraph">Core gameplay centered around the ‘mitosis’ mechanic, where the the player splits into two clones. Their movement was mirrored and they could not pass through each other. This mechanic supported puzzles involving switches and strategic clone murder to free up energy for more clones, but one exciting use case of the mechanic came out of experimentation: jumping on your clone’s head.</p>
	<p className="articleParagraph">It allowed the player the excitement of turning their clone from an obstacle to a useful tool, and opened up a breadth of possibilities for puzzle design. However, early playtests revealed problems with the jump. Avatars had narrow boxes (especially compared to a normal platform one might jump to), and on top of that mirroring controls between avatars often led to confusion when adjusting movement mid-air to land the jump. While playtesting the first level implementing this mechanic, I observed a playtester intuit they needed to jump on their clone to progress, but give up in frustration after ten attempts. My intent for the game had been to make a puzzle-solving experience, not a dexterity-based precision platformer, and this challenge undermined that aim.</p>
	<p className="articleParagraph">So, how was I to fix this? Widening the avatar’s hit-box would remove the dexterity challenge, but affect movement in other areas and defy conventions for platformer avatars (for your own sake, do not imagine ‘wide Mario’.) The solution I arrived at was adding a ‘carry’ mechanic. An air-borne clone falling near the top of another would snap into a ‘being carried’ state. Their movement would be arrested, overridden by the clone beneath them. Because the range of the snap-to-carry was customizable, I could use that to mitigate the avatars’ narrow hitboxes, while also mitigating an issue where players had managed to land their clones on top of each other but accidentally walked off. This also introduced a new space of design to explore, using carry to expand the range of movement for clones previously limited by the mirrored movement restriction. That, and a few other fun, little things. [the tower clones].</p>
	<p className="articleParagraph">But further playtests exposed the need for more refinement. When their avatars where in the carry state, players would become accustomed to the bottom avatar’s movement. When they triggered a jump[need a gif of this. Might have to program it], more often than not the player continued inputting control as the bottom clone, and the top clone’s mirrored movement sent them flying in the opposite direction. This was a natural outgrowth of the game’s mechanics, but it left players annoyed. Again, players were solving the puzzle in their head, but failing an input challenge. Some playtesters got a laugh out of it, but more were frustrated.</p>
	<p className="articleParagraph">I decided to modify the behavior for jumping out of the carry state to better match how most players attempted to use it. Conceptually, the mechanic changed from ‘jumping off your clone’ to ‘your clone throws you’, with the thrown clone maintaining the momentum of one that had thrown it. A minority of players — those who had previously predicted that the top clone would move opposite and been proud of their success — were thrown off by this at first, but they learned quickly. Overall the experience was better. </p>
	<p className="articleParagraph">And that was the state in which I released Heartburn Boulevard. So it was written, so it was done. That’s all she wrote. The bell tolled for me.</p>
	<p className="articleParagraph">But… observing people play the released game, I noticed an annoying quirk in the throw mechanic. Players would often line up a throw before triggering it and stop to gather themselves. Then, if they pressed jump even a frame before moving, the top clone would be thrown with no momentum, flying straight up in the air and back down [show this]. Again (again), the game was punishing players with an input challenge, and this one often as precise as a few frames of input not perceivable by humans. If I could go back, I would implement a kind of ‘coyote time’ to the throw, a small period after the throw where movement from the bottom clone could be used to update the velocity of the top clone. Alas, I can’t.</p>
  </div>
);
