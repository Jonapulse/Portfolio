import * as React from 'react';
import * as CSS from 'csstype';

type YoutubeEmbedProps = {
	width: string;
	height: string;
	link: string;
};

export const YoutubeEmbed: React.VFC<YoutubeEmbedProps> = (props) => {
  return(
	 <div className="video-responsive">
		<iframe
		  width={props.width}
		  height={props.height}
		  src={props.link}
		  frameBorder="0"
		  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		  allowFullScreen
		  title="Embedded youtube"
		/>
  </div>
  );
}
