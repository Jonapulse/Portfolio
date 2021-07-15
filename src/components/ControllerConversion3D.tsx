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
		<div className="articlePictureLeft"><HoverGifArticle stillPath="./art/turnCycleFull.jpg" gifPath="./art/turnCycleFull.gif" subTitle="Character rotation in a sandbox"> </HoverGifArticle></div>
		<p>I modified a 2D Raycasting Character Controller to function in 3D with a designer-controlled reference frame [wording.] Here’s how and why I did it.</p>
		</p>
	  <p className="articleParagraph">While developing an earlier, <a href="https://jonapulse.itch.io/heartburn-boulevard">2D platformer</a>, I had run into issues controlling the player avatar with Unity’s built-in physics. Summed up, the built-in physics offered a wide array of functionality that wasn’t necessary for the game, and sometimes simple tasks like fine-tuning movement or preventing wall friction from making jumping characters stick required complex solutions that sometimes broke. I ultimately replaced the character controller with an adapted <a className="emailLink" href="https://github.com/SebLague/2DPlatformer-Tutorial">3rd party 2D Controller</a> built around raycasting[], and was happy did. It was simpler to modify and didn’t share the problems I had encountered earlier. </p>
	  <p className="articleParagraph">Later, when I began work on a 3D Platforming project, early experiments confirmed that may face similar problems with built-in physics. Again, the content of this game was not focused on much of the functionality an “all-in-one” physics solution might provide, so I decided to adapt the Raycasting controller that had served me well in my previous project. It may not have been the perfect tool, but it was a familiar one with a track record and adapting it would not be a significant time investment.[image of the Cubelda thing] </p>
	  <p className="articleParagraph">The 2D Raycast system had [image of HB] functioned by firing a series of raycasts in the direction of the vertical and horizontal movement of the player. On hit, the player’s velocity would be reduced to no more than the raycast’s hit distance to deliver movement that would leave the player flush against collisions. For the special case of climbing or descending slopes, the system would use trigonometric functions to set proper X and Y velocity for smooth ascent and descent.</p>
	  <p className="articleParagraph">I encountered a few false starts when first transforming the system to 3D. My first conceptual approach was to use the same system but duplicate the X-axis raycasts and behavior along the Z axis. This worked most cases, but in a few edges the player would end up phasing through colliders.</p>
	  <p className="articleParagraph">Ultimately though, I arrived at a simpler concept that delivered a working solution. 3D movement could be reduced to 2D movement in the plane defined by vertical motion along the Y axis and horizontal motion along an axis defined by the direction of the player’s movement. Essentially, the player would be moving and calculating collision in a world defined by the 2D slice that this plane defines. Applying that naively would, however, treat the player as infinitely thin, but it could be supplemented with parallel planes proscribing the player’s intended width. </p>
	  <p className="articleParagraph">The game this system was developed for had an additional, unique requirement. Players would be able to arbitrarily rotate their avatar, shifting gravity as they did. Fortunately, this could be accomplished by changing the reference plane for player movement from one defined by the Y-axis and horizontal movement on the XZ-plane to one defined by the player’s local ‘up’ vector and the ‘horizontal’ movement vector orthogonal to that.</p>
	  <p className="articleParagraph">The resulting system has a number of shortfalls resulting from its simplicity. It cannot resolve collisions with moving objects. If the player is stationary when collisions are made, the system doesn’t even attempt to. And it does not simulate physics — your player has no mass. But it was made for a simple game that didn’t need any of that, yet which had complexities that were not served by the available tools.</p>
  </div>
);
