/**
 * Created by Mateen Bhai on 4/5/2016.
 */


(function()
{
  angular.module('starter')
    .controller("bloodRequirementController",['firebaseUrl','bloodGroupList',bloodRequirementController])

  function bloodRequirementController(firebaseUrl,bloodGroupList)
  {
    console.log("OK OK O K");
    /*var ref = new Firebase(firebaseUrl);
    var _self = this;

    _self.bloodGroup = bloodGroupList.bloodSamples;
    _self.bloodUrgency = bloodGroupList.bloodUrgency;
    _self.Countries = bloodGroupList.countries;
    _self.hospitals = bloodGroupList.hospitals;
    _self.relations = bloodGroupList.relations;

    _self.postBloodRequest = function()
    {
      console.log(_self.bloodRequestData);
    }*/


  };
})();
