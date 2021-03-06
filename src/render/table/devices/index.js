const THREE = require('three')
const TWEEN = require('tween')
const build = require('./device').build
const store = require('../../../store')
const actStore = require('../../../actStore')
const floors = require('../floors')
const utils = require('../../plugins/utils.js')
const devices = window.devices = module.exports = new THREE.Object3D
devices.name = 'devices'

store.$watch('building.currentFloor',(newValue,oldValue) =>
{
    if(typeof(newValue)=="number"&&oldValue===null)
    {
        let floorsLength = store.building.floors.length
        let currentFloor = store.building.currentFloor

        new TWEEN.Tween(floors.children[currentFloor].position).to({
            x:0,y:0,z:0
        },2000).easing(TWEEN.Easing.Elastic.Out).start()

        for (let a=currentFloor+1;a<floorsLength;a++)
        {
            var floor = floors.children[a]
            new TWEEN.Tween(floor.position).to({
                x:0,y:floor.position.y+8000,z:0
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){
                for (let mesh = floors.children[0]; mesh != null; mesh = floors.children[0])
                {
                    {
                        utils.dispose(mesh)
                        floors.remove(mesh)
                    }
                }
            }).start()
        }
        for (let a=currentFloor-1;a>=0;a--)
        {
            var floor = floors.children[a]
            new TWEEN.Tween(floor.position).to({
                x:0,y:floor.position.y-8000,z:0
            },2000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){
            for (let mesh = floors.children[0]; mesh != null; mesh = floors.children[0])
            {
                {
                    utils.dispose(mesh)
                    floors.remove(mesh)
                }
            }
            }).start()
        }
        setTimeout(Object.keys(store.devices).sort().forEach((value)=>
                    {
                        let deviceObject = store.devices[value]
                        let device = build(value)
                        devices.add(device)
                        devices.position.set(0,0,0)
                    }),2000)
    }
    if(typeof(newValue)=="number"&&typeof(newValue)=="number"){
      for (let mesh = devices.children[0]; mesh != null; mesh = devices.children[0])
      {
          utils.dispose(mesh)
          devices.remove(mesh)
      }
      Object.keys(store.devices).sort().forEach((value)=>
                  {
                      let deviceObject = store.devices[value]
                      let device = build(value)
                      devices.add(device)
                      devices.position.set(0,0,0)
                  })
    }
    if(newValue===null&&typeof(oldValue)=="number"){
      for (let mesh = devices.children[0]; mesh != null; mesh = devices.children[0])
      {
          utils.dispose(mesh)
          devices.remove(mesh)
      }
    }
},{deep:true})
