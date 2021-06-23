import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const G2HeartburnBoulevard: React.VFC = () => (
  <div>
	<P>Square Panda is a Sunnyvale-based Educational Games startup for which I developed software in 2017 and 2018. I joined the team a few months before the initial release of 'Squareland', a hub world players could explore and customize that was used to navigate between learning minigames.</P>
	<P>While there, I...</P>
	<ul>
		<li>From day one, built prototypes for minigames and developed them into their final release versions.</li>
		<li>Worked with a multinational team to integrate art and production code, helping to maintain consistency across the work of multiple teams.</li>
		<li>Worked with the design lead to brainstorm, develop, and pitch new concepts for minigames.</li>
		<li>Observed live playtests and derived recommendations based on them.</li>
		<img id='concept_art' src='/art/testGifStill.png'/>
		<li>Source Control, agile development, stand-ups [I could make this one a little funnier]</li>
	</ul>
  </div>
);
