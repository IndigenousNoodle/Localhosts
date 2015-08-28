(function(){

    angular.module("app.eventDetail", [])
    .controller('eventDetailController', eventDetailController);

  eventDetailController.$inject = ['$http', '$state', 'dataservice'];

  function eventDetailController($http, $state, dataservice){
    // use the navBarApp?
    var vm = this;
    vm.submit = submit;
  }

})();