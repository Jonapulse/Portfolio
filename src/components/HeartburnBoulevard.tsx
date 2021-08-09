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
		<div className="articleTitle" style={{position: 'relative'}}><p style={{position: 'absolute', left:'30px', top: '30px', color: 'black'}}>Heartburn Boulevard</p> <img src="./art/hbBanner.jpg"></img></div>
		<p>Heartburn Boulevard is a 2D puzzle platformer developed in Unity, set in a rundown city inspired by film noir and the human gut biome. It is built around the mechanic of allowing the player to split into two avatars with mirrored movement. To make the project, I... </p> 
		<div className="articlePictureRight introOverride"><HoverGifArticle stillPath="./art/hbIntro.jpg" gifPath="./art/hbIntro.gif" subTitle="Midnight, in the bowels of the city"> </HoverGifArticle></div>
		<ul>
			<li>Architected and developed a tile-based 2d platformer where the players simultaneously control multiple entities.</li>
			<li>Designed, refined, and discarded scores of levels, shipping fifteen in the final project.</li>
			<li>Delivered a story about Emily Coli, a bacterium who needs to get out of a dying city, and the forbidden love she has with the white blood cell who just can't let her go.</li>
			<li>Playtested and refined platformer controls, replacing Unity’s built-in system for a simpler, less buggy 2D Raycaster to improve player experience.</li>
		</ul>
	</div>
	<p className="articleHeader">Jumping on heads, a retrospective</p>
	<div className="articlePictureRight"><HoverGifArticle stillPath="./art/hbSplitDoor.jpg" gifPath="./art/hbSplitDoor.gif" subTitle="Teamwork with yourself"> </HoverGifArticle></div>
	<p className="articleParagraph">Core gameplay centered around the ‘mitosis’ mechanic, where the the player splits into two clones. Their movement was mirrored and they could not pass through each other. This mechanic supported puzzles involving flipping faraway switches and sacrificing clones to free up more mitosis energy, but one exciting use case of the mechanic came out of experimentation: one clone using the other as a platform. This mechanic allowed the player the excitement of transforming their clone from an obstacle into a useful tool, and opened up a wide breadth of possibilities for puzzle design.</p>
	<p className="articleParagraph">However, early playtests revealed problems with the jump. Avatars had narrow hit-boxes (especially compared to a normal platform one might jump to), and, on top of that, mirroring controls between avatars often led to confusion when adjusting movement to land the jump. While playtesting the first level that used this mechanic, I observed a playtester intuit they needed to jump on their clone to progress, but give up in frustration after ten attempts. My intent for the game had been to make a puzzle-solving experience, not a dexterity-based precision platformer, and this challenge undermined that aim.</p>
	<div className="articlePictureCenter"><HoverGifArticle stillPath="./art/hbSadJump.jpg" gifPath="./art/hbSadJump.gif" subTitle="Unwanted precision platforming"> </HoverGifArticle></div>
	<p className="articleSubheader">More puzzle, less precision</p>
	<p className="articleParagraph">So, how was I to fix this? Widening the avatar’s hit-box would remove the dexterity challenge, but alter movement in other areas and defy conventions for platformer avatars in an uncomfortable way (I'm not responsible for any trauma resulting if the reader imagines ‘wide Mario’.) The solution I arrived at was adding a ‘carry’ mechanic. An air-borne clone falling near the top of another would snap into a ‘being carried’ state. Their movement would be arrested, overridden by the movement of the clone beneath them. Because the range of the snap-to-carry was customizable, I could mitigate the trouble with avatars’ narrow hitboxes, while also correcting an issue where players had managed to land their clones on top of each other but then accidentally walked off. This also introduced a new space of design to explore, using carry to expand the range of movement for clones previously limited by the mirrored movement restriction. That, and a few other fun, little things.</p>
	<div className="articlePictureCenter"><HoverGifArticle stillPath="./art/hbTower.jpg" gifPath="./art/hbTower.gif" subTitle="A few other fun things"> </HoverGifArticle></div>
	<p className="articleSubheader">Consequences of the carry mechanic</p>
	<div className="articlePictureRight"><HoverGifArticle stillPath="./art/hbThrowBack.jpg" gifPath="./art/hbThrowBack.gif" subTitle="25% of playtester swore under their breath"> </HoverGifArticle></div>
	<p className="articleParagraph">Further playtests exposed the need for more refinement. When players had avatars were in the carry state, they would become accustomed to the bottom avatar’s movement. As they triggered a jump, more often than not the player continued inputting movement as the bottom clone, and the top clone’s mirrored movement sent them flying off in the opposite direction. This was a natural outgrowth of the game’s mechanics, but it left players annoyed. Again, players were solving the puzzle in their head, but failing an input challenge. Some playtesters got a laugh out of it, but more were frustrated.</p>
	<p className="articleParagraph">Again, my decision was guided by the desire to push gameplay towards mental puzzle-solving and away from physical dexterity challenges. Jumping out of the carry state was modified to better match how the majority of players attempted to use it the first time they tried. Conceptually, the mechanic changed from ‘jumping off your clone’ to ‘your clone throws you’, with the thrown clone maintaining the momentum of one that had thrown it. A minority of players — those who had previously predicted that the top clone would jump in the opposite direction and been proud of their success — were thrown off by this at first, but they learned quickly. Overall the experience was better. </p>
	<p className="articleParagraph">And that was the state in which I released Heartburn Boulevard. So it was written, so it was done. That’s all she wrote. The bell tolled for me.</p>
	<p className="articleSubheader">Doubts and reflections</p>
		<div className="articlePictureRight"><HoverGifArticle stillPath="./art/hbThrowUp.jpg" gifPath="./art/hbThrowUp.gif" subTitle="That feeling when you press move one frame before jump"> </HoverGifArticle></div>

	<p className="articleParagraph">But… observing people play the released game, I noticed an annoying quirk in the throw mechanic. Players would often line up a throw before triggering it and stop to gather themselves. Then, if they pressed jump even a frame before moving, the top clone would be thrown with no momentum, flying straight up in the air and back down. Again (and again), the game was punishing players with an input challenge, this one often as precise as a few frames of input, imperceivable for most humans.</p> 
	<p className="articleParagraph">If I could go back, I would add a kind of ‘coyote time’ to the throw, a small period after the throw where movement from the bottom clone could still update the velocity of the top clone. Alas, the game is released. I can’t. Just another one of my regrets, floating down the gutter in this damned, dirty city.</p>
	<div className="articlePictureCenter"><HoverGifArticle stillPath="./art/hbTalk.jpg" gifPath="./art/hbTalk.gif" subTitle="Here's lookin' at you, kid"> </HoverGifArticle></div>
  </div>
);
