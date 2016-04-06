/**
 * Created by Mateen Bhai on 4/5/2016.
 */


(function()
{
  angular.module('starter')
    .controller("signinController",['firebaseUrl','loaderService',signinController])

  function signinController(firebaseUrl,loaderService)
  {
    var ref = new Firebase(firebaseUrl);
    var _self = this;

    _self.authUser = function()
    {
      loaderService.showLoader();     //Show Loader
      ref.authWithPassword({
        email    : _self.user.email,
        password : _self.user.password
      }, function(error, authData) {
        loaderService.hideLoader();       //Hide loader
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    };

  /*, {
    remember: "sessionOnly"
  }*/




  }
})();
