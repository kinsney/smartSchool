const THREE = require('three')
const situation = require('./situation');
const lights = require('./lights');

const environment = module.exports = new THREE.Object3D;

environment.add(situation,lights);
environment.name = 'environment'

