const THREE = require('three');
const { materials, greenShades, brownShades } = require('./materials.js');
const { geometry } = require('./geometry.js');

const createShape = function( type, material = materials.celadonGreen, x=0, y=0, z=0) {
  const shape = new THREE.Mesh( type, material );
  shape.position.set( x, y, z );
  shape.castShadow = true;
  shape.receiveShadow = true;
  return shape;
};


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

	let trunk = createShape(geometry.trunk, brownMat, 0, 50, 0);
	trunk.position.set(0,-50,0);
	tree.add(trunk);

	let leavesGeo = new THREE.BoxGeometry(wd,h,wd);
	let leaves = createShape(leavesGeo, greenMat, 0, h, 0);
	leaves.position.set(0,posY,0);
	tree.add(leaves);
	tree.position.set(0,0,0);
	
	return tree;
}


const makeAcre = function(x,z) {
	let acre = new THREE.Group();

	for (var i = 0; i < x; i++) {
		for (var j = 0; j < z; j++) {

			let tree = new THREE.Group();
			let trunk = createShape(geometry.trunk, materials.bone, 0, 50, 0);
			tree.add(trunk);

			let index = Math.floor(Math.random(1) * greenShades.length);
			let material = greenShades[index];

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

			tree.position.set((randX-500),0,(randZ-500));
			acre.add(tree)
		}
	}

	return acre;
}


module.exports = {
	createShape : createShape,
	hashTree : hashTree,
	makeAcre : makeAcre
};