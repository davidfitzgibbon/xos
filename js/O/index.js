import ThreeasyComponent from "threeasy/component";

export default class O extends ThreeasyComponent {
	constructor(app, width) {
		super(app);
		let geo = new app.THREE.TorusGeometry(width * 0.25, 0.1, 8, 16);
		let mat = new app.THREE.MeshStandardMaterial({
			color: 0x226f54,
			side: app.THREE.DoubleSide,
		});
		this.mesh = new app.THREE.Mesh(geo, mat);

		return this.mesh;
	}
}
