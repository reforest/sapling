const { createShape } = require('./constructors');
const { geometry } = require('./geometry');

const objects = {};

objects.makeBlock = createShape.bind(this, geometry.block);
objects.makeTrunk = createShape.bind(this, geometry.trunk);
objects.makeLeaves = createShape.bind(this, geometry.fiveBlock);
objects.makeGrass = createShape.bind(this, geometry.grass);
objects.makeBase = createShape.bind(this, geometry.base);

module.exports = {
	objects : objects
};