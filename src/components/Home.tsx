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
    <P>This is the home view, see projects below:</P>
    <InteractiveLink to="/G1LightBorrower">
      This is the page for Light Borrower
    </InteractiveLink>
    <br></br>
    <InteractiveLink to="/G2HeartburnBoulevard">
      This is the page for Heartburn Boulevard
    </InteractiveLink>
	<br></br>
	<InteractiveLink to="/G3Pratfall">
      This is the page for Pratfall
    </InteractiveLink>
	<br></br>
	<InteractiveLink to="/T13DControllerConversion">
      This is the page for 3D Controller Conversion
    </InteractiveLink>
	<br></br>
	<InteractiveLink to="/T2LevelEditor">
      This is the page for Level Editor
    </InteractiveLink>
	<br></br>
	<InteractiveLink to="/T3HotsTracker">
      This is the page for Hots Tracker
    </InteractiveLink>
  </div>
);