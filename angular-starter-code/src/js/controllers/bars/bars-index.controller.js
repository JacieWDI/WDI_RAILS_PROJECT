angular
  .module('activitybar')
  .controller('BarsIndexCtrl', BarsIndexCtrl);

BarsIndexCtrl.$inject = ['Bar'];
function BarsIndexCtrl(Bar) {
  const vm = this;

  vm.bars = Bar.query();
}
