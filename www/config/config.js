/**
 * Created by Mateen Bhai on 4/5/2016.
 */



(function()
{
  angular.module('starter')
    .config(function($stateProvider,$urlRouterProvider)
    {
     /* var navLogin = {
        templateUrl:'./components/nav-login/nav-login.html',
        controller:'nav_loginController',
        controllerAs:'nav_login'
      }*/

      var navTool = {
        templateUrl:'./components/nav-tool/nav-tool.html',
        controller:'nav_toolController',
        controllerAs:'nav_tool'
      }

      var sideMenu = {
        templateUrl:'./components/side-menu/side-menu.html',
      }

      $stateProvider.state('signin',{
        url:'/signin',
        views:{
          'main':{
            templateUrl:'./components/sign-in/sign-in.html',
            controller:'signinController',
            controllerAs:'singin'
          }
        },
        isAuthenticate:false
      })

      .state('signup',{
        url:'/signup',
        views:{
          'main':{
            templateUrl:'./components/sign-up/sign-up.html',
            controller:'signupController',
            controllerAs:'signup'
          }
        },
        isAuthenticate:false
      })

       /* .state('dashboard',{
          url:'/dashboard',
          abstract: true,
          views:{
            'main':{
              templateUrl:'./components/dashboard/dashboard.html',
              controller:'dashboardController',
              controllerAs:'dashboard'
            }
          },
          isAuthenticate:true
        })*/

      .state('home',{
        url:'/home',
        views:{
          'nav':navTool,
          'main':{
            templateUrl:'./components/home/home.html',
            controller:'homeController',
            controllerAs:'home'
          }
        },
        isAuthenticate:true
      })

        .state('bloodRequirement',{
          url:'/bloodrequirement',
          views:{
            'main':{
              templateUrl:'./components/blood-requirement/blood-requirement.html',
              controller:'bloodRequirementController',
              controllerAs:'bloodRequirement'
            }
          },
          isAuthenticate:true
        })


       /* .state('sideMenu',{
          url:'/sidemenu',
          views:{
            'main':sideMenu
          },
          isAuthenticate:true
        })
*/
      /*.state('side-menu',{
        url:'/side-menu',
        views:{
          'nav':navTool,
          'main':{
            templateUrl:'./components/side-menu/side-side-menu.html',
            controller:'menuController',
            controllerAs:'side-menu'
          }
        },
        isAuthenticate:true
      })*/


      $urlRouterProvider.otherwise('bloodRequirement');


      })
})();
