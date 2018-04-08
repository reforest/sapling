const THREE = require('three');

const createMaterial = function(color) {
  return new THREE.MeshLambertMaterial({
    color: color,
    flatShading: THREE.FlatShading
  });
}

let materials = {};

materials.white = createMaterial(0xffffff);
materials.black = createMaterial(0x000000);
materials.darthmouthGreen = createMaterial(0x00693E);
materials.celadonGreen = createMaterial(0x2F847C);
materials.celadon = createMaterial(0xACE1AF);

module.exports = {materials : materials};