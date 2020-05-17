(function(){
  "use strict";

  angular.module("public")
  .controller("SignUpController", SignUpController);

  SignUpController.$inject = ['MyInfoService', 'MenuService'];
  function SignUpController(MyInfoService, MenuService){
    var $ctrl = this;
    $ctrl.myinfo = {};

    $ctrl.submit = function(){
      MenuService.getMenuItem($ctrl.myinfo.favorite)
      .then(function(response){
        $ctrl.invalidFavorite = false;
        $ctrl.submitted = true;
        MyInfoService.setMyInfo($ctrl.myinfo);
      })
      .catch(function(){
        $ctrl.invalidFavorite = true;
      });
    }

    $ctrl.validateFavorite = function(){
      MenuService.getMenuItem($ctrl.myinfo.favorite)
      .then(function(){
        $ctrl.invalidFavorite = false;
      })
      .catch(function(){
        $ctrl.invalidFavorite = true;
      });
    }

  }
})();
