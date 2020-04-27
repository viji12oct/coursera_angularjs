(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
   var narrowCtrl = this;

   narrowCtrl.narrowDown = function(searchTerm){

   if(searchTerm){
       var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
       promise.then(function(response){
         narrowCtrl.found = response;
       })
       .catch(function(error){
         console.log(error);
       });
     }
   else{
     narrowCtrl.found = [];
   }
  };

   narrowCtrl.removeItem = function(itemIndex){
     this.lastRemoved = "Last item removed was " + narrowCtrl.found[itemIndex].name;
     narrowCtrl.found.splice(itemIndex,1);
   };
}

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'founditems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController(){
     var list = this;
     list.checkFoundList = function () {
	    return typeof list.items !== 'undefined' && list.items.length === 0;
    };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService( $http, ApiBasePath){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    //method responsible for reaching out to the server and retrieve contents
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(response){
      console.log(response);
      var foundItems = [];
      //check if the item is found in the returned list
      var itemLength = response.data.menu_items.length;
      for(var i=0; i<itemLength ; i++){
        var item = response.data.menu_items[i];
        if(item.description.indexOf(searchTerm) != -1){
          foundItems.push(item);
        }
      }
      return foundItems;
    });
  };
}


})();
