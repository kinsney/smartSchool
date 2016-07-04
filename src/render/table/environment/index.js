const THREE = require('three')
const situation = require('./situation');
const lights = require('./lights');
const floor = require('./floor');
const environment = module.exports = new THREE.Object3D;

environment.add(situation,floor,lights,floor);
environment.name = 'environment'

