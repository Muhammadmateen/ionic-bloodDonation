/**
 * Created by Mateen Bhai on 4/5/2016.
 */


(function()
{
    angular.module('starter')
        .controller("signupController",['firebaseUrl','loaderService','bloodGroupList',signupController])

    function signupController(firebaseUrl,loaderService,bloodGroupList)
    {
      console.log("Sign up controller Working");
      var ref = new Firebase(firebaseUrl);
      var _self = this;


      _self.bloodGroup = bloodGroupList.bloodSamples;


      _self.createUser = function()
      {
        loaderService.showLoader();
        ref.createUser({
          email    : _self.user.email,
          password : _self.user.password
        }, function(error, userData) {
          if (error) {
            loaderService.hideLoader();
            console.log("Error creating user:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            userDetails(userData.uid);
          }
        });
      };


      var userDetails = function(id)
      {
        var childRef = ref.child("users/"+id);
        childRef.set(
          {
            firstName:_self.user.firstName,
            lastName:_self.user.lastName,
            bloodGroup:_self.user.bloodGroup,
            role:2
          },function(error)
          {
            if(error)
            {loaderService.hideLoader();
              console.log("Error : ",error);
              ///_self.loader = false;

              //redirect.alertDialog("Error",error);
            }
            else
            {
              loaderService.hideLoader();
              console.log("Sign up Successfully");
              //_self.loader = false;
              //redirect.alertDialog("Successful","Successfully created user account");
              //redirect.redirectCall("login");
            }
          });
      };


    };
})();
