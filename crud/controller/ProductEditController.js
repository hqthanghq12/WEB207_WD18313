window.ProductEditController = function($scope, $http, $location, $routeParams){
    $scope.hi = "tạm biệt";
    console.log($routeParams);
    const apiUrl = "http://localhost:3000/products";
    $scope.getData = function(id){
        // hiện thị ra thông tin 
        $http.get(`${apiUrl}/${id}`).then(function(res){
            console.log(res);
            $scope.inputValue = {
                name: res.data.name,
                price: res.data.price,
            }
        })
    }
    $scope.getData($routeParams.id);
    // Đặt mặc định checkDL = false 
    $scope.checkDL = {
        name: false,
        price: false
    }
    $scope.submitAdd = function(){
        // alert(123);
        console.log($scope.inputValue);
        // validate
        let flag = false;
        if(!$scope.inputValue || !$scope.inputValue.name){
            $scope.checkDL.name = true;
            flag = true
        }else{
            $scope.checkDL.name = false;
        }
        // validate giá
        if(flag == false){
            // tạo đối tượng newItems để đó dư liệu từ ngdung
            let newItems = {
                ...$scope.inputValue,
                // name: $scope.inputValue.name
            }
            $http.put(
                `${apiUrl}/${$routeParams.id}`,
                newItems
                ).then(function(res){
                    console.log(res);
                    if(res.status == 200){
                        $location.path('/product/list')
                    }
                })
        }
    }
}