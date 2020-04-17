import Display from "/src/display.js"
import Game from "/src/game.js"

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game();
let display = new Display(GAME_WIDTH, GAME_HEIGHT);


console.log("start gameLoop");
let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  console.log(deltaTime);

  lastTime = timestamp;


  game.updateColor(deltaTime);

  display.render(game.color);
  // This gives the browser the gameLoop function to be called before every animation frame
  // Matches the refresh rate of the game to that of the browser
  // Runs at 60fps on my dev environment, I think it can vary though
  // So important to use absolute timing and not count frames so it runs the same on all browsers
  // If the game is in another unviewed tab, the frame rate significantly slows down. So I need 
  // to develop so that the game runs normally while at 2fps, then picks up properly at 60fps
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);