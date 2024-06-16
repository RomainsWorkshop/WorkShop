import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerHeight, window.innerWidth);

document.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x87CEEB); 