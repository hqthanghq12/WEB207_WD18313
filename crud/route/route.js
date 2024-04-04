angular.module('myController', ['ngRoute']).config(function($routeProvider){
    // đi thi thì route sẽ theo quy định
    $routeProvider.when(
        '/product/list',{
            templateUrl: 'views/list.html',
            controller: ProductListController
        }
    ).when(
        '/product/add',{
            templateUrl: 'views/add.html',
            controller: ProductAddController
        }
    ).when(
        '/product/:id/edit',{
            templateUrl: 'views/add.html',
            controller: ProductEditController
        }
    )
});