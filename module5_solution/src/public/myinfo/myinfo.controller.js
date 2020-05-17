(function(){
  "use strict";

  angular.module("public")
  .controller("MyInfoController", MyInfoController);

  MyInfoController.$inject = ['MenuService', 'myinfo'];
  function MyInfoController(MenuService, myinfo){
    var $ctrl = this;

    if(myinfo){
      $ctrl.myinfo = myinfo;

      MenuService.getMenuItem(myinfo.favorite)
                 .then(function(response){
                     $ctrl.menuItem = response;
                })
                .catch(function(){
                  console.log(response);
                });
    };

  }
})();
