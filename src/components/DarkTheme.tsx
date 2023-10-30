import * as React from 'react';
import { useState } from 'react';

function DarkTheme() {

	const [isClicked, setIsClicked] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
		setIsPlaying(!isClicked);
	};

	return (
		<span className={'topLink clickable${isClicked ? "clicked" : ""}'} onClick={handleClick}>
			{isClicked ? 'Light Theme' : 'Dark Theme'}
			{isClicked && (
				<audio id="darktheme-music" autoPlay>
					<source src="./art/darkTheme.mp3"/>
				</audio>
				)}
		</span>
	);
}

export default DarkTheme;
