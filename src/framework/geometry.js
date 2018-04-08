const THREE = require('three');
const {materials} = require('./materials.js');


let geometry = {};

geometry.block = new THREE.BoxGeometry(100,100,100);
geometry.stick = new THREE.BoxGeometry(1,10,1);
geometry.fiveBlock = new THREE.BoxGeometry(5,5,5);
geometry.grass = new THREE.BoxGeometry(30, 30, 30);
geometry.base = new THREE.BoxGeometry(50, 10, 50);

module.exports = {
	geometry : geometry
};