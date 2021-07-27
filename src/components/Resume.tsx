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

export const Resume: React.VFC = () => (
  <div className="resumePage">
	<a href="./art/Resume21-June-Programming.pdf">
		<img className="resumeImg" src="./art/resumeImg.jpg"></img>
	</a>
  </div>
);
