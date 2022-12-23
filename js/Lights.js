import ThreeasyComponent from "threeasy/component";

export default class Cubes extends ThreeasyComponent {
	constructor(app, settings) {
		super(app);

		let tau = 2 * Math.PI;

		this.makeAmbientLight();
		this.makeDirectionalLight(
			Math.cos(tau * 0.0) * 2,
			Math.sin(tau * 0.0) * 2,
			-5
		);
		this.makeDirectionalLight(
			Math.cos(tau * 0.33333) * 2,
			Math.sin(tau * 0.33333) * 2,
			-5
		);
		this.makeDirectionalLight(
			Math.cos(tau * 0.66666) * 2,
			Math.sin(tau * 0.66666) * 2,
			-5
		);
	}
	makeAmbientLight() {
		const ambientLight = new app.THREE.AmbientLight(0xffffff, 0.5);
		app.scene.add(ambientLight);
	}
	makeDirectionalLight(x, y, z) {
		const directionalLight = new app.THREE.DirectionalLight(0xffffff, 0.5);
		app.scene.add(directionalLight);

		const targetObject = new app.THREE.Object3D();
		targetObject.position.set(-2, -2, -2);
		app.scene.add(targetObject);

		directionalLight.target = targetObject;
	}
}
