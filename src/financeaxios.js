import axios from 'axios';
import Qs from 'qs';

var financeaxios={};
financeaxios.install=function(Vue){
	if(financeaxios.installed){
		return
	}
	var instance = axios.create({
		baseURL:"http://192.168.0.110:8765/",
		// baseURL:"http://192.168.0.108:8762/",
		// baseURL:"http://192.168.0.110:8765/",
        // baseURL:'http://localhost',
        //baseURL:'', //发布的
		withCredentials:true,
		headers:{'Content-Type':'application/x-www-form-urlencoded','X-Requested-With': 'XMLHttpRequest'},
		paramsSerializer: function(params) {
		    return Qs.stringify(params,{ indices: false,arrayFormat: 'indices',allowDots: true});
		}
	});
	//请求拦截器
	instance.interceptors.request.use(function (config) {
	    // Do something before request is sent
	    config.data=Qs.stringify(config.data,{ indices: false,arrayFormat: 'indices',allowDots: true}) //参数序列化
	    return config;
	}, function (error) {
	    // Do something with request error
	    return Promise.reject(error);
	});

	//响应拦截器
	instance.interceptors.response.use(function (response) {
	    // Do something with response data
	    console.log(response.config.url);
	    if(response.data.login==false)
	    {
	    	Vue.prototype.$confirm(response.data.prompt,"提示",{
	    		closeOnClickModal:false,
	    		showCancelButton:false,
	    		showClose:false,
	    		type: 'warning',
          		center: true
	    	})
	    	.then(()=>{
	    		if(response.config.url.toString().indexOf('external')!==-1){
	    			//会员登录定向
	    			location.href = '/#/web/memberlogin';
	    		}else{
	    			//系统用户登录定向
	    			location.href = '/';
	    		}
	    	})
	    }
	    return response;
	}, function (error) {
	    // Do something with response error
	    return Promise.reject(error);
	});
	Vue.prototype.$financeaxios = instance;
	Vue.prototype.$axios=axios;
	financeaxios.installed=true;
}
export default financeaxios;
