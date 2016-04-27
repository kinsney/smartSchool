const THREE = require('three');

const environment = require('./environment');
const buildings = require('./buildings/');
const streetlights = require('./streetlights');
const myAxes = require('../plugins/arrow.js')();

const scene = module.exports = new THREE.Scene();
scene.add(environment,buildings,streetlights,myAxes);
scene.name = "zone";
