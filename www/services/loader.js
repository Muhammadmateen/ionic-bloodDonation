/**
 * Created by Mateen Bhai on 4/6/2016.
 */


(function()
{
  angular.module('starter')
    .factory('loaderService',['$ionicLoading',loaderService])

  function loaderService($ionicLoading)
  {
    var obj = {};

    obj.showLoader = function()
    {
      $ionicLoading.show({
        template:"<ion-spinner icon='bubbles'></ion-spinner>"
      });
    }

    obj.hideLoader = function()
    {
      $ionicLoading.hide();
    }

    return obj;
  }


})();
