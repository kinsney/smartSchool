const THREE = require('three')

const build = require('./building').build
const utils = require('../../plugins/utils.js')
const store = require('../../../store')
const buildingJson = require('../../buildings.json')


const buildings = module.exports = new THREE.Object3D
buildings.name = 'buildings'
buildings.position.set(0,0,0);


Object.keys(buildingJson).sort().forEach(buildingName =>
{
	let pos = buildingJson[buildingName]['position'];
    let building = build(buildingName,pos.x,pos.y,pos.z);
    buildings.add(building);
})


//悬停改变建筑颜色
store.$watch('hoverObjectName',(newObject,oldObject) =>
{
    const newBuilding = window.scene.getObjectByName(newObject)
    const oldBuilding = window.scene.getObjectByName(oldObject)
    utils.hover(newBuilding,true)
    utils.hover(oldBuilding,false)
})
