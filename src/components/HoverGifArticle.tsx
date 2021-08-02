import * as React from 'react';
import * as CSS from 'csstype';
//import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import './style/styles.css';

let playingGif = false;
let _stillPath = "";
let _gifPath = "";

type HoverGifArticleProps = {
    children: React.ReactNode;
	stillPath: string;
	gifPath: string;
	subTitle: string;
};

export const HoverGifArticle: React.VFC<HoverGifArticleProps> = (props) => {
  _stillPath = props.stillPath;
  _gifPath = props.gifPath;

  const [isPlaying, setPlaying] = React.useState(false);

  return(
	<div className="articlePicture" onMouseEnter={() => setPlaying(true)} onMouseLeave={() => setPlaying(false)}>
		<img id="projectImg" src={isPlaying ? _gifPath : _stillPath} alt="A test gif"></img>
		<div className="shieldArticle"><img src="./art/gifWatermark.png"></img></div>
		<div className="subTitle">{props.subTitle}</div>
	</div>
  );
}




