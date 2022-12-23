import ThreeasyComponent from "threeasy/component";

export default class O extends ThreeasyComponent {
	constructor(app, width) {
		super(app);
		this.mesh = app.wreath.clone();
		this.mesh.scale.set(0.007, 0.007, 0.007);

		return this.mesh;
	}
}
