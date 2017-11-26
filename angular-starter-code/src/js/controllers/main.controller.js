angular
  .module('activitybar', [])
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [
  '$http'
];

function MainCtrl($http){
  const vm = this;

  console.log('MAINCTRL',vm);

  $http.get('http://localhost:3000/bars')
    .then(res => {
      console.log(res);
    });
}
