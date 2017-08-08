var services = angular.module('myApp.services',[ng-resource]);

services.factory('CoursesFactory',function($resource){
    return $resource('',{},{
        query:{method:'GET',isArray:false},
        create:{method:'POST'}
    })
});