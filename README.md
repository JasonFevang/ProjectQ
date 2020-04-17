Project Q
	Jason and Kate's platformer video game, built over the quarantine period
	Started April 15th 2020
	
Jason
	Programming, soundtrack
	
Kate
	Game design, art
	
Programming
	Using Javascript, browser game for cross-platform compatibility
	Following tutorial DONE
	Learn how to draw the to webpage
		This resource goes over ALL the methods I can use to draw 
		Figure out the best way to draw Kate's graphics
		https://www.w3schools.com/tags/ref_canvas.asp
	Learn how to capture input 
		
	
Design
	Designed for one-handedness
	
	
First steps
	Jason
		Learn javascript (6 hours)
		Follow the youtube tutorial (10 hours)
	Kate
		Find a resource to create pixel art
		Create the pixel art
		Level design
		Character design
		Basic animation

git
google drive
	Art
	Documentation
	
Source code
  controller.js
    Handles user input
  display.js
    Handles drawing to the html canvas element
  game.js
    Handles all game logic
  main.js
    Handles starting the gameloop and all setup



class Player
  Location
  State
  alive
  ...
  draw(ctx)

In the gameloop when drawing, need to draw all the elements to the page
The player's location and parameters will be modified in the game logic
The player's draw function will be called 


color changing: Game.update()
calling the ctx.drawRect() with the color: Display.render()
Controller does nothing, there's no user input

All this is tied together in the gameloop in main.js

Who tells the display class what the color is? How do they tell it? Where is that stored?
  The main.js tells the display what the color is. Tells it using Display.render(color)
  The color isn't stored anywhere other than in Game, it is immediately drawn in Display.render(color)

