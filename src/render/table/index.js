const THREE = require('three');

const environment = require('./environment');
const devices = require('./devices');
const floors = require('./floors');
const myAxes = require('../plugins/arrow.js')();


const scene = module.exports  = new THREE.Scene();
scene.add(floors, environment,devices,myAxes);
scene.name = "table";

