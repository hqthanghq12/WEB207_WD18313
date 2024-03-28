window.ProductListController = function($scope, $http, $location){
    $scope.hi = "tạm biệt";
    const apiUrl = "http://localhost:3000/products";
    $scope.listProduct = function(){
        // get = hiện thi danh sách, hiện thi 1
        // post = thêm
        // put = sửa
        // delete = xóa
        $http.get(apiUrl).then(function(res){
            console.log(res);
            $scope.products = res.data

        })
    }
    $scope.listProduct();
}