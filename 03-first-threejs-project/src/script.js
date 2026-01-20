import * as THREE from "three";

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0.7, -0.6, 1);

console.log(mesh.position.length());

// scene.add(mesh);

const sizes = {
    width: 800,
    height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

console.log(mesh.position.distanceTo(camera.position));
console.log(mesh.position.normalize());

// Axes Helper
const axesHelper = new THREE.AxesHelper(1.5);
scene.add(axesHelper);

scene.add(camera);

mesh.scale.x = 2;
mesh.scale.y = 0.25;
mesh.scale.z = 0.5;
mesh.scale.set(2, 0.25, 0.5); // Other way to set scale

mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.5

camera.lookAt(mesh.position);

const group = new THREE.Group();
group.position.x = 0.5;
group.rotation.y = - 0.25;
scene.add(group);

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));

cube1.position.x = - 1.5;
group.add(cube1);

cube2.position.x = 0;
group.add(cube2);

cube3.position.x = 1.5;
group.add(cube3);


const renderer = new THREE.WebGLRenderer({
    canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);