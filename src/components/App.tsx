import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { G1LightBorrower } from './G1LightBorrower';
import { G2HeartburnBoulevard } from './G2HeartburnBoulevard';
import { G3Pratfall } from './G3Pratfall';
import { T13DControllerConversion } from './T13DControllerConversion';
import { T2LevelEditor } from './T2LevelEditor';
import { T3HotsTracker } from './T3HotsTracker';
import { PortfolioPage } from './PortfolioPage';
import { Resume } from './Resume';
import { Contact } from './Contact';
import { ExampleComponent } from './ExampleComponent';
import { ExampleTwoDeepComponent } from './ExampleTwoDeepComponent';
import { SitemapLinkGenerator } from './SitemapLinkGenerator';
import { PageNotFound } from './PageNotFound';
import { Breadcrumbs } from './Breadcrumbs';

const rootStyle: CSS.Properties = {
 // fontFamily: 'helvetica, sans-serif',
 // fontWeight: 300,
 // fontSize: '16px',
 // letterSpacing: '0.025em',
 // boxSizing: 'border-box',
  //WebkitTextSizeAdjust: 'none',
  //textSizeAdjust: 'none',

  maxWidth: '1000px',
  margin: '0 auto',
  padding: '3vh 20px 12vh 20px',
};

const repoLinkStyle: CSS.Properties = {
  fontSize: '14px',
};

const breadcrumbsStyle: CSS.Properties = {
  margin: '3vh 0',
};

export const App: React.VFC = () => (
  <div style={rootStyle}>
    <h1 className="titleStyle">Jonah Pulsipher</h1>
	<div className="emailLink"><a className="emailLink" href="mailto:jonapulse@gmail.com"><u>jonapulse@gmail.com</u></a></div>
	<div className="siteLinks">
		<InteractiveLink to="/"> Home </InteractiveLink>
		|
		<InteractiveLink to="/PortfolioPage"> Portfolio </InteractiveLink>
		|
		<InteractiveLink to="/Resume"> Resume </InteractiveLink>
	</div>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/G1LightBorrower" component={G1LightBorrower} />
      <Route exact path="/G2HeartburnBoulevard" component={G2HeartburnBoulevard} />
	  <Route exact path="/G3Pratfall" component={G3Pratfall} />
	  <Route exact path="/T13DControllerConversion" component={T13DControllerConversion} />
      <Route exact path="/T2LevelEditor" component={T2LevelEditor} />
	  <Route exact path="/T3HotsTracker" component={T3HotsTracker} />
	  <Route exact path="/PortfolioPage" component={PortfolioPage} />
	  <Route exact path="/Resume" component={Resume} />
	  <Route exact path="/Contact" component={Contact} />
    </Switch>
  </div>
);