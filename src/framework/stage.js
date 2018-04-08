const THREE = require('three');

const { materials } = require('./materials.js');
const { createShape } = require('./constructors');
const { geometry } = require('./geometry.js');
const { objects } = require('./objects.js');

function stage() {
  this.shapeX = 0.5;
  this.shapeY = 100;
  this.shapeZ = 100;
  this.shapeColor = 0xffffff;
}

stage.prototype.init = function init() {
  this.scene = new THREE.Scene();
  this.camera();
  this.renderer();
  this.light();
  this.floor();
  
  // create shapes here
  let box = createShape(geometry.block, materials.white, 0, 200, 0);
  this.scene.add(box);
  
  //this.initShape();

  this.render();
};

stage.prototype.camera = function camera() {
  this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
  this.camera.position.y = 500;
  this.camera.position.z = 500;
  this.camera.position.x = 500;
  this.camera.updateProjectionMatrix();
  this.camera.lookAt(this.scene.position);
};

stage.prototype.renderer = function renderer() {
  this.renderer = new THREE.WebGLRenderer({antialias: true});
  this.renderer.setSize( window.innerWidth, window.innerHeight );
  this.renderer.setClearColor( 0x202020 , 1 );
  this.renderer.shadowMap.enabled = true;
  this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(this.renderer.domElement);
};

stage.prototype.light = function light() {
  var shadowlight = new THREE.DirectionalLight( 0xffffff, 1.8 );
  shadowlight.position.set( 0, 50, 0 );
  shadowlight.castShadow = true;
  this.scene.add(shadowlight);

  var light = new THREE.DirectionalLight( 0xffffff, 1.8 );
  light.position.set( 60, 100, 20 );
  this.scene.add(light);
  
  var backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -40, 100, 20 );
  this.scene.add(backLight);
};

stage.prototype.floor = function floor() {
  var geometry = new THREE.PlaneGeometry( 500, 500, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0x202020 } );
  this.floor = new THREE.Mesh( geometry, material );
  this.floor.material.side = THREE.DoubleSide;
  this.floor.position.y =-150;
  this.floor.rotation.x = 90*Math.PI/180;
  this.floor.rotation.y = 0;
  this.floor.rotation.z = 0;
  this.floor.doubleSided = true;
    this.floor.receiveShadow = true;
  this.scene.add(this.floor);
};

/*
stage.prototype.initShape = function initShape() {
  this.myArray = new THREE.Group();
  this.scene.add(this.myArray);
  this.geometry = new THREE.BoxGeometry( 50, 50, 50 );
  this.material = new THREE.MeshLambertMaterial({color : 0xF9F8ED, shading: THREE.FlatShading});
  this.shape = new THREE.Mesh(this.geometry, this.material);
  this.shape.castShadow = true;
  this.shape.receiveShadow = false;
  this.myArray.position.y =+150;
  this.myArray.add(this.shape);
};
*/

stage.prototype.render = function render() {
  requestAnimationFrame(this.render.bind(this));
  this.renderer.render(this.scene, this.camera);
};

module.exports = {stage : stage};