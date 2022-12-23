import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Threeasy from "threeasy";

import Cubes from "./Cubes";
import Game from "./Game";
import UI from "./UI";
import Lights from "./Lights";

window.app = new Threeasy(THREE, { interactions: true, light: false });

app.camera.position.z = 4;
// da2c38 - red
// 226f54 - darkgreen
// 87c38f - lightgreen
// f4f0bb - lightyellow
// 43291f - darkbrown
app.renderer.setClearColor(0x000000, 0);

new OrbitControls(app.camera, app.renderer.domElement);

const cubes = new Cubes(app);
app.game = new Game(app);
app.ui = new UI(app);
app.lights = new Lights(app);
