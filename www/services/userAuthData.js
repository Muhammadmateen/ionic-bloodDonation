/**
 * Created by Mateen Bhai on 4/6/2016.
 */


(function()
{
  angular.module('starter')
    .factory('userAuthData',[userAuthData])

    function userAuthData()
    {
      var obj = {};

      obj.userLocalData = function()
      {
        return JSON.parse(localStorage.getItem("loggedInUser"));
      }

      return obj;
    }


})();
