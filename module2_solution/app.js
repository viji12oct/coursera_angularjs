(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListToBuyController', ShoppingListToBuyController)
.controller('ShoppingListAlreadyBoughtController',ShoppingListAlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ShoppingListToBuyController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListToBuyController(ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuylist();

  toBuy.buyitem =  function(index){
    ShoppingListCheckOffService.checkoutItem(index);
  }
}

ShoppingListAlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListAlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService(){
  var checkOffservice = this;

  var toBuyList = [
    { name: "cookies", quantity: 10 },
    { name: "milk", quantity: 1 },
    { name: "Bread", quantity: 2},
    { name: "Banana", quantity: 5},
    { name: "Vegetable", quantity: 2},
  ];
  var boughtList = [];

  checkOffservice.getToBuylist = function(){
    return toBuyList;
  }

  checkOffservice.getBoughtList = function(){
    return boughtList;
  }

  checkOffservice.checkoutItem = function(index){
    boughtList.push(toBuyList[index]);
    toBuyList.splice(index,1);
  }

}
})();
