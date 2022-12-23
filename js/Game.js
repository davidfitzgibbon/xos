import ThreeasyComponent from "threeasy/component";

export default class Game extends ThreeasyComponent {
	constructor(app, settings) {
		super(app);

		this.app.player = "O";
	}
	checkWin() {
		this.app.gameOver = this.checkGameOver();
		if (this.app.gameOver) {
			if (this.app.gameOver == "draw") {
				this.app.ui.draw();
			} else {
				this.app.ui.win();
			}
		} else {
			if (this.app.player == "O") {
				this.app.player = "X";
			} else {
				this.app.player = "O";
			}
		}
		this.app.ui.update();
	}
	checkGameOver() {
		let winner = false;
		// rows
		winner = this.checkSet([0, 3, 6]);
		if (winner) return winner;
		winner = this.checkSet([1, 4, 7]);
		if (winner) return winner;
		winner = this.checkSet([2, 5, 8]);
		if (winner) return winner;
		// cols
		winner = this.checkSet([0, 1, 2]);
		if (winner) return winner;
		winner = this.checkSet([3, 4, 5]);
		if (winner) return winner;
		winner = this.checkSet([6, 7, 8]);
		if (winner) return winner;
		// diagonal
		winner = this.checkSet([0, 4, 8]);
		if (winner) return winner;
		winner = this.checkSet([2, 4, 6]);
		if (winner) return winner;

		if (this.app.cubes.filter((cube) => cube.selected == false).length == 0) {
			return "draw";
		}
	}
	checkSet(arr) {
		if (
			this.app.cubes[arr[0]].selected &&
			this.app.cubes[arr[1]].selected &&
			this.app.cubes[arr[2]].selected &&
			this.app.cubes[arr[0]].selected == this.app.cubes[arr[1]].selected &&
			this.app.cubes[arr[0]].selected == this.app.cubes[arr[2]].selected &&
			this.app.cubes[arr[1]].selected == this.app.cubes[arr[2]].selected
		) {
			return this.app.cubes[arr[0]].selected;
		}
		return false;
	}
	reset() {
		this.app.cubes.forEach((cube) => {
			cube.reset();
		});
		this.app.player = "O";
		this.app.ui.update();
	}
}
