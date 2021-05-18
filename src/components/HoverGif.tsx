import * as React from 'react';
import * as CSS from 'csstype';
//import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';

const playingGif = false;
const _stillPath = "";
const _gifPath = "";

type HoverGifProps = {
    children: React.ReactNode;
	stillPath: string;
	gifPath: string;
	title: string;
};

export const HoverGif: React.VFC<HoverGifProps> = (props) => (
  <img src={props.gifPath} alt="A test gif"></img>
);
