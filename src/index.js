const { Scene } = require('./framework/Scene.js');
const THREE = require('three');
const { objects } = require('./framework/objects.js');
const { materials } = require('./framework/materials.js');

//imports the setup from stage.js
let scene = new Scene();

// creates the group which is added to the scene
let group = new THREE.Group();

let tree = new THREE.Group();


const treeMaker = function(x,z) {

	for (var i = 0; i < x; i++) {
		for (var j = 0; j < z; j++) {

			let tree = new THREE.Group();
			
			let trunk = objects.makeTrunk(materials.bone, 0, 50, 0);
			tree.add(trunk);
			let leaves = objects.makeLeaves(materials.celadonGreen, 0, 100, 0);
			tree.add(leaves);

			tree.position.set((i*200-1000),0,(j*200-1000))
			group.add(tree)
		}
	}
}

treeMaker(10,10);

scene.init(group);
// scene takes in a group object
	// it contains all the objects to be rendered