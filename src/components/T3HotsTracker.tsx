import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const T3HotsTracker: React.VFC = () => (
  <div>
	<p>HotsCoach is a support tool built in Python for players of one of the various competing MOBA games that were dominating gaming in 2016, that harvests player data from an online repository, predicts win outcomes based on the 	&ldquo;Champions&rdquo; selected by various players, and recommends team compositions. My work on the tool included...</p>
	<ul>
		<li>Collecting and parsing pages of data from a website</li>
		<li>Populating a user interface with that data, which allowed for display of profiles of up to five players, the champions they had played and their winrate with said champions, and the overall expected winrate of a selected team. Data was also incorporated to factor in champions who performed better side by side.</li>
		<li>Creating a system to recommend ideal additional champions given a selected team.</li>
	</ul>
	<p>A few more thoughts</p>
	<p>Around that time, my friends and I were regularly playing a moba but were faced with a terrible dilemma. On the one hand, each us had a character we loved to play but were disastrously unskilled at. On the other hand, we enjoyed winning a game every once in a while.</p>
	<p>There was <a href="https://hotslogs.com">website</a> containing high volumes of player data, collected by a custom plug-in players could install. The data included personal winrates separated by champion, global winrates for champions, as well as &ldquo;duo winrates&rdquo;: statistics on how champions' winrates differed from their global winrate when combined with other champions. </p>
	<p>My tool was built in Python using a few supplementary tools, including <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">Beautiful Soup</a> for webcrawling and <a href="https://kivy.org/#home">Kivy</a> for a simple, flexible interface. The entry point was a player ID, from which the system would collect their personal winrates, the winrates of friends with sufficient shared games, and then the general information from the website. The quality of the data varied. Popular champions had tens of thousands of games recorded, while less popular champions could have less than a thousand. This became problematic when considering the duo winrates. Occasionally duos of two unpopular champions might only be accounted for by ten games, which would lead to error margins so dramatically larger than those of the data they were being compared to that some duo data was useless. </p>
	<p>This was accounted for with a simple, requiring a set number of games to qualify data for consideration. The filter was applied both to the duo winrates as well players personal winrates, though it could be disabled for those who wanted to throw statistical integrity to the wind. Along with the collection and display of data, the system could be triggered to walk through all unselected champions and calculate the best choices for a given team of players. It was a simple, brute force method but more than fast enough for a manageable dataset intended for use in a low pressure environment.</p>
  </div>
);
