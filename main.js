import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const texture = new THREE.TextureLoader().load('textures/crate-base.png');
const material = new THREE.MeshNormalMaterial({
    map: texture,
});

const material2 = new THREE.MeshNormalMaterial({
    color: 0x00ff00,
    blending: THREE.AdditiveBlending
});

// Geometry
const icosahedron = new THREE.IcosahedronGeometry( 2, 0 );
icosahedron.computeBoundingSphere();

// Mesh
const icosaCircumSphereMesh = new THREE.Mesh(
    new THREE.SphereGeometry(icosahedron.boundingSphere.radius, 32, 16),
    material2
);
const icosaMesh = new THREE.Mesh( icosahedron, material );

icosaMesh.add( icosaCircumSphereMesh );

// Scene
scene.add( icosaMesh );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    icosaMesh.rotation.x += 0.01;
    icosaMesh.rotation.y += 0.01;

    renderer.render( scene, camera );
}

animate();

