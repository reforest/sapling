const { Scene } = require('./framework/Scene.js');
const THREE = require('three');
const { createShape , hashTree, makeAcre } = require('./framework/constructors.js');

//import the setup from stage.js
let scene = new Scene();

// creates the group which is added to the scene
let group = new THREE.Group();

let input = document.getElementById("hashInput");
console.log(input.value);

let canvas = document.getElementById("canvas");

canvas.addEventListener("click", () => {
	let canvas = document.getElementById("canvas");
	canvas.innerHTML = "";
	let scene = new Scene();
	group.add(hashTree(input.value));
	console.log(input.value);
	scene.init(group);
})

/*
//make a 10x10 acre
//group.add(makeAcre(10,10));
*/

//group.add(hashTree(input.placeholder));
scene.init(group);