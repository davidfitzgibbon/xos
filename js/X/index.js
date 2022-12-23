import ThreeasyComponent from "threeasy/component";

export default class O extends ThreeasyComponent {
	constructor(app, width) {
		super(app);
		this.group = new app.THREE.Group();
		let geo = new app.THREE.CylinderGeometry(
			width * 0.125,
			width * 0.125,
			width * 0.8,
			8,
			1
		);
		let mat = new app.THREE.MeshStandardMaterial({
			color: 0xffffff,
			side: app.THREE.DoubleSide,
		});
		let mesh1 = new app.THREE.Mesh(geo, mat);
		mesh1.rotation.z = Math.PI * 0.25;
		this.group.add(mesh1);
		let mesh2 = new app.THREE.Mesh(geo, mat);
		mesh2.rotation.z = Math.PI * -0.25;
		this.group.add(mesh2);

		return this.group;
	}
}
