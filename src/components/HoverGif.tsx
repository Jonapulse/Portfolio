import * as React from 'react';
import * as CSS from 'csstype';
//import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';

let playingGif = false;
let _stillPath = "";
let _gifPath = "";

type HoverGifProps = {
    children: React.ReactNode;
	stillPath: string;
	gifPath: string;
	title: string;
};

export const HoverGif: React.VFC<HoverGifProps> = (props) => {
  _stillPath = props.stillPath;
  _gifPath = props.gifPath;

  let imgContainer = <img id="projectImg" src={_stillPath} alt="A test gif"></img>;

  function StartGif()
	{
		imgContainer.props.src=_gifPath;
	}

	function EndGif()
	{
		imgContainer.props.src=_stillPath;
	}

  return(
	<div onMouseEnter={StartGif} onMouseLeave={EndGif}>
		<div id="projectTitle">{props.title}</div>
		{imgContainer}
	</div>
  );
}




