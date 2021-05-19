import * as React from 'react';
import * as CSS from 'csstype';
//import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';

let playingGif = false;
let _stillPath = "";
let _gifPath = "";
const overlayPath = '/art/testScreen.png';

type HoverGifProps = {
    children: React.ReactNode;
	stillPath: string;
	gifPath: string;
	title: string;
};

export const HoverGif: React.VFC<HoverGifProps> = (props) => {
  _stillPath = props.stillPath;
  _gifPath = props.gifPath;

  const [isPlaying, setPlaying] = React.useState(true);

  return(
	<div onMouseEnter={() => setPlaying(true)} onMouseLeave={() => setPlaying(false)}>
		<div id="projectTitle">{props.title}</div>
		<img id="projectImg" src={isPlaying ? _gifPath : _stillPath} alt="A test gif"></img>
		<img id="overlay" src={overlayPath}></img>
	</div>
  );
}




