const THREE = require('three')

const build = require('./floor').build
const store = require('../../../store')
const actStore = require('../../../actStore')
const utils = require('../../plugins/utils')
const floorsObject = module.exports = new THREE.Object3D
floorsObject.name = 'floors'
floorsObject.rotation.y = Math.PI * 45 / 180
actStore.watch('routeSite.scope',(newValue,oldValue) =>
{
    if(newValue == "building")
    {
        try{
        const devices = require('../devices')
        for (let mesh = devices.children[0]; mesh != null; mesh = devices.children[0])
            {
                utils.dispose(mesh)
                devices.remove(mesh)
            }
        }catch(e){console.log(e)}
        for (let mesh = floorsObject.children[0]; mesh != null; mesh = floorsObject.children[0])
        {
            utils.dispose(mesh)
            floorsObject.remove(mesh)
        }


        var floorHeight = store.building.floorHeight
        store.building.floors.forEach((devices,index) =>
        {
		    let floor = build(`${index}`,0,index*floorHeight,0)
		    floorsObject.add(floor)
		    floorsObject.position.set(0,0,0)
        })
    }
},{deep:true})
