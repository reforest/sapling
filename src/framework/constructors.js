const THREE = require('three');
const {materials} = require('./materials.js');
const {geometry} = require('./geometry.js');

const createShape = function( type, material = materials.celadonGreen, x=0, y=0, z=0) {
  const shape = new THREE.Mesh( type, material );
  shape.position.set( x, y, z );
  shape.castShadow = true;
  shape.receiveShadow = true;
  return shape;
};

module.exports = {
	createShape : createShape
};