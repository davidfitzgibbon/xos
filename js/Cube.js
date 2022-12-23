import { gsap } from "gsap";
import ThreeasyComponent from "threeasy/component";
import O from "./O";
import X from "./X";

export default class Cube extends ThreeasyComponent {
	constructor(app, settings) {
		super(app);
		this.x = settings.x;
		this.y = settings.y;
		this.delay = settings.delay;
		this.width = 0.8;

		this.selected = false;

		this.group = new app.THREE.Group();
		this.group.position.x = this.x;
		this.group.position.y = this.y;
		this.group.scale.set(0, 0, 0);
		this.app.scene.add(this.group);

		this.materials = {
			default: new app.THREE.MeshStandardMaterial({ color: 0xda2c38 }),
			hover: new app.THREE.MeshStandardMaterial({ color: 0xda2c38 }),
			selectedO: new app.THREE.MeshStandardMaterial({ color: 0xda2c38 }),
			selectedX: new app.THREE.MeshStandardMaterial({ color: 0xda2c38 }),
		};

		this.makeBox();

		this.interactions();

		this.hoverTimeline = gsap.timeline({ repeat: -1, yoyo: true });
		this.hoverTimeline.paused(true);
		this.hoverTimeline.fromTo(
			this.group.scale,
			{
				x: 1,
				y: 1,
			},
			{
				x: 0.8,
				y: 0.8,
				duration: 0.5,
				ease: "sine.inOut",
			}
		);
		this.reset();

		// this.selected = Math.random() > 0.5 ? "O" : "X";
		// this.showSelected();
	}
	reset() {
		this.selected = false;

		this.group.scale.set(0, 0, 0);

		gsap.to(this.group.scale, {
			x: 1,
			y: 1,
			z: 1,
			duration: 0.5,
			delay: this.delay,
		});

		if (this.selectedGroup) {
			this.group.remove(this.selectedGroup);
			this.selectedGroup.remove();
		}
		this.resetHover();
	}
	makeBox() {
		this.boxGeometry = new app.THREE.BoxGeometry(
			this.width,
			this.width,
			this.width
		);
		this.box = new app.THREE.Mesh(this.boxGeometry, this.materials.default);
		this.group.add(this.box);

		this.O = new O(app, this.width);
		this.X = new X(app, this.width);
	}
	interactions() {
		this.app.interactions.onClick(this.box, () => {
			if (!this.selected) {
				if (this.app.player == "O") {
					this.box.material = this.materials.selectedO;
				} else {
					this.box.material = this.materials.selectedX;
				}
				this.selected = this.app.player;
				this.showSelected();
				this.app.game.checkWin();
			}
		});
		this.app.interactions.onHover(this.box, {
			enter: () => {
				if (!this.selected) {
					this.box.material = this.materials.hover;
					document.body.style.cursor = "pointer";
					this.hoverTimeline.play();
				}
			},
			leave: () => {
				if (!this.selected) {
					this.box.material = this.materials.default;
					document.body.style.cursor = "default";
				}
				this.resetHover();
			},
		});
	}
	resetHover() {
		this.hoverTimeline.pause();
		gsap.to(this.group.scale, {
			x: 1,
			y: 1,
			duration: 0.5,
		});
	}

	showSelected() {
		this.selectedGroup = new app.THREE.Group();
		this.selectedGroup.position.z = 0.4;

		this.selectedGroup.scale.set(0, 0, 0);
		if (this.selected == "O") {
			this.selectedGroup.add(this.O);
		}
		if (this.selected == "X") {
			this.selectedGroup.add(this.X);
		}
		this.group.add(this.selectedGroup);

		var tl = gsap.timeline();
		console.log(this.group.rotation.x);
		tl.to(this.group.rotation, {
			x: 0,
			duration: 0,
		});
		tl.to(this.group.rotation, {
			x: Math.PI * 2,
			duration: 1,
		});
		tl.to(
			this.selectedGroup.scale,
			{ x: 1, y: 1, z: 1, duration: 1 },
			"-=.66666"
		);
		this.resetHover();
	}
}
