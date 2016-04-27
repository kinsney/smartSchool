const THREE = require('three')
const store = require('../../../store')


const build = exports.build = (name,y=0) =>
{
    let floorLength = store.building.floors.length
    let mesh = new THREE.Mesh()
    let buildingName = store.building.name
    let geometry = new THREE.BoxGeometry(2000, 230, 2000); ;
    let material = new THREE.MeshLambertMaterial({color: '#6BC183'});

    mesh.name = `${buildingName}-${name}`
    mesh.castShadow = true

    Object.assign(mesh,{geometry,material})
    mesh.position.set(0,y,0)

    return mesh
}

