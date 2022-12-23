import ThreeasyComponent from "threeasy/component";

export default class O extends ThreeasyComponent {
	constructor(app, width) {
		super(app);
		this.group = new app.THREE.Group();
		this.width = width;

		let mesh1 = this.cane();
		mesh1.rotation.z = -Math.PI * 0.15;
		mesh1.position.x = 0.075;
		this.group.add(mesh1);
		let mesh2 = this.cane();
		mesh2.rotation.y = Math.PI;
		mesh2.rotation.z = -Math.PI * 0.15;
		mesh2.position.x = -0.075;
		this.group.add(mesh2);

		return this.group;
	}
	cane() {
		let cane = app.candy_cane.clone();
		cane.scale.set(0.15, 0.15, 0.15);
		return cane;
	}
}
