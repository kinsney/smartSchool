const Vue = require('vue')
const THREE = require('three')
const buildingsJson = require('./render/buildings.json')
const actStore = require('./actStore')
window.store = module.exports = new Vue(
{
   data:
   {
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
         //now position 0:'' 1:building 2:building-1
         if(name){
            var position = name.split('-')
            switch (position.length)
            {
               case 1:
                  actStore.dispatch('SetRoutSite',{scope:'building'})
                  this.hoverObjectName = ''
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
                  actStore.dispatch('SetRoutSite',{scope:'floor'})
                  this.building.name = position[0]
                  this.building.currentFloor = Number(position[1])
                  break;
            }
         }else{
            actStore.dispatch('SetRoutSite',{scope:'campus'})
            this.building = {
               name: '',
               currentFloor: null,
               floors: null,
               floorHeight:null
            }
         }
      }
   },
   created() {this.building.name = ''}
})





