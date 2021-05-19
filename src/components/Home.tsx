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

export const Home: React.VFC = () => (
  <div>
    <P>I'm a game designer and developer in Portland, OR. For serious. I'm not from some weird cult enclave like Utah.</P>
	<img src="./art/testGifStill.png"/>
	<div>
		<InteractiveLink to="/G1LightBorrower">
		  <HoverGif stillPath="./art/testGifStill.png" gifPath="./art/testgif.gif" title="TestTitle1"> </HoverGif>
		</InteractiveLink>
		 | 
		<InteractiveLink to="/G2HeartburnBoulevard">
		  <HoverGif stillPath="/art/testGifStill.png" gifPath="/art/testgif.gif" title="TestTitle2"> </HoverGif>
		</InteractiveLink>
		 | 
		<InteractiveLink to="/G3Pratfall">
		  <HoverGif stillPath="/art/testGifStill.png" gifPath="/art/testgif.gif" title="TestTitle3"> </HoverGif>Pratfall
		</InteractiveLink>
	</div>
	<br/>
	<div>
		<InteractiveLink to="/T13DControllerConversion">
		  <HoverGif stillPath="/art/testGifStill.png" gifPath="/art/testgif.gif" title="TestTitle4"> </HoverGif>
		</InteractiveLink>
		 | 
		<InteractiveLink to="/T2LevelEditor">
		  <HoverGif stillPath="/art/testGifStill.png" gifPath="/art/testgif.gif" title="TestTitle5"> </HoverGif>
		</InteractiveLink>
		 | 
		<InteractiveLink to="/T3HotsTracker">
		  <HoverGif stillPath="/art/testGifStill.png" gifPath="/art/testgif.gif" title="TestTitle6"> </HoverGif>
		</InteractiveLink>
	</div>
  </div>
);