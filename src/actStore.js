const Vue = require('vue');
const Vuex = require('vuex');
Vue.use(Vuex);


const state =
{
	isLogin:false,  //登录状态应该通过会话控制进行获取和设置，以保证会话的安全性
	routeSite:{scope:"campus",menu:"Energy"},   // scope取campus,building,floor三个层面,menu取Environment,Security,Energy,Asset
};

const mutations =
{
	SetRoutSite({routeSite},newVal)
	{
		if(newVal.scope) { routeSite.scope = newVal.scope; }
		if(newVal.menu) { routeSite.menu = newVal.menu; }
	}
};

window.actStore = module.exports = new Vuex.Store(
{
	state,
	mutations
});
