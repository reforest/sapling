const { Scene } = require('./framework/Scene.js');
const THREE = require('three');
const { objects } = require('./framework/objects.js');
const { materials, greenShades, brownShades } = require('./framework/materials.js');
const { createShape } = require('./framework/constructors.js');

function uuid() {
  return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = (c === 'x') ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const hash = "0x" + uuid();
const arr = hash.split("");


//imports the setup from stage.js
let scene = new Scene();

// creates the group which is added to the scene
let group = new THREE.Group();

let tree = new THREE.Group();


const hashTree = (hash) => {
	let tree = new THREE.Group();

	let range = (parseInt(hash) / (100**30)).toString().slice(0,20); // returns a 20 digit string

	let posY = 100 //parseInt(range.slice(0,4));
	let wd = 100 + parseInt(range.slice(4,8)/100);
	let h = 100 + parseInt(range.slice(8,12)/100);

	console.log("wd = " + wd);
	console.log("h = " + h);

	let brownIndex = Math.floor(parseInt(range.slice(12,14)) * 23 / 100); // total 23
	let brownMat = brownShades[brownIndex];

	let greenIndex = Math.floor(parseInt(range.slice(14,16)) * 60 / 100); // total 60
	let greenMat = greenShades[greenIndex];

	let trunk = objects.makeTrunk(brownMat, 0, 50, 0);
	trunk.position.set(0,-50,0);
	tree.add(trunk);

	let leavesGeo = new THREE.BoxGeometry(wd,h,wd);
	let leaves = createShape(leavesGeo, greenMat, 0, h, 0);
	leaves.position.set(0,posY,0);
	tree.add(leaves);
	tree.position.set(0,0,0);
	
	//return tree;

	group.add(tree);
}

hashTree("0xe1590a092c9534a151fcec8272590f78dffe8610ee83e87e10e52e18adc869bd");


/*
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

			let randX = (i*100 + Math.floor(Math.random(1) * 100));
			let randZ = (j*100 + Math.floor(Math.random(1) * 100));

			let shape1 = new THREE.BoxGeometry(w,h,w);
			let shape2 = new THREE.BoxGeometry(w-20,h+20,w-20);

			let leaves1 = createShape(shape1, material, 0, 100 + height, 0);
			tree.add(leaves1);

			let leaves2 = createShape(shape2, material, 0, 100 + height, 0);
			tree.add(leaves2);

			tree.position.set((randX-500),0,(randZ-500))
			group.add(tree)
		}
	}
}

treeMaker(10,10);
*/

scene.init(group);
// scene takes in a group object
	// it contains all the objects to be rendered