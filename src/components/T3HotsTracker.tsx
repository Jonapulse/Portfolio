import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const T3HotsTracker: React.VFC = () => (
  <div>
    <P>This was a recommendation tool made around 2016 when I would sometimes play BlizzardÅfs Heroes of the Storm with friends. It crawled data from a host (hotslogs.com), combining general success, personal success, and team combination success. Had a way to remove data that had insufficient number of games played. </P>
	<P>Talk about the python tools you used. Beautiful soup for web crawling and another nice tool package for easy ui.</P>
	<P>Purpose - we liked playing heroes we were bad with, but we also liked winning, so this would let us take turns being the anchor on the team.</P>
	<P>And then a few screenshots of the tool - maybe just one big gif. Also explain the factors.</P>
	<P>What it let us do first of all was very simple, to take our individual winrates with a chosen character and average them.</P>
	<P>The next step was a bit more complicated and a bit more fraught. We had possible data for character synergies. Maybe show the screenshots and explain how you might solve this issue.</P>
	<P>1st part was discarding unreliable data.</P>
	<P>2nd part was conditional data. Individual winrate data...</P>
  </div>
);
