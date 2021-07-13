import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const LevelEditor: React.VFC = () => (
  <div>
	  <p>This level editor was developed to assist in the creation of a <a href="https://jonapulse.itch.io/pratfall">3D Unity puzzle game</a> which had the unique requirement of reusing level pieces from stage to stage. The final product includedÅc</p>
	  <ul>
		<li>Interface code shared among game objects used in the level editor that implemented the functions needed by the editor but allowed for custom tweaking.</li>
		<li>Functionality to help the designer, such as level-switching that could be set to immediate or to behave visually as it would in-game, player spawning for testing, and a Åesafe saveÅf functionality that walked the designer through levels before confirming to unintentional level overwriting and other mistakes.</li>
		<li>An XML parser for loading and saving stage data</li>
	  </ul>
  </div>
);
