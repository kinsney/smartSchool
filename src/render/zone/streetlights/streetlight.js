const THREE = require('three')
const store = require('../../../store')


const spotLight = Object.assign(new THREE.SpotLight(), {castShadow: true });
Object.assign(spotLight.shadow,
{
	bias: 0.001,
	radius:1,
	camera: new THREE.PerspectiveCamera( 90, 1, 0, 20000 )  //fov aspect near far
});
spotLight.position.set(3500,5000,3800)
spotLight.target.position.set(5000,5000,3800)

const streetlight = module.exports = window.streetlight =  new THREE.Object3D



let geometry = new THREE.BoxGeometry(200, 4000, 200); ;
let material = new THREE.MeshLambertMaterial({color: '#80A8DB'});
var mesh = new THREE.Mesh()
mesh.name = 'streetlight'
mesh.castShadow = true
Object.assign(mesh,{geometry,material});
mesh.position.set(3500,2000,3500)


streetlight.add(mesh)
