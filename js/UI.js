import ThreeasyComponent from "threeasy/component";

export default class Cubes extends ThreeasyComponent {
	constructor(app) {
		super(app);
		this.playerTrackerCreate();
		this.endGameCreate();
		this.update();
	}
	draw() {
		this.gameResultEl.innerHTML = `Draw!`;
		this.showEndGame();
	}
	win(player) {
		this.gameResultEl.innerHTML = `${this.app.gameOver} wins!`;
		this.showEndGame();
	}
	showEndGame() {
		this.endGameEl.classList.add("show");
	}
	hideEndGame() {
		this.endGameEl.classList.remove("show");
	}
	update() {
		this.playerTrackerUpdate();
	}
	playerTrackerCreate() {
		this.playerTrackerEl = document.createElement("div");
		this.playerTrackerEl.classList.add("player-tracker");
		document.body.appendChild(this.playerTrackerEl);
	}
	playerTrackerUpdate() {
		this.playerTrackerEl.innerHTML = `Player: ${this.app.player}`;
	}
	endGameCreate() {
		this.endGameEl = document.createElement("div");
		this.endGameEl.classList.add("end-game");

		this.gameResultEl = document.createElement("div");
		this.gameResultEl.classList.add("game-result");
		this.endGameEl.appendChild(this.gameResultEl);

		this.resetButton = document.createElement("button");
		this.resetButton.classList.add("reset-button");
		this.resetButton.innerHTML = "Reset";
		this.resetButton.addEventListener("click", () => {
			this.app.game.reset();
			this.hideEndGame();
		});
		this.endGameEl.appendChild(this.resetButton);

		document.body.appendChild(this.endGameEl);
	}
}
