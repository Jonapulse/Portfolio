import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { HoverGifArticle } from './HoverGifArticle';
import ReactGA from 'react-ga';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const LevelEditor: React.VFC = () => {
	ReactGA.pageview("LevelEditor");
	return (
		<div className="articleContent">
			<div className="articleIntro">
				<div className="articleTitle" style={{ position: 'relative' }}><p style={{ position: 'absolute', left: '30px', top: '30px', color: 'black' }}>Level Editor</p> <img src="./art/leBanner.jpg"></img></div>
				<div className="articlePictureCenter introOverride"><HoverGifArticle stillPath="./art/leLoadAndAdd.jpg" gifPath="./art/leLoadAndAdd.gif" subTitle="Loading and navigating levels"> </HoverGifArticle></div>
				<p>This level editor was developed to assist in the creation of a <a href="https://jonapulse.itch.io/pratfall">3D Unity puzzle game</a> which had the unique requirement of reusing level pieces from stage to stage. The final product included...</p>
				<ul>
					<li>Interface code shared among game objects used in the level editor that implemented the functions needed by the editor but allowed for class-specific tweaking.</li>
					<li>Functionality to help the designer, such as a system to switch levels that could either act immediately or perform the in-game visual transition, player spawning for testing, and 'safe save' functionality that walked the designer through levels before saving to avoid unintentional level overwriting and other mistakes.</li>
					<li>An XML parser for loading and saving stage data.</li>
				</ul>
				<div className="articlePictureCenter introOverride"><HoverGifArticle stillPath="./art/leLevelTransition.jpg" gifPath="./art/leLevelTransition.gif" subTitle="In-game transition"> </HoverGifArticle></div>
				<br />
				<div className="articlePictureCenter introOverride"><HoverGifArticle stillPath="./art/leLevelTween.jpg" gifPath="./art/leLevelTween.gif" subTitle="Observing the transition in-editor"> </HoverGifArticle></div>
			</div>
		</div>
	);
}
