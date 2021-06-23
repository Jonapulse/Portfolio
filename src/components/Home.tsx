import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { HoverGif } from './HoverGif';
import './style/styles.css';

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
	<table className="gridContainer">
		<InteractiveLink to="/G1LightBorrower">
		  <HoverGif stillPath="./art/windowTransitionStill.jpg" gifPath="./art/windowTransitionGif.gif" title="Light Borrower"> </HoverGif>
		</InteractiveLink>
		<InteractiveLink to="/G2HeartburnBoulevard">
		  <HoverGif stillPath="./art/spStill.jpg" gifPath="./art/spGif.gif" title="Square Panda"> </HoverGif>
		</InteractiveLink>
		<InteractiveLink to="/G3Pratfall">
		  <HoverGif stillPath="./art/hbStill.jpg" gifPath="./art/hbGif.gif" title="Heartburn Boulevard"> </HoverGif>
		</InteractiveLink>
		<InteractiveLink to="/T13DControllerConversion">
		  <HoverGif stillPath="./art/3drayStill.jpg" gifPath="./art/3drayGif.gif" title="3D Raycast Controller"> </HoverGif>
		</InteractiveLink>
		<InteractiveLink to="/T2LevelEditor">
		  <HoverGif stillPath="./art/levelEditorStill.jpg" gifPath="./art/levelEditorGif.gif" title="Level Editor"> </HoverGif>
		</InteractiveLink>
		<InteractiveLink to="/T3HotsTracker">
		  <HoverGif stillPath="./art/hotsCoachStill.jpg" gifPath="./art/hotsCoachGif.gif" title="HotsCoach"> </HoverGif>
		</InteractiveLink>
	</table>
  </div>
);