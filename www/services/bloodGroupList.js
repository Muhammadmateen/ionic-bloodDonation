/**
 * Created by Mateen Bhai on 4/6/2016.
 */


(function()
{
  angular.module('starter')
    .factory('bloodGroupList',[bloodGroupList])

  function bloodGroupList()
  {
    var obj = {};

    obj.bloodSamples = ['O+','O-','A+','A-','B+','B-','AB+','AB-'];
    obj.bloodUrgency = ['With in 1 Day','With in 2 Day','With in 3 Day','With in 4 Day','With in 5 Day']
    obj.countries = {
      Pakistan:{
        states:{
          sindh:['Karachi','Hyderabad','Nawabshah','Thatta','Sukkhar'],
          punjab:['Multan','Lahore','Faislabad','Rawalpindi','Bahwalpur'],
          kpk:['Peshwar','Abbotabad','Mansehra','Dera Ismail Khan','Swat'],
          balochistan:['Quetta','Khuzdar','Turbat','Chaman','Hub']
        }
      }
    };
    obj.hospitals = ['Civil Hospital','Indus Hospital','Jinnah Hospital','South City Hospital','Park Lane Hospital','Clifton City Hospital'];
    obj.relations = ['Father','Mother','Brother','Sister','Cousin','Uncle','Aunty'];

    return obj;
  };


})();
