const Vue = require('vue')
const THREE = require('three')
const buildingsJson = require('./render/buildings.json')
window.store = module.exports = new Vue(
{
   data:
   {
      current: 'zone',
      hoverEnabled: true,
      currentObjectName: '',
      hoverObjectName: '',
      situation: 'garage',
      watcher: {},
      streetlights: {},
      building:
      {
         name: '',
         currentFloor: null,
         floors: null,
         floorHeight:null
      },
   },
   computed:
   {
      devices()
      {
         return this.building.currentFloor === null ? null : this.building.floors[this.building.currentFloor]
      }
   },
   watch:
   {
      'currentObjectName' (name)
      {
         //now position 0:null 1:building 2:building-1
         let position = name.split('-')
         switch (position.length)
         {
            case 0:
               this.current = 'zone'
               break;
            case 1:
               this.current = 'table';
               let buildingName = this.building.name = position[0]
               let building = buildingsJson[buildingName]
               if (building)
               {
                  let floors = building["floors"]
                  this.building.floors = floors
                  this.building.currentFloor = null
                  this.building.floorHeight = building["floors_height"]
               }
               break;
            case 2:
               this.current = 'table'
               this.building.name = position[0]
               this.building.currentFloor = Number(position[1])
               break;
         }
      }
   },
   created() {this.building.name = ''}
})





