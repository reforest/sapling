const THREE = require('three');
const {materials} = require('./materials.js');


let geometry = {};

geometry.block = new THREE.BoxGeometry(10,10,10);
geometry.trunk = new THREE.BoxGeometry(10,100,10);
geometry.fiveBlock = new THREE.BoxGeometry(50,50,50);
geometry.grass = new THREE.BoxGeometry(30, 30, 30);
geometry.base = new THREE.BoxGeometry(50, 10, 50);

module.exports = {
	geometry : geometry
};