import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { HoverGif } from './HoverGif';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const PortfolioPage: React.VFC = () => (
  <div>
    <P>This is Portfolio.</P>
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
		<a href="https://jonapulse.itch.io/fully-solid-snake">
			<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="Fully Solid Snake"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/perpetual-robot-war">
			<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="Perpetual Robot War"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/bugfixers">
			<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="Bug Fixers"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/echo-tactics">
			<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="Echo Tactics"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/moon-mining-madness">
			<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="Moon Mining Madness"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/city-surgeon">
			<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="City Surgeon"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/sdmrpg">
			<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="Super Dramatic Flash RPG"> </HoverGif>
		</a>
	</table>
  </div>
);
