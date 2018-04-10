const { Scene } = require('./framework/Scene.js');
const THREE = require('three');
const { createShape } = require('./framework/constructors.js');

// choose your scene settings
const settings = {
	cameraDistance: 1000,	// how far from the elements
	antiAliasing: true,	// false for low perfoming graphics cards
	backgroundColor: 0x202020,	// use hexadecimal
	floorColor: 0x483c32,
	floorShadow: true,	// true if you want shadows to be cast on the floor
	appendToDomElementId: "canvas" // the destination of the threeJS scene in the DOM
};

//import the threeJS setup
let scene = new Scene(settings);

// for scene initiation
let group = new THREE.Group();

let input = document.getElementById("hashInput");
console.log(input.value);

let canvas = document.getElementById("canvas");

input.addEventListener("keydown", (e) => {

	if (e.code === "Enter") {
		let canvas = document.getElementById("canvas");
		canvas.innerHTML = "";
		let scene = new Scene(settings);
		group.add(hashTree(input.value));
		console.log(input.value);
		scene.init(group);
	}

})

scene.init(group);


