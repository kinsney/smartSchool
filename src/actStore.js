const Vue = require('vue');
const Vuex = require('vuex');
Vue.use(Vuex);


const state =
{
	isLogin:false,  //登录状态应该通过会话控制进行获取和设置，以保证会话的安全性
	loginBox:false, //全局的登录框是否显示
	routeSite:{scope:"campus",menu:"Environment"},   // scope取campus,building,floor三个层面,menu取Environment,Security,Energy,Asset
	selectors:
	{
		campus:
		{
			Environment:{ hardware:{},panel:{} },
			Security:{ hardware:{},panel:{} },
			Energy:{ hardware:{},panel:{} },
			Asset:{ hardware:{},panel:{} }
		},
		building:
		{
			Environment:{ hardware:{},panel:{} },
			Security:{ hardware:{},panel:{} },
			Energy:{ hardware:{},panel:{} },
			Asset:{ hardware:{},panel:{} }
		},
		floor:
		{
			Environment:{ hardware:{},panel:{} },
			Security:{ hardware:{},panel:{} },
			Energy:{ hardware:{},panel:{} },
			Asset:{ hardware:{},panel:{} }
		}
	}
};

const mutations =
{
	SetRoutSite({routeSite},newVal)
	{
		if(newVal.scope) { routeSite.scope = newVal.scope; }
		if(newVal.menu) { routeSite.menu = newVal.menu; }
	},
	switchLogin(state,newVal)
	{
		state.isLogin = newVal;
	},
	switchLoginBox(state,newVal)
	{
		state.loginBox = newVal;
	}
};

window.actStore = module.exports = new Vuex.Store(
{
	state,
	mutations
});
