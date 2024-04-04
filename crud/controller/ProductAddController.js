window.ProductAddController = function($scope, $http, $location){
    $scope.hi = "Tạm biệt";
    const apiUrl = "http://localhost:3000/products";
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
            $http.post(
                apiUrl,
                newItems
                ).then(function(res){
                    console.log(res);
                    if(res.status == 201){
                        $location.path('/product/list')
                    }
                })
        }
    }
}