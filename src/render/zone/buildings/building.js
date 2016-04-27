const THREE = require('three');

const build = exports.build = (name,x=0,y=0,z=0) =>
{
    let mesh = new THREE.Mesh()
    let geometry = new THREE.BoxGeometry(2000, 6000, 2000); ;
    let material = new THREE.MeshLambertMaterial({color: '#EA7295'});
    mesh.name = name;
    mesh.castShadow = true;
    Object.assign(mesh,{geometry,material});

    mesh.position.set(x,y,z);
    return mesh;
}

