import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { HoverGifArticle } from './HoverGifArticle';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const HotsCoach: React.VFC = () => {
	return (
		<div>
			<div className="articleIntro">
				<div className="articleTitle" style={{ position: 'relative' }}><p style={{ position: 'absolute', left: '30px', top: '30px', color: 'black' }}>Hots Coach</p> <img src="./art/hcBanner.jpg"></img></div>
				<p>HotsCoach is a support tool built in Python for use by players of one of the MOBA games that were dominating gaming in 2016.  It harvests player data from an online repository, predicts win outcomes based on the 	&ldquo;Champions&rdquo; selected by various players, and recommends team compositions. My work on the tool included...</p>
				<ul>
					<li>Writing a web-crawerl to collect and parsing pages of data from a website</li>
					<li>Populating a user interface with that data, which allowed for display of profiles of up to five players, the champions they had played along with their winrate with said champions, and the overall expected winrate of a selected team. Data was also incorporated to factor in champions who performed better side by side.</li>
					<li>Creating a system to recommend ideal additional champions given a selected team.</li>
				</ul>
				<div className="articlePictureCenter introOverride"><HoverGifArticle stillPath="./art/hcSelect.jpg" gifPath="./art/hcSelect.gif" subTitle="Forming a team"> </HoverGifArticle></div>
			</div>
			<p className="articleHeader">What I made, and a bit about why</p>
			<p className="articleParagraph">While playing a particula MOBA, my friends and I were faced with a terrible dilemma. Each of us had a character we loved to play but were disastrously unskilled at, and yet we enjoyed winning a game every once in a while.</p>
			<p className="articleParagraph">My solution was to build a tool to collect player data and recommend ideal champion selections. Using Python and sourcing data from <a className="emailLink" href="https://hotslogs.com">an online, player-run repository</a>, the tool would crawl through the site (using the <a className="emailLink" href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">Beautiful Soup python library</a>). Starting from a player ID, the system would collect their personal winrates, the winrates of friends with sufficient shared games, and then the general champion winrate information, including "duo winrates" or data on relative success when certain champions played together.</p>
			<p className="articleSubheader">Refining the data</p>
			<p className="articleParagraph">The quality of the data varied. Popular champions had tens of thousands of games recorded, while less popular champions could have less than a thousand. This became especially problematic when considering the duo winrates. Occasionally duos of two unpopular champions might be only accounted for by ten games, which would lead to error margins so dramatically larger than those of the data they were being compared with that some duo data was useless. </p>
			<p className="articleParagraph">The fix was to filter out data with insufficient values included, substituting default data where required by the system (the default duo winrate assumed two champions had no effect on eachother). The filter was also applied to champions for which players had very few games. </p>
			<div className="articlePictureRight"><HoverGifArticle stillPath="./art/hcOptimize.jpg" gifPath="./art/hcOptimize.gif" subTitle="Suggesting a team composition"> </HoverGifArticle></div>
			<p className="articleParagraph">Finally, the system could be used to suggest a team composition. Starting from a set of players and any champions a team wanted to lock in, the system would walk through all combinations to calculate the best choices for a given team of players. It was a simple, brute force method, but more than fast enough for a manageable dataset intended to be used in a low pressure environment.</p>
			<p className="articleParagraph">We still lost regularly, but slightly less regularly.</p>
		</div>
	);
}
