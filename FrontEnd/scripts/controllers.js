var mainCtrl = angular.module('myApp.controllers',[]);

mainCtrl.controller('coursesCtrl',['$scope','CoursesFactory','$location',
               function($scope,CoursesFactory,$location){
                   CoursesFactory.fuction(data){
                     $scope.courses = data;  
                   }
                   
               }]);