const Vue = require('vue');
const Vuex = require('vuex');
Vue.use(Vuex);


const state =
{
	isLogin:false,  //登录状态应该通过会话控制进行获取和设置，以保证会话的安全性
	loginBox:false, //全局的登录框是否显示
	routeSite:{scope:"campus",menu:"Asset"},   //scope取campus,building,floor三个层面,menu取Environment,Security,Energy,Asset
	selectors:
	{
		campus:
		{
			Environment:
			{ 
				hardware:{streetLight:true},
				panel:{} 
			},
			Security:
			{ 
				hardware:{camera:true},
				panel:{} 
			},
			Energy:
			{ 
				hardware:{energy:true},
				panel:{} 
			},
			Asset:
			{ 
				hardware:{breaker:true,camera:true,streetLight:true},
				panel:{} 
			}
		},
		building:
		{
			Environment:
			{ 
				hardware:{},
				panel:{} 
			},
			Security:
			{ 
				hardware:{camera:true},
				panel:{} 
			},
			Energy:
			{ 
				hardware:{},
				panel:{} 
			},
			Asset:
			{ 
				hardware:{camera:true},
				panel:{} 
			}
		},
		floor:
		{
			Environment:
			{ 
				hardware:{aircon:true,roomLight:true},
				panel:{} 
			},
			Security:
			{ 
				hardware:{camera:true,smogSensor:true,door:true},
				panel:{} 
			},
			Energy:
			{ 
				hardware:{energy:true},
				panel:{} 
			},
			Asset:
			{ 
				hardware:{aircon:true,roomLight:true,camera:true,smogSensor:true,door:true,equipment:true,breaker:true},
				panel:{} 
			}
		}
	}
};

// window.test = state.selectors['floor']['Asset']['hardware'];

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
	},
	siwtchSelector({selectors,routeSite},str1,str2,val)
	{
		selectors[routeSite.scope][routeSite.menu][str1][str2] = val;
	}
};

window.actStore = module.exports = new Vuex.Store(
{
	state,
	mutations
});
