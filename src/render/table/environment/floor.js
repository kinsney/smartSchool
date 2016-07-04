const THREE = require('three')
const build = require('../floors/floor').build
const store = require('../../../store')
const actStore = require('../../../actStore')
const floor = module.exports = new THREE.Object3D
const utils = require('../../plugins/utils')
floor.rotation.y = Math.PI * 45 / 180
actStore.watch('routeSite.scope',(value) =>
{
    if(value == "floor")
    {
        setTimeout(function(){
            var currentFloor = store.building.currentFloor
            let floorObject = build(currentFloor,0,0,0)
            floor.add(floorObject)
            floor.position.set(0,0,0)
        },2000)

    }else{
        for (let mesh = floor.children[0]; mesh != null; mesh = floor.children[0])
        {
            utils.dispose(mesh)
            floor.remove(mesh)
        }
    }
},{deep:true})
