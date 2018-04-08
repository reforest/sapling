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

materials.burntUmber = createMaterial(0x8A3324);
materials.sealBrown = createMaterial(0x59260B);
materials.bone = createMaterial(0x79443B);
materials.pine = createMaterial(0x01796F);
materials.bronze = createMaterial(0xCD7F32);
materials.camel = createMaterial(0xE1A95F);

module.exports = {materials : materials};