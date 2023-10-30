import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { HoverGif } from './HoverGif';
import ReactGA from 'react-ga';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const PortfolioPage: React.VFC = () => {
	ReactGA.pageview("Portfolio");
	return (
		<div className="portfolioContainer">
			<div className="portfolioTitle"><div className="portfolioTitleText">Portfolio</div></div>
			<table className="gridContainer portfolioSqueeze">
				<InteractiveLink to="/LightBorrower">
					<HoverGif stillPath="./art/windowTransitionStill.jpg" gifPath="./art/windowTransitionGif.gif" title="Light Borrower" subtitle="Game Lead - Unity"> </HoverGif>
				</InteractiveLink>
				<InteractiveLink to="/HeartburnBoulevard">
					<HoverGif stillPath="./art/hbStill.jpg" gifPath="./art/hbGif.gif" title="Heartburn Boulevard" subtitle="Platformer Physics - Web"> </HoverGif>
				</InteractiveLink>
				<a href="https://jonapulse.itch.io/pratfall">
					<HoverGif stillPath="./art/pratfallStill.jpg" gifPath="./art/pratfallGif.gif" title="Pratfall" subtitle="Blender Model and Rig - Web"> </HoverGif>
				</a>
				<a href="https://jonapulse.itch.io/mirror-horror-test">
					<HoverGif stillPath="./art/selfReflectionStill.jpg" gifPath="./art/selfReflectionGif.gif" title="Self-Reflection" subtitle="Horror AI - Unity"> </HoverGif>
				</a>
				<a href="https://jonapulse.itch.io/fully-solid-snake">
					<HoverGif stillPath="./art/fssStill.jpg" gifPath="./art/fssGif.gif" title="Fully Solid Snake" subtitle="Stealth system (parody) - Unity"> </HoverGif>
				</a>
				<a href="https://jonapulse.itch.io/perpetual-robot-war">
					<HoverGif stillPath="./art/prwStill.jpg" gifPath="./art/prwGif.gif" title="Perpetual Robot War" subtitle="AI Development - Flash"> </HoverGif>
				</a>
				<a href="https://xandrakeart.itch.io/bugfixers">
					<HoverGif stillPath="./art/bugFixersStill.jpg" gifPath="./art/bugFixersGif.gif" title="Bug Fixers" subtitle="Multiplayer - Unity"> </HoverGif>
				</a>
				<a href="https://jonapulse.itch.io/echo-tactics">
					<HoverGif stillPath="./art/echoStill.jpg" gifPath="./art/echoGif.gif" title="Echo Tactics" subtitle="Grid Path-finding - Unity"> </HoverGif>
				</a>
				<a href="https://jonapulse.itch.io/moon-mining-madness">
					<HoverGif stillPath="./art/moonStill.jpg" gifPath="./art/moonGif.gif" title="Moon Mining Madness" subtitle="Multiplayer - Unity"> </HoverGif>
				</a>
				<a href="https://jonapulse.itch.io/city-surgeon">
					<HoverGif stillPath="./art/cityStill.jpg" gifPath="./art/cityGif.gif" title="City Surgeon" subtitle="Physics - Unity"> </HoverGif>
				</a>
				<a href="https://jonapulse.itch.io/sdmrpg">
					<HoverGif stillPath="./art/sdmrpgStill.jpg" gifPath="./art/sdmrpgGif.gif" title="Super Dramatic Flash RPG" subtitle="Physics - Flash"> </HoverGif>
				</a>
			</table>
		</div>
	);
}
