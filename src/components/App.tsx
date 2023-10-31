import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { LightBorrower } from './LightBorrower';
import { SquarePanda } from './SquarePanda';
import { HeartburnBoulevard } from './HeartburnBoulevard';
import { ControllerConversion3D } from './ControllerConversion3D';
import { LevelEditor } from './LevelEditor';
import { HotsCoach } from './HotsCoach';
import { PortfolioPage } from './PortfolioPage';
import { Resume } from './Resume';
import { Contact } from './Contact';
import DarkTheme from './DarkTheme';
import ReactGA from 'react-ga';

const rootStyle: CSS.Properties = {

  maxWidth: '1000px',
  margin: '0 auto',
  padding: '3vh 20px 12vh 20px'
};

const repoLinkStyle: CSS.Properties = {
  fontSize: '14px',
};

const breadcrumbsStyle: CSS.Properties = {
  margin: '3vh 0',
};

ReactGA.initialize('G-SKKTXY1H9Z');

export const App: React.VFC = () => (
  <div style={rootStyle}>
    <h1 className="titleStyle">Jonah Pulsipher</h1>
	<div className="emailHeader">
		<span className="jobTitle">Game Developer ~</span>
		<a className="emailLink" href="mailto:jonapulse@gmail.com">jonapulse@gmail.com</a>
	</div>
	<div className="siteLinks">
		<InteractiveLink to="/"> Home </InteractiveLink>
		|
		<InteractiveLink to="/PortfolioPage"> Portfolio </InteractiveLink>
		|
		<a className="topLink" href="./art/resume21c.pdf">Resume </a>
	</div>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/LightBorrower" component={LightBorrower} />
      <Route exact path="/SquarePanda" component={SquarePanda} />
	  <Route exact path="/HeartburnBoulevard" component={HeartburnBoulevard} />
	  <Route exact path="/ControllerConversion3D" component={ControllerConversion3D} />
      <Route exact path="/LevelEditor" component={LevelEditor} />
	  <Route exact path="/HotsCoach" component={HotsCoach} />
	  <Route exact path="/PortfolioPage" component={PortfolioPage} />
	  <Route exact path="/Resume" component={Resume} />
	  <Route exact path="/Contact" component={Contact} />
    </Switch>

		<div className="footer"><div>© 2021 Jonah Pulsipher</div><div style={{ width: '20px'}}>~</div><DarkTheme /></div>
  </div>
);