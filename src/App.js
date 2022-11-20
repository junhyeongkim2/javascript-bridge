const BridgeGame = require("./BridgeGame");

class App {
  play() {
    new BridgeGame();
  }
}

const app = new App();
app.play();

module.exports = App;
