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
	<p>Square Panda is a Sunnyvale-based Educational Games startup for which I developed software in 2017 and 2018. I joined the team a few months before the initial release of 'Squareland', a hub world players could explore and customize that was used to navigate between learning minigames. While there, I...</p>
	<ul>
		<li>From day one, built prototypes for minigames and developed them into their final release versions.</li>
		<li>Worked with a multinational team to integrate art and production code, helping to maintain consistency across the work of multiple departments.</li>
		<li>Collaborated with the design lead to brainstorm, develop, and pitch new concepts for minigames.</li>
		<li>Observed live playtests and derived recommendations based on them.</li>
		<li>Participated in Agile development, evaluating and assigning tasks for sprints, and reporting in daily stand-ups.</li>
		<li>Prepared, compiled, and deployed new iOS and Android builds for development and release branches.</li>
	</ul>
  </div>
);
