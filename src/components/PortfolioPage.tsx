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
    <div className="portfolioTitle">Portfolio</div>
	<table className="gridContainer">
		<InteractiveLink to="/G1LightBorrower">
		  <HoverGif stillPath="./art/windowTransitionStill.jpg" gifPath="./art/windowTransitionGif.gif" title="Light Borrower"> </HoverGif>
		</InteractiveLink>
		<InteractiveLink to="/G3Pratfall">
		  <HoverGif stillPath="./art/hbStill.jpg" gifPath="./art/hbGif.gif" title="Heartburn Boulevard"> </HoverGif>
		</InteractiveLink>
		<a href="https://jonapulse.itch.io/pratfall">
			<HoverGif stillPath="./art/pratfallStill.jpg" gifPath="./art/pratfallGif.gif" title="Pratfall"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/mirror-horror-test">
			<HoverGif stillPath="./art/selfReflectionStill.jpg" gifPath="./art/selfReflectionGif.gif" title="Self-Reflection"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/fully-solid-snake">
			<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="Fully Solid Snake"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/perpetual-robot-war">
			<HoverGif stillPath="./art/prwStill.jpg" gifPath="./art/prwGif.gif" title="Perpetual Robot War"> </HoverGif>
		</a>
		<a href="https://xandrakeart.itch.io/bugfixers">
			<HoverGif stillPath="./art/bugFixersStill.jpg" gifPath="./art/bugFixersGif.gif" title="Bug Fixers"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/echo-tactics">
			<HoverGif stillPath="./art/echoStill.jpg" gifPath="./art/echoGif.gif" title="Echo Tactics"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/moon-mining-madness">
			<HoverGif stillPath="./art/moonStill.jpg" gifPath="./art/moonGif.gif" title="Moon Mining Madness"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/city-surgeon">
			<HoverGif stillPath="./art/cityStill.jpg" gifPath="./art/cityGif.gif" title="City Surgeon"> </HoverGif>
		</a>
		<a href="https://jonapulse.itch.io/sdmrpg">
			<HoverGif stillPath="./art/sdmrpgStill.jpg" gifPath="./art/sdmrpgGif.gif" title="Super Dramatic Flash RPG"> </HoverGif>
		</a>
	</table>
  </div>
);
