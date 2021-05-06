import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { ExampleComponent } from './ExampleComponent';
import { ExampleTwoDeepComponent } from './ExampleTwoDeepComponent';
import { SitemapLinkGenerator } from './SitemapLinkGenerator';
import { PageNotFound } from './PageNotFound';
import { Breadcrumbs } from './Breadcrumbs';

const rootStyle: CSS.Properties = {
  fontFamily: 'helvetica, sans-serif',
  fontWeight: 300,
  fontSize: '16px',
  letterSpacing: '0.025em',
  boxSizing: 'border-box',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',

  maxWidth: '540px',
  margin: '0 auto',
  padding: '3vh 20px 12vh 20px',
};

const titleStyle: CSS.Properties = {
  fontSize: '20px',
  marginBottom: '0.5vh',
};

const repoLinkStyle: CSS.Properties = {
  fontSize: '14px',
};

const breadcrumbsStyle: CSS.Properties = {
  margin: '3vh 0',
};

export const App: React.VFC = () => (
  <div style={rootStyle}>
    <h1 style={titleStyle}>Jonah's Really Cool Portfolio</h1>
    <InteractiveLink
      href="https://github.com/rafgraph/spa-github-pages"
      style={repoLinkStyle}
    >
      https://github.com/rafgraph/spa-github-pages
    </InteractiveLink>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project1" component={Project1} />
      <Route exact path="/project2" component={Project2} />
    </Switch>
  </div>
);
