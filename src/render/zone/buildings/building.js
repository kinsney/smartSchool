const THREE = require('three');
const store = require('../../../store')
const loader = new THREE.JSONLoader()
const build = exports.build = (name,x=0,y=0,z=0) =>
{
    let mesh = new THREE.Mesh()
    loader.load(`building/${name}/building.json`,(geometry,materials) =>{
      const material = new THREE.MultiMaterial(materials)
      Object.assign(mesh,{geometry,material})
    })
    mesh.name = name;
    mesh.castShadow = true;
    mesh.position.set(x,y,z);
    return mesh;
}

