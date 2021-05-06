import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

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
    <P>This is the home view, see projects below:</P>
    <InteractiveLink to="/Project1">
      This is the page for project one
    </InteractiveLink>
    <br></br>
    <InteractiveLink to="/Project2">
      This is the page for project two
    </InteractiveLink>
  </div>
);
