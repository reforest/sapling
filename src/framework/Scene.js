const THREE = require('three');

function Scene(settings) {
  this.settings = settings;
}

Scene.prototype.init = function init(group) {
  this.scene = new THREE.Scene();
  this.camera(this.settings.cameraDistance);
  this.renderer(this.settings.antiAliasing, this.settings.appendToDomElementId);
  this.light();
  this.floor(this.settings.floorColor, this.settings.floorShadow);
  this.scene.add(group);
  this.render();
};

Scene.prototype.camera = function camera(cameraDistance) {
  this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 5000 );
  this.camera.position.y = cameraDistance;
  this.camera.position.z = cameraDistance;
  this.camera.position.x = cameraDistance;
  this.camera.updateProjectionMatrix();
  this.camera.lookAt(this.scene.position);
};

Scene.prototype.renderer = function renderer(antiAliasing, elementId) {
  this.renderer = new THREE.WebGLRenderer({antialias: antiAliasing});
  this.renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
  this.renderer.setClearColor( 0x202020 , 1 );
  this.renderer.shadowMap.enabled = true;
  this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.getElementById(elementId).appendChild(this.renderer.domElement);
};

Scene.prototype.light = function light() {
  var shadowlight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  shadowlight.position.set( 0, 50, 0 );
  shadowlight.castShadow = true;
  shadowlight.shadow.mapSize.width = 512;  // default
  shadowlight.shadow.mapSize.height = 512; // default
  shadowlight.shadow.camera.near = 0.5;       // default
  shadowlight.shadow.camera.far = 5000;      // default

  shadowlight.shadowCameraVisible = true;

  
  shadowlight.shadowMapWidth = 512;
  shadowlight.shadowMapHeight = 512;

  var d = 200;

  shadowlight.shadowCameraLeft = -d;
  shadowlight.shadowCameraRight = d;
  shadowlight.shadowCameraTop = d;
  shadowlight.shadowCameraBottom = -d;

  shadowlight.shadowCameraFar = 1000;
  shadowlight.shadowDarkness = 0.2;


  this.scene.add(shadowlight);

  var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
  light.position.set( 60, 100, 20 );
  this.scene.add(light);
  
  var backLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  backLight.position.set( -40, 100, 20 );
  this.scene.add(backLight);
};

Scene.prototype.floor = function floor(floorColor, floorShadow) {
  var geometry = new THREE.PlaneBufferGeometry( 5000, 5000, 1, 1 );
  var material = new THREE.MeshStandardMaterial( { color: floorColor } );
  this.floor = new THREE.Mesh( geometry, material );
  this.floor.material.side = THREE.DoubleSide;
  this.floor.position.y =-150;
  this.floor.rotation.x = 90*Math.PI/180;
  this.floor.rotation.y = 0;
  this.floor.rotation.z = 0;
  this.floor.doubleSided = true;
  this.floor.receiveShadow = floorShadow;
  this.scene.add(this.floor);
};

Scene.prototype.render = function render() {
  requestAnimationFrame(this.render.bind(this));
  this.renderer.render(this.scene, this.camera);
};

module.exports = { Scene : Scene };