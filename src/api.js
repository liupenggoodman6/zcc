66666666666666var api={};
api.install = function (Vue) {
	if (api.installed) {
		return;
	}
	api.installed = true;
	Vue.prototype.$api={
			setting:{
				//subject
				addSubject:"/subject/addSubject",
				delSubject:"/subject/delSubject",
				modifySubject:"/subject/modifySubject",
                getSubjiectList:"/subject/getAllSubjectPaging",
				getSubjiectType:"/subject/getAllSubjectType",
				//voucherword
				getVoucherWord:"/voucherWord/getAllVoucherWord",
				addVoucherWord:"/voucherWord/addVoucherWord",
				delVoucherWord:"/voucherWord/delVoucherWord",
				modifyVoucherWord:"/voucherWord/modifyVoucherWord",
			},
			base:{
				
			},
			web:{
				
			},
            plan:{
            	
            },
            signup:{
                
            }
		}
}
export default api
