import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Home: React.VFC = () => (
  <div>
    <P>I'm a game designer and developer in Portland, OR. For serious. I'm not from some weird cult enclave like Utah.</P>
	<div>
		<InteractiveLink to="/G1LightBorrower">
		  Light Borrower
		</InteractiveLink>
		 | 
		<InteractiveLink to="/G2HeartburnBoulevard">
		 Heartburn Boulevard
		</InteractiveLink>
		 | 
		<InteractiveLink to="/G3Pratfall">
		 Pratfall
		</InteractiveLink>
	</div>
	<br/>
	<div>
		<InteractiveLink to="/T13DControllerConversion">
		 3D Controller Conversion
		</InteractiveLink>
		 | 
		<InteractiveLink to="/T2LevelEditor">
		 Level Editor
		</InteractiveLink>
		 | 
		<InteractiveLink to="/T3HotsTracker">
		 Hots Tracker
		</InteractiveLink>
	</div>
  </div>
);