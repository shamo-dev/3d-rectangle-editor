import * as THREE from "three";
import Vertex from "../component/Vertex";

export const defaultVertexArray1 = [
  new Vertex(new THREE.Vector3(-6, 0, -6), "main", "center_1"),
  new Vertex(new THREE.Vector3(6, 0, -6), "main", "center_2"),
  new Vertex(new THREE.Vector3(10, 0, 6), "main", "right"),
  new Vertex(new THREE.Vector3(6, 0, 6), "main", "center_3"),
  new Vertex(new THREE.Vector3(-6, 0, 6), "main", "center_4"),
  new Vertex(new THREE.Vector3(-10, 0, 6), "main", "left"),
];

export const cameraPos = {
  D2Pos: new THREE.Vector3(0, 20, 40),
};

export const HemiLight = () => {
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x437e49, 0.3);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  return hemiLight;
};

export const PointLight = () => {
  const light = new THREE.PointLight(0xffffff, 0, 500);
  light.position.set(10, 60, 20);
  light.castShadow = true;
  light.shadow.mapSize.width = 256;
  light.shadow.mapSize.height = 256;
  light.shadow.bias = -0.001;
  light.decay = 2;

  return light;
};

export const SpotLight = () => {
  const spotLight = new THREE.SpotLight(0xffffff, 6);
  spotLight.position.set(10, 80, 20);
  spotLight.angle = Math.PI / 5;
  spotLight.penumbra = 1;
  spotLight.decay = 2;
  spotLight.distance = 150;

  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 10;
  spotLight.shadow.camera.far = 200;
  spotLight.shadow.bias = -0.001;
  spotLight.shadow.focus = 1;

  return spotLight;
};

export const RENDERER_PROPS = {
  antialias: true,
  // outputEncoding: THREE.sRGBEncoding,
  toneMapping: THREE.ACESFilmicToneMapping,
  shadowMapEnable: true,
};
