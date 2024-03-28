angular.module('myRoute', ['ngRoute']).config(function($routeProvider){
        // định nghĩa route
        $routeProvider.when(
            '/trang-chu', {
                templateUrl: 'views/trang_chu.html',
            }
        )
});