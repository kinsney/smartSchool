const Vue = require('vue');
const Vuex = require('vuex');
Vue.use(Vuex);


const state =
{
	isLogin:false,  //登录状态应该通过会话控制进行获取和设置，以保证会话的安全性
	loginBox:false, //全局的登录框是否显示
	routeSite:{scope:"campus",menu:"Environment"},   //scope取campus,building,floor三个层面,menu取 Environment,Security,Energy,Asset
	selectors:
	{
		campus:
		{
			Environment:
			{ 
				hardware:{streetLight:true},
				panel:{weather:false,streetLight:false} 
			},
			Security:
			{ 
				hardware:{camera:true},
				panel:{camera:false,warning:false} 
			},
			Energy:
			{ 
				hardware:{energy:true},
				panel:{energy:false} 
			},
			Asset:
			{ 
				hardware:{breaker:true,camera:true,streetLight:true},
				panel:{asset:false} 
			}
		},
		building:
		{
			Environment:
			{ 
				hardware:{},
				panel:{weather:false} 
			},
			Security:
			{ 
				hardware:{camera:true},
				panel:{camera:false,warning:false} 
			},
			Energy:
			{ 
				hardware:{},
				panel:{energy:false} 
			},
			Asset:
			{ 
				hardware:{camera:true},
				panel:{asset:false} 
			}
		},
		floor:
		{
			Environment:
			{ 
				hardware:{aircon:true,roomLight:true},
				panel:{weather:false} 
			},
			Security:
			{ 
				hardware:{camera:true,smogSensor:true,door:true},
				panel:{camera:false,warning:false} 
			},
			Energy:
			{ 
				hardware:{energy:true},
				panel:{energy:false} 
			},
			Asset:
			{ 
				hardware:{aircon:true,roomLight:true,camera:true,smogSensor:true,door:true,equipment:true,breaker:true},
				panel:{asset:false} 
			}
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
