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

let greenShades = [
createMaterial(0x008000),
createMaterial(0x8F9779),
createMaterial(0x4B6F44),
createMaterial(0x87A96B),
createMaterial(0x568203),
createMaterial(0x013220),
createMaterial(0x4F7942),
createMaterial(0x71BC78),
createMaterial(0x228B22),
createMaterial(0xDADD98),
createMaterial(0x49796B),
createMaterial(0x29AB87),
createMaterial(0xA9BA9D),
createMaterial(0x90EE90),
createMaterial(0x74C365),
createMaterial(0x98FB98),
createMaterial(0x8A9A5B),
createMaterial(0x4A5D23),
createMaterial(0x317873),
createMaterial(0x01796F),
createMaterial(0x6c7c59),
createMaterial(0x009E60),
createMaterial(0xD0F0C0),
createMaterial(0x008080),
createMaterial(0x808000),
createMaterial(0x00FF00),
createMaterial(0x00A550),
createMaterial(0x009F6B),
createMaterial(0x00A877),
createMaterial(0x00AD83),
createMaterial(0x1CAC78),
createMaterial(0x4B5320),
createMaterial(0x006A4E),
createMaterial(0x66FF00),
createMaterial(0x4FFFB0),
createMaterial(0x1B4D3E),
createMaterial(0x1E4D2B),
createMaterial(0x00563B),
createMaterial(0xACE1AF),
createMaterial(0x2F847C),
createMaterial(0x03C03C),
createMaterial(0x00A86B),
createMaterial(0x4CBB17),
createMaterial(0x0BDA51),
createMaterial(0x004953),
createMaterial(0x18453B),
createMaterial(0x39FF14),
createMaterial(0x008000),
createMaterial(0x006600),
createMaterial(0x50C878),
createMaterial(0x00A693),
createMaterial(0x444C38),
createMaterial(0x679267),
createMaterial(0x043927),
createMaterial(0x76FF7A),
createMaterial(0x2E8B57),
createMaterial(0x55dd33),
createMaterial(0x009150),
createMaterial(0x00853E),
createMaterial(0x014421),
];

module.exports = {
	greenShades : greenShades,
	materials : materials
};