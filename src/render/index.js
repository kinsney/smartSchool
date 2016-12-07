const THREE = window.THREE = require('three');
const TWEEN = window.TWEEN = require('tween')
const store = require('../store');
const stats = require('./stats');
const controller = require('./controller');
const camera = require('./controller/camera');
const raycast = require('./plugins/raycast');
const zone  = require('./zone').scene;
const zone_area = require('./zone').area;
const table  = require('./table').scene;
const table_area = require('./table').area;

const actStore = require('../actStore')
//添加性能查看器到场景
// document.body.appendChild(stats.domElement);
//获取场景的canvasDom容器
const schoolDom = document.querySelector('#school');

//初始化渲染器
const Render  = new THREE.WebGLRenderer({canvas: schoolDom,antialias: true });
Render.shadowMap.enabled = true;
Render.shadowMap.soft = true;
Render.shadowMap.type = THREE.PCFSoftShadowMap;
Render.physicallyCorrectLights = true;

//改变窗口时重新设定渲染器大小
const setSize = () => { Render.setSize(window.innerWidth, window.innerHeight); };
window.addEventListener('resize', setSize);
setSize();

//监控变化，切换场景
var nowScene = window.scene = zone;
var nowArea = window.area = zone_area;
actStore.watch('routeSite.scope',(newScn) =>
{
  if (newScn == 'campus'){
    window.scene = nowScene = zone;
    window.area = nowArea = zone_area;
    camera.position.set(0,20000,12000);
    controller.target.set(0, 0, -20000)

  }else{
    window.scene = nowScene = table;
    window.area = nowArea = table_area
    camera.position.set(0,15000,15000);
    controller.target.set(0, 0,0)
  }
})


const render = () =>
{
  stats.begin();
  controller.update();
  TWEEN.update()
  raycast(nowArea);
  Render.render(nowScene,camera);

  stats.end();
  window.requestAnimationFrame(render);
}
window.requestAnimationFrame(render);
