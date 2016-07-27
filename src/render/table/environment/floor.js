const THREE = require('three')
const model = require('../floors/floor').model
const store = require('../../../store')
const actStore = require('../../../actStore')
const floor = module.exports = new THREE.Object3D
const utils = require('../../plugins/utils')
floor.rotation.y = Math.PI * 45 / 180
store.$watch('building.currentFloor',(value) =>
{

        for (let mesh = floor.children[0]; mesh != null; mesh = floor.children[0])
        {
            utils.dispose(mesh)
            floor.remove(mesh)
        }
        if(value){
          setTimeout(function(){
              var currentFloor = value
              let floorObject = model(currentFloor,0,0,0)
              floor.add(floorObject)
              floor.position.set(0,50,0)
          },2000)
        }


}
,{deep:true})
