(function(){
  "use strict";

  angular.module('common')
  .service("MyInfoService", MyInfoService);

  MyInfoService.$inject = [];
  function MyInfoService(){
    var myinfoService = this;

    myinfoService.setMyInfo = function(myInfo){
      myinfoService.myinfo = myInfo;
    };

    myinfoService.getMyInfo = function(){
      return myinfoService.myinfo;
    }
  };
})();
