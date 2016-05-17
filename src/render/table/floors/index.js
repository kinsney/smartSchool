const THREE = require('three')

const build = require('./floor').build
const store = require('../../../store')
const floorsObject = module.exports = new THREE.Object3D
floorsObject.name = 'floors'
floorsObject.rotation.y = Math.PI * 45 / 180


store.$watch('building.floors',(value) =>
{
    if(value)
    {
        var floorHeight = store.building.floorHeight
        value.forEach((devices,index) =>
        {

		    let floor = build(`${index}`,0,index*floorHeight,0)
		    floorsObject.add(floor)
		    floorsObject.position.set(0,0,0)
        })
    }
},{deep:true})
