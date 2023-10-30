import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { HoverGif } from './HoverGif';
import './style/styles.css';
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


export const Home: React.VFC = () => {
	ReactGA.pageview("Home");
	return (
		<div className="homeContainer">
			<div className="aboutMeContainer">
				<img className="mePicture" src="./art/portrait.jpg"></img>
				<p className="aboutMe">I'm a game developer with ten years of experience releasing projects independently and within the industry. Let's make something. Let's make it well.</p>
			</div>
			<div>
				<div className="highlightHeader">Here are some highlights from my portfolio...</div>
				<table className="gridContainer">
					<InteractiveLink to="/LightBorrower">
						<HoverGif stillPath="./art/windowTransitionStill.jpg" gifPath="./art/windowTransitionGif.gif" title="Light Borrower" subtitle="Game Lead - Unity"> </HoverGif>
					</InteractiveLink>
					<InteractiveLink to="/SquarePanda">
						<HoverGif stillPath="./art/spStill.jpg" gifPath="./art/spGif.gif" title="Square Panda" subtitle="Developer - Mobile"> </HoverGif>
					</InteractiveLink>
					<InteractiveLink to="/HeartburnBoulevard">
						<HoverGif stillPath="./art/hbStill.jpg" gifPath="./art/hbGif.gif" title="Heartburn Boulevard" subtitle="Platformer Physics - Web"> </HoverGif>
					</InteractiveLink>
				</table>
				<div className="highlightHeader">...some tools...</div>
				<table className="gridContainer">
					<InteractiveLink to="/ControllerConversion3D">
						<HoverGif stillPath="./art/3drayStill.jpg" gifPath="./art/3drayGif.gif" title="3D Raycast Controller" subtitle="Physics - Unity"> </HoverGif>
					</InteractiveLink>
					<InteractiveLink to="/LevelEditor">
						<HoverGif stillPath="./art/levelEditorStill.jpg" gifPath="./art/levelEditorGif.gif" title="Level Editor" subtitle="Designer Tools - Unity"> </HoverGif>
					</InteractiveLink>
					<InteractiveLink to="/HotsCoach">
						<HoverGif stillPath="./art/hotsCoachStill.jpg" gifPath="./art/hotsCoachGif.gif" title="HotsCoach" subtitle="Data Processing - Python"> </HoverGif>
					</InteractiveLink>
				</table>
				<div className="highlightHeader">and <a className="topLink" href="/PortfolioPage">the rest</a>.</div>
			</div>
		</div>
	);
}