const THREE = require('three');
const environment = require('./environment');
const buildings = require('./buildings/');
const streetlights = require('./streetlights');
const myAxes = require('../plugins/arrow.js')();
const area = module.exports.area = new THREE.Object3D();
area.add(buildings,streetlights)
area.name = "zone_area";
const scene = module.exports.scene = new THREE.Scene();
scene.add(environment,area,myAxes);
scene.name = "zone";
