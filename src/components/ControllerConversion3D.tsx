import * as React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';
import { HoverGifArticle } from './HoverGifArticle';


const pageLinkContainerStyle: CSS.Properties = {
  display: 'block',
  margin: '1vh 0',
};

export const ControllerConversion3D: React.VFC = () => (
  <div className="articleContent">
	  <p className="articleTitle">3D Character Controller</p>
	  <p className="articleIntro">
		<p>I adapted a 2D raycasting-based character controller to function in 3D as a replacement for the built-in physics provided within Unity. The resulting tool was a simplified character controller that reliably handled movement and collision, while also allowing the developer to set gravity to arbitrary values during runtime. Below, I write about how and why I did it.</p>
		<div className="articlePictureCenter"><HoverGifArticle stillPath="./art/turnCycleFull.jpg" gifPath="./art/turnCycleFull.gif" subTitle="Changing gravity in a test environment"> </HoverGifArticle></div>
	  </p>
	  <p className="articleHeader">How and why</p>
	  <p className="articleParagraph">While developing a <a className="emailLink" href="https://www.jonahpulsipher.com/HeartburnBoulevard">2D platformer</a>, I had run into issues controlling the player avatar with Unity’s built-in physics. Summed up, Unity's physics solution offered a wide array of functionality that wasn’t necessary for the game I was making, and sometimes simple tasks like fine-tuned movement or jumping against walls (the player would stick) required complex work-arounds to function the way that I wanted them to. Ultimately, I replaced the character controller with an adapted <a className="emailLink" href="https://github.com/SebLague/2DPlatformer-Tutorial">3rd party 2D controller</a> built around raycasting, and the result was game-changing. It was simpler to implement, simpler to modify, and avoided the problems that I had encountered earlier. </p>
	  <p className="articleParagraph">Later, when I began work on a 3D Platforming project, early experiments confirmed that may face similar problems with built-in physics. Again, the content of this game was not focused on much of the functionality an “all-in-one” physics solution might provide, so I decided to adapt the Raycasting controller that had served me well in my previous project. It may not have been the perfect tool, but it was a familiar one with a track record and adapting it would not be a significant time investment.[image of the Cubelda thing] </p>
	  <p className="articleParagraph">The 2D Raycast system had [image of HB] functioned by firing a series of raycasts in the direction of the vertical and horizontal movement of the player. On hit, the player’s velocity would be reduced to no more than the raycast’s hit distance to deliver movement that would leave the player flush against collisions. For the special case of climbing or descending slopes, the system would use trigonometric functions to set proper X and Y velocity for smooth ascent and descent.</p>
	  <p className="articleParagraph">I encountered a few false starts when first transforming the system to 3D. My first conceptual approach was to use the same system but duplicate the X-axis raycasts and behavior along the Z axis. This worked most cases, but in a few edges the player would end up phasing through colliders.</p>
	  <p className="articleParagraph">Ultimately though, I arrived at a simpler concept that delivered a working solution. 3D movement could be reduced to 2D movement in the plane defined by vertical motion along the Y axis and horizontal motion along an axis defined by the direction of the player’s movement. Essentially, the player would be moving and calculating collision in a world defined by the 2D slice that this plane defines. Applying that naively would, however, treat the player as infinitely thin, but it could be supplemented with parallel planes proscribing the player’s intended width. </p>
	  <p className="articleParagraph">The game this system was developed for had an additional, unique requirement. Players would be able to arbitrarily rotate their avatar, shifting gravity as they did. Fortunately, this could be accomplished by changing the reference plane for player movement from one defined by the Y-axis and horizontal movement on the XZ-plane to one defined by the player’s local ‘up’ vector and the ‘horizontal’ movement vector orthogonal to that.</p>
	  <p className="articleParagraph">The resulting system has a number of shortfalls resulting from its simplicity. It cannot resolve collisions with moving objects. If the player is stationary when collisions are made, the system doesn’t even attempt to. And it does not simulate physics — your player has no mass. But it was made for a simple game that didn’t need any of that, yet which had complexities that were not served by the available tools.</p>
  </div>
);
