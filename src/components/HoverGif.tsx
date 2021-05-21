import * as React from 'react';
import * as CSS from 'csstype';
//import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import './style/hovergif.css';

let playingGif = false;
let _stillPath = "";
let _gifPath = "";

type HoverGifProps = {
    children: React.ReactNode;
	stillPath: string;
	gifPath: string;
	title: string;
};

const invisibleShieldStyle = {
	display: 'none',
}

const shieldStyle = 
{
	display: 'flex';
}

export const HoverGif: React.VFC<HoverGifProps> = (props) => {
  _stillPath = props.stillPath;
  _gifPath = props.gifPath;

  const [isPlaying, setPlaying] = React.useState(false);

  return(
	<div onMouseEnter={() => setPlaying(true)} onMouseLeave={() => setPlaying(false)}>
		<div className="shield" style={!isPlaying ? shieldStyle : invisibleShieldStyle}>{props.title}</div>
		<img id="projectImg" src={isPlaying ? _gifPath : _stillPath} alt="A test gif"></img>
	</div>
  );
}




