import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const T2LevelEditor: React.VFC = () => (
  <div>
    <P>I made this level editor with the hope of it being generalizable. The idea was to recycle components from stage to stage, primarily for visual reasons. And also itÅfs nice to have an editor rather than going through scenes or prefabs. (you wrote about this below too but donÅft really need to.</P>
	<P>It used these interfaces that controlled entering and leaving.</P>
	<P>It had this GUI that let me quickly switch between levels.</P>
	<P>It saved data in an xml file that it parsed and unparsed because I found that more convenient than built in unity alternative, which may have been building in scenes or perhaps prefabs.</P>
  </div>
);
