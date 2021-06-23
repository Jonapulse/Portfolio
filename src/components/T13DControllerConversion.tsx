import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const T13DControllerConversion: React.VFC = () => (
  <div>
	<P>So�c we open with a session of what I made and what I used it for.</P>
	<P>I�fve thought about this in my head forever! I adapted a tool because A) it had worked really well for a 2d game and B) Unity�fs built in tools often didn�ft work well for stuff outside their purview, which seemed to be 3d person shooters (but in this specific part don�ft say it was Unity.) Link to Heartburn Boulevard.</P>
	<P>Brief, vague description of some false starts.</P>
	<P>Conceptually we visualize it as a special case 2d grid.</P>
	<P>Results in interesting issues like having to transform math used to calculate slope</P>
	<P>And then given the unique constraints of the gravity shiftying and weird level design I modified it to be transform relative for the character. It allowed for cool gravity shifting.</P>
  </div>
);
