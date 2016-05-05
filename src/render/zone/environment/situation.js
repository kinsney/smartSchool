const THREE = require('three')
const floor = new THREE.Object3D
const situation = module.exports = new THREE.Object3D();
const makeSkyBox = require('../../plugins/makeSkybox.js');
const loader = new THREE.JSONLoader()

makeSkyBox('type1',situation);


// create the ground plane for test
var planeGeometry = new THREE.PlaneGeometry(200000, 200000, 20, 20);
var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff });
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2.0;
var campus = new THREE.Mesh()
loader.load('campus/campus.json',(geometry,materials)=>{
    const material = new THREE.MultiMaterial(materials)
    Object.assign(campus,{geometry,material})
})
situation.add(campus);

