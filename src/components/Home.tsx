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
	<div className="aboutMeContainer">
		<img className="mePicture" src="./art/portrait.jpg"></img>
		<p className="aboutMe">Howdy. <br></br> I'm a game developer who's spent the last several years traveling the Pacific Northwest, working in industry and releasing my own projects. On the weekends I like to spend time gardening and cooking, both mature hobbies that my younger self would see as signs of my impending mortality. Still, garden tomatoes are nice.</p>
	</div>
	<div>
		
		<table className="gridContainer">
			<p className="projectLabels">GAMES</p>
			<InteractiveLink to="/LightBorrower">
			  <HoverGif stillPath="./art/windowTransitionStill.jpg" gifPath="./art/windowTransitionGif.gif" title="Light Borrower"> </HoverGif>
			</InteractiveLink>
			<InteractiveLink to="/SquarePanda">
			  <HoverGif stillPath="./art/spStill.jpg" gifPath="./art/spGif.gif" title="Square Panda"> </HoverGif>
			</InteractiveLink>
			<InteractiveLink to="/HeartburnBoulevard">
			  <HoverGif stillPath="./art/hbStill.jpg" gifPath="./art/hbGif.gif" title="Heartburn Boulevard"> </HoverGif>
			</InteractiveLink>
			<p className="projectLabels">TOOLS</p>
			<InteractiveLink to="/ControllerConversion3D">
			  <HoverGif stillPath="./art/3drayStill.jpg" gifPath="./art/3drayGif.gif" title="3D Raycast Controller"> </HoverGif>
			</InteractiveLink>
			<InteractiveLink to="/LevelEditor">
			  <HoverGif stillPath="./art/levelEditorStill.jpg" gifPath="./art/levelEditorGif.gif" title="Level Editor"> </HoverGif>
			</InteractiveLink>
			<InteractiveLink to="/HotsCoach">
			  <HoverGif stillPath="./art/hotsCoachStill.jpg" gifPath="./art/hotsCoachGif.gif" title="HotsCoach"> </HoverGif>
			</InteractiveLink>
		</table>
	</div>
  </div>
);