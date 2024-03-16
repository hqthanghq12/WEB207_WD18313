// viết chuẩn
// function myFun($scope){
    //  Luôn luôn có $scope
    // Đằng sau $scope. là biến mình khởi tạo
//     $scope.xinchao = "Học đê tí không may...."
// }
var app = angular.module("myApp", []);
// Khai báo angular js cùng với vùng mình sử dụng
// app.controller("domeCotroller", myFun);
// Viết tắt
app.controller("domeCotroller", function($scope){
    $scope.xinchao = "Học đê tí không may...."
    // Hiện thị thông sinh viên bao gồm: ma ten nam  rà màn hình
    $scope.maSV = "PH1234";
    $scope.tenSV = "Nguyễn Văn A";
    $scope.namSinh = 2004;
    // Đối tượng
    $scope.sinhVien = {
        maSV: "PH12356",
        tenSV: "Nguyễn Văn A",
        namSinh: 2004
    }
    // Mảng đối tượng
    $scope.sVien = [
        {
            maSV: "PH12356",
            tenSV: "Nguyễn Văn A",
            namSinh: 2004
        }, 
        {
            maSV: "PH12357",
            tenSV: "Nguyễn Văn B",
            namSinh: 2003
        }
    ]
});
//  Hiển thị thông tin của 1 người ra màn hình
