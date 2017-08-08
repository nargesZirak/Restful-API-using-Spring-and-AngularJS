angular.module('courseReviewApp')
    .controller('mainCtrl', function($scope, $http) {
        $http.get('/reviews').
        then(function(response) {
            $scope.reviews = response.data;
        });
    });