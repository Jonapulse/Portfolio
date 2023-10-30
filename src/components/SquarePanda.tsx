import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { YoutubeEmbed } from "./YoutubeEmbed";
import ReactGA from 'react-ga';


const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const SquarePanda: React.VFC = () => 
	{
		ReactGA.pageview("SquarePanda");
		return(<div className = "articleContent" >
					<div className="articleIntro">
						<div className="articleTitle" style={{ position: 'relative' }}><p style={{ position: 'absolute', left: '30px', top: '30px', color: 'black' }}>Square Panda</p> <img src="./art/squareBanner.jpg"></img></div>
						<p>Square Panda is a Sunnyvale-based Educational Games startup for which I developed software in 2018 and 2019. I was brought on to help complete the initial release of 'Squareland', a customizable hub world that players used to travel between learning minigames. While there, I...</p>
						<ul>
							<li>From day one, built prototypes for minigames, later developing them into their final release versions.</li>
							<li>Worked with a multinational team to integrate art and production code, helping to maintain consistency across the work of multiple departments.</li>
							<li>Collaborated with the design lead to brainstorm, develop, and pitch new concepts for minigames.</li>
							<li>Observed live playtests and derived recommendations from them.</li>
							<li>Participated in Agile development, evaluating and assigning tasks for sprints, and reporting in daily stand-ups.</li>
							<li>Prepared, compiled, and deployed new iOS and Android builds for development and release branches.</li>
							<span><YoutubeEmbed link="https://www.youtube.com/embed/LXM197U5qDQ?start=18" height="315" width="560" /></span>
						</ul>
					</div>
				</div >
			);
	}

  
