angular.module('myController', ['ngRoute']).config(function($routeProvider){
    $routeProvider.when(
        '/product/list',{
            templateUrl: 'views/list.html',
            controller: ProductListController
        }
    )
});