const Vue = require('vue')
const THREE = require('three')
const TWEEN = require('tween')

const loader = new THREE.JSONLoader()

const toTHREEColorObject = color =>
  new THREE.Color(`hsl(${color.h}, ${color.s}, ${color.l})`)

const getPureMaterial = mesh => {
  const materials = mesh.material.materials

  if (materials == null) {
    return null
  }

  for (let i = 0, l = materials.length; i < l; i++) {
    const material = materials[i]
    if (material.map == null) {
      return material
    }
  }

  return null
}

const load = exports.load = (mesh, file, includeMaterial, callback) => {
  const apply = (geometry, material) => {
    Object.assign(mesh, includeMaterial ? {geometry, material} : {geometry})

    if (typeof callback === 'function') {
      callback()
    }
  }

  if (file !== '') {
    loader.load(file, (geometry, materials) => {
      materials.forEach(material => {
        material.side = THREE.DoubleSide
        if (material.name === 'mirror') {
          material.envMap = reflection
        }
      })
      const material = new THREE.MeshFaceMaterial(materials)
      apply(geometry, material)
    })
  } else {
    // Hide the mesh
    setTimeout(() => {
      const material = new THREE.Material()
      material.visible = false
      apply(new THREE.Geometry(), material)
    }, 0)
  }
}

const dispose = exports.dispose = mesh => {
  const disposeMaterial = material => {
    if (material.envMap != null) {
      material.envMap.dispose()
    }
    if (material.map != null) {
      material.map.dispose()
    }
    material.dispose()
  }

  if (mesh.material != null) {
    if (mesh.material.materials) {
      mesh.material.materials.forEach(disposeMaterial)
    } else {
      disposeMaterial(mesh.material)
    }
  }

  if (mesh.geometry != null) {
    mesh.geometry.dispose()
  }
}

exports.initVM = (mesh, model) => new Vue({
  // options
  mesh: mesh,
  material: null,
  data: model,
  watch: {
    position: {
      handler: 'setPosition',
      deep: true
    },
    rotation: {
      handler: 'setRotation',
      deep: true
    },
  },
  methods: {
    setPosition (position) {
      let mesh = this.$options.mesh
      new TWEEN.Tween(mesh.position).to(position,1000).easing(TWEEN.Easing.Elastic.Out).start()
    },
    setRotation (rotation) {
      let mesh = this.$options.mesh
      new TWEEN.Tween(mesh.rotation).to(rotation,1000).easing(TWEEN.Easing.Elastic.Out).start()
    }
  }
})

exports.hover = (mesh, value) => {
  const color = new THREE.Color(value ? '#666' : '#000')
  if (mesh != null && mesh.material && mesh.material.materials) {
    mesh.material.materials.forEach(material => {
      material.emissive = color
    })
  }
}

window.opendoor = (mesh) => {
  let close = {x:0,y:0,z:0}
  let open = {x:0,y:-1.5707963267948966,z:0}
  new TWEEN.Tween(mesh.rotation).to(mesh.rotation==close?open:close,1000).easing(TWEEN.Easing.Elastic.Out).start()
}
