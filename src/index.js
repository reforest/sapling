const { Scene } = require('./framework/Scene.js');
const THREE = require('three');
const { objects } = require('./framework/objects.js');
const { materials, greenShades } = require('./framework/materials.js');
const { createShape } = require('./framework/constructors.js');

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


			// random height
			let index = Math.floor(Math.random(1) * greenShades.length);
			let material = greenShades[index];
			//console.log(material);

			let height = Math.floor(Math.random(1) * 50);

			let h = (50 + Math.floor(Math.random(1) * 50));
			let w = (50 + Math.floor(Math.random(1) * 50));

			let shape1 = new THREE.BoxGeometry(w,h,w);
			let shape2 = new THREE.BoxGeometry(w-20,h+20,w-20);

			let leaves1 = createShape(shape1, material, 0, 100 + height, 0);
			tree.add(leaves1);

			let leaves2 = createShape(shape2, material, 0, 100 + height, 0);
			tree.add(leaves2);

			tree.position.set((i*200-1000),0,(j*200-1000))
			group.add(tree)
		}
	}
}

treeMaker(10,10);

scene.init(group);
// scene takes in a group object
	// it contains all the objects to be rendered