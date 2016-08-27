const THREE = require('three')
const store = require('../../../store')
const utils = require('../../plugins/utils')
const build = exports.build = (name) =>
{
    const loader = new THREE.JSONLoader()
    let mesh = new THREE.Mesh()
    let buildingName = store.building.name
    let object = store.devices[name]
    let model = object.model
    let currentFloor = store.building.currentFloor
    mesh.name = `${buildingName}-${currentFloor}-${name}`
    mesh.castShadow = true
    loader.load(`building/asset/${model}.json`,(geometry,materials) =>{
      const material = new THREE.MeshFaceMaterial(materials)
      Object.assign(mesh,{geometry,material})
    })
    mesh.vm = utils.initVM(mesh,object)
    Object.assign(mesh.position,object.position)
    Object.assign(mesh.rotation,object.rotation)
    return mesh
}
