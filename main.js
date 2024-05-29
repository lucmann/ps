import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.IcosahedronGeometry( 2, 0 );
const texture = new THREE.TextureLoader().load('textures/crate-base.png');
const material = new THREE.MeshNormalMaterial({
    map: texture
});
const polyhedron = new THREE.Mesh( geometry, material );
scene.add( polyhedron );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    polyhedron.rotation.x += 0.01;
    polyhedron.rotation.y += 0.01;

    renderer.render( scene, camera );
}

animate();

