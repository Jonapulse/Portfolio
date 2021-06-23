import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const G3Pratfall: React.VFC = () => (
  <div>
    <P>Heartburn Boulevard is a 2D puzzle platformer set in a cruel, dirty world inspired by film noir and the human gut biome. It explores the mechanic of allowing the player, a sentient E. Coli bacteria, to split into two avatars with mirrored movement. I developed it as a short (~30 minutes) webgame in Unity.</P>
	<P>To make the project, IÅc</P>
	<ul>
		<li>Architected and developed a tile-based 2d platformer where the player could simultaneously control multiple entities.</li>
		<li>Designed, refined, and discarded scores of levels, shipping fifteen in the final project.</li>
		<li>Wrote a tragic story about Emily Coli, a bacterium who needs to get out of a dying city, and the forbidden love she has (with a white blood cell) that gets in her way.</li>
		<li>Playtested and refined platformer controls, swapping out UnityÅfs built in system for a simpler, less buggy 2D Raycaster to improve player experience.</li>
		<img id='concept_art' src='/art/testGifStill.png'/>
		<li>For what it's worth I drew the art.</li>
	</ul>
	<br />
	<h1>Jumping on heads, a retrospective: </h1>
	<P>This was built around a novel platformer mechanic of splitting yourself and I wanted to talk about how I explored ways to make that fun and a good puzzle. Oh wait but specifically the throwing.</P>
	<P>Alternatively focus just on carrying and throwing. Start with the non carry method, talk about frustration w/ that and the solution, but the new problem that arose. Also add that maybe you should have included a Åecoyote timeÅf mechanic to address the quick input issue.</P>
  </div>
);
