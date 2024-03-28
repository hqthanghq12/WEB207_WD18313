let app = angular.module("myApp", []);
app.controller("myController", function($scope){
    // $scope.hi = "Xin chào";
    // $scope.name = "Nguyễn Văn A";
    $scope.input ={
        danhSach:{
            A: false,
            B: false,
            C: false,
            D: false
        },
        select: "2",
        select1: "2"
    }
    // mô phỏng
    $scope.danhMuc = [
        {
            id: "1",
            name: "Bia"
        },
        {
            id: "2",
            name: "Rượu"
        },
        {
            id: "3",
            name: "Thuốc lá"
        }
    ]
    $scope.submit = function(){
        // alert(123);
        console.log($scope.name);
        console.log($scope.input.gender);
        console.log($scope.input.danhSach);
        console.log($scope.input.select);
        console.log($scope.input.select1);
    }
});