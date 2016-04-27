const THREE = require('three')
const store = require('../../../store')

const build = exports.build = (name,x=0,y=0,z=0) =>
{
    const loader = new THREE.JSONLoader()
    let mesh = new THREE.Mesh()
    let geometry = new THREE.BoxGeometry(1000, 400, 1000); ;
    let material = new THREE.MeshLambertMaterial({color: '#C15638'});
    let buildingName = store.building.name
    let currentFloor = store.building.currentFloor
    mesh.name = `${buildingName}-${currentFloor}-${name}`
    mesh.castShadow = true

    Object.assign(mesh,{geometry,material})
    mesh.position.set(x,y,z)
    return mesh
}