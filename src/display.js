export default class Display{
  constructor(width, height){
    this._GAME_WIDTH = width;
    this._GAME_HEIGHT = height;

    this._canvas = document.getElementById("gameScreen");
    this._ctx = this._canvas.getContext("2d");
    this.clearScreen();
  }

  clearScreen(){
    this._ctx.clearRect(0, 0, this._GAME_WIDTH, this._GAME_HEIGHT);
  }

  render(color){
    // I researched if double-buffering the canvas is necessary, and I don't think it is
    // If I encounter screen flicker or other animation issues, then I will consider 
    // double-buffering
    this._ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    this._ctx.fillRect(0, 0, this._GAME_WIDTH, this._GAME_HEIGHT);
  }
}