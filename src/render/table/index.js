const THREE = require('three');

const environment = require('./environment');
const devices = require('./devices');
const floors = require('./floors');
const myAxes = require('../plugins/arrow.js')();


const scene = exports.scene  = new THREE.Scene();
const area = exports.area = new THREE.Object3D();
area.add(floors,devices);
area.name  = "table_area"
scene.add(environment,area);
scene.name = "table";


