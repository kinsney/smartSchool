const THREE = require('three')
const model = require('../floors/floor').model
const store = require('../../../store')
const actStore = require('../../../actStore')
const floor = module.exports = new THREE.Object3D
const utils = require('../../plugins/utils')
store.$watch('building.currentFloor',(newValue,oldValue) =>
{

        for (let mesh = floor.children[0]; mesh != null; mesh = floor.children[0])
        {
            utils.dispose(mesh)
            floor.remove(mesh)
        }
        if(typeof(newValue)=="number"&&typeof(oldValue)=="number"){
              var currentFloor = newValue
              let floorObject = model(currentFloor,0,0,0)
              floor.add(floorObject)
              floor.position.set(0,50,0)
        }
        if(oldValue===null&&typeof(newValue)=="number"){
          setTimeout(function(){
            var currentFloor = newValue
            let floorObject = model(currentFloor,0,0,0)
            floor.add(floorObject)
            floor.position.set(0,50,0)
          },2000)
        }


}
,{deep:true})
