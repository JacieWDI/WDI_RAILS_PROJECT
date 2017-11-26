angular
  .module('activitybar')
  .controller('BarsIndexCtrl', BarsIndexCtrl);

BarsIndexCtrl.$inject = ['Bar'];
function BarsIndexCtrl(Bar) {
  const vm = this;

  vm.all = Bar.query();
}

//   function fetchBars() {
//     Bar
//       .query()
//       .$promise
//       .then(bars => {
//         vm.bars = bars;
//         console.log(vm.bars);
//       });
//   }
//   fetchBars();
//
// }
