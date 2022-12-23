import ThreeasyComponent from "threeasy/component";
import Cube from "./Cube";

export default class Cubes extends ThreeasyComponent {
	constructor(app, settings) {
		super(app);
		app.cubes = [];
		let delay = 1;
		for (let x = -1; x <= 1; x++) {
			for (let y = 1; y >= -1; y--) {
				delay += 0.1;
				app.cubes.push(new Cube(app, { x, y, delay }));
			}
		}
	}
}
