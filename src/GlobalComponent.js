import FinanceBreadcrumb from './components/common/FinanceBreadcrumb.vue';
import FinanceMainLayout from './components/common/FinanceMainLayout.vue';
import FinanceDetailLayout from './components/common/FinanceDetailLayout.vue';
import FinanceMainCardLayout from './components/common/FinanceMainCardLayout.vue';
var GlobalComponent={};
GlobalComponent.install = function (Vue) {
	if (GlobalComponent.installed) {
		return;
	}
	Vue.component('FinanceBreadcrumb',FinanceBreadcrumb);
	Vue.component('FinanceMainLayout',FinanceMainLayout);
	Vue.component('FinanceDetailLayout',FinanceDetailLayout);
    Vue.component('FinanceMainCardLayout',FinanceMainCardLayout);
	GlobalComponent.installed = true;
}
export default GlobalComponent;
